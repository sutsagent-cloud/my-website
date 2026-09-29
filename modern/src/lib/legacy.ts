import fs from 'node:fs';
import path from 'node:path';

const legacyRoot = path.resolve(process.cwd(), 'src', 'content', 'legacy');

export type LegacyPage = {
  file: string;
  slug: string;
  title: string;
  content: string;
  isHome: boolean;
};

function decodeEntities(value: string) {
  return value
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

export function getLegacyPages(): LegacyPage[] {
  const manifest = JSON.parse(fs.readFileSync(path.join(legacyRoot, 'manifest.json'), 'utf8')) as Array<{ file: string; title: string }>;
  return manifest.map(({ file, title: rawTitle }) => {
      const title = decodeEntities(rawTitle.replace(/\s+-\s+興裕通訊企業有限公司.*$/u, '').trim());
      return {
        file,
        slug: file,
        title,
        content: fs.readFileSync(path.join(legacyRoot, file), 'utf8'),
        isHome: file === 'index.html'
      };
    });
}
