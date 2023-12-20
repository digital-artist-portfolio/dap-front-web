import type { RequestHandler } from '@sveltejs/kit';

const data = [
	{ id: '0', url: '/illustration-1.jpg', alt: 'the first illustration' },
	{ id: '1', url: '/illustration-2.png', alt: 'the second illustration' },
	{ id: '2', url: '/illustration-3.png', alt: 'the third illustration' },
	{ id: '3', url: '/illustration-4.jpg', alt: 'the forth illustration' },
	{ id: '4', url: '/illustration-5.jpg', alt: 'the fifth illustration' }
];

export const GET: RequestHandler = (event) => {
	const id = event.url.searchParams.get('id');

	if (id) {
		const image = data.find((d) => d.id === id);

		if (!image) {
			return new Response(
				JSON.stringify({ code: '0x1', message: `Resource not found for id ${id}` }),
				{ status: 404 }
			);
		}

		return new Response(JSON.stringify(image), { status: 200 });
	}

	return new Response(
		JSON.stringify({
			images: data
		}),
		{
			status: 200
		}
	);
};
