import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, '..', '..');
const outputRoot = path.resolve(scriptDir, '..', 'src', 'content', 'legacy');

/** @param {string} html */
function extractContent(html) {
  const match = html.match(/<div id="content-wrapper"[\s\S]*?(?=<div id="customer-accounts-app">|<\/body>)/i);
  if (!match) throw new Error('Unable to find content-wrapper');

  return match[0]
    .replace(/<div id="content-wrapper"[^>]*>/i, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/href="(?!https?:|mailto:|#|\/)([^"]+)"/gi, 'href="/$1"')
    .replace(/src="(?!https?:|data:|\/)([^"]+)"/gi, 'src="/$1"')
    .trim();
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

const files = (await readdir(projectRoot))
  .filter((file) => file.endsWith('.html') && file !== 'index.html' && file !== 'blog.html')
  .sort();

const manifest = [];
for (const file of files) {
  const html = await readFile(path.join(projectRoot, file), 'utf8');
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? file;
  await writeFile(path.join(outputRoot, file), extractContent(html), 'utf8');
  manifest.push({ file, title });
}

await writeFile(path.join(outputRoot, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
console.log(`Migrated ${files.length} legacy pages into src/content/legacy/`);
