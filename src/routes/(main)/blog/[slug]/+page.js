import { error } from '@sveltejs/kit';
import { base } from '$app/paths';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if (params.slug === 'hello-world') {
        return {
            title: 'Hello world',
            url: `${base}/markdown/hello-world.md`,
        };
    }

    throw error(404, 'Not found');
}