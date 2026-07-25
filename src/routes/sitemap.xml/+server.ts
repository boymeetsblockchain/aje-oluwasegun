import { json } from '@sveltejs/kit';

const siteUrl = 'https://ajeoluwasegun.com';

export const GET = async () => {
	const pages = [{ url: '', lastmod: '2026-07-25' }];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${pages
		.map(
			(page) => `
	<url>
		<loc>${siteUrl}/${page.url}</loc>
		<lastmod>${page.lastmod}</lastmod>
		<changefreq>weekly</changefreq>
		<priority>1.0</priority>
	</url>`
		)
		.join('')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
