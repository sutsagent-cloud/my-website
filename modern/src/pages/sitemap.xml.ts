import { brands, categories, products } from '../data/site';

export const prerender = true;

const siteUrl = (process.env.SITE_URL ?? 'http://localhost:4321').replace(/\/$/, '');
const paths = [
  '/', '/products.html', '/brands.html', '/categories.html', '/contact.html', '/blog.html',
  ...brands.map((brand) => `/brands/${brand.slug}.html`),
  ...categories.map((category) => `/categories/${category.slug}.html`),
  ...products.map((product) => product.href)
];

export function GET() {
  const urls = paths.map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}
