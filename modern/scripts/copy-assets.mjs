import { cp, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const modernRoot = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(modernRoot, '..', '..');
const dist = path.join(modernRoot, '..', 'dist');

await mkdir(dist, { recursive: true });
for (const directory of ['uploads', 'files', 'apps']) {
  await cp(path.join(projectRoot, directory), path.join(dist, directory), { recursive: true, force: true });
}

console.log('Copied legacy uploads, files and apps into dist/');
