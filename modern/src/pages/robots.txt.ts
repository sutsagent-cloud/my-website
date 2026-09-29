export const prerender = true;

export function GET() {
  const siteUrl = (process.env.SITE_URL ?? 'http://localhost:4321').replace(/\/$/, '');
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}
