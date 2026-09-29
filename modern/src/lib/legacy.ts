import fs from 'node:fs';
import path from 'node:path';

const legacyRoot = path.resolve(process.cwd(), '..');

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

function extractContent(html: string) {
  const contentWrapper = html.match(/<div id="content-wrapper"[\s\S]*?(?=<div id="customer-accounts-app">|<\/body>)/i)?.[0];
  if (!contentWrapper) return '<p>此頁內容正在整理中。</p>';

  return contentWrapper
    .replace(/<div id="content-wrapper"[^>]*>/i, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/href="(?!https?:|mailto:|#|\/)([^"]+)"/gi, 'href="/$1"')
    .replace(/src="(?!https?:|data:|\/)([^"]+)"/gi, 'src="/$1"')
    .trim();
}

export function getLegacyPages(): LegacyPage[] {
  return fs.readdirSync(legacyRoot)
    .filter((file) => file.endsWith('.html') && file !== 'blog.html')
    .sort()
    .map((file) => {
      const html = fs.readFileSync(path.join(legacyRoot, file), 'utf8');
      const rawTitle = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? file;
      const title = decodeEntities(rawTitle.replace(/\s+-\s+興裕通訊企業有限公司.*$/u, '').trim());
      return {
        file,
        slug: file,
        title,
        content: extractContent(html),
        isHome: file === 'index.html'
      };
    });
}
