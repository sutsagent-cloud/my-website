import { cp, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const modernRoot = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(modernRoot, '..', '..');
const dist = path.join(modernRoot, '..', 'dist');

await mkdir(dist, { recursive: true });
for (const directory of ['uploads', 'files', 'apps']) {
  await cp(path.join(projectRoot, directory), path.join(dist, directory), { recursive: true, force: true });
}

if (process.env.GITHUB_ACTIONS) {
  const base = '/my-website';
  /** @type {string[]} */
  const htmlFiles = [];
  /** @param {string} directory */
  async function collect(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) await collect(entryPath);
      else if (entry.name.endsWith('.html')) htmlFiles.push(entryPath);
    }
  }
  await collect(dist);
  for (const file of htmlFiles) {
    const source = await readFile(file, 'utf8');
    const updated = source
      .replace(/(href|src|action)="\/(?!\/)/g, `$1="${base}/`)
      .replace(/url\((['"])\/(?!\/)/g, `url($1${base}/`);
    await writeFile(file, updated, 'utf8');
  }
}

console.log('Copied legacy uploads, files and apps into dist/');
