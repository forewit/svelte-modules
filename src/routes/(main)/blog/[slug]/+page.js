import { error } from '@sveltejs/kit';
import { base } from '$app/paths';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if (params.slug === 'hello-world') {
        return {
            title: 'Hello world',
            markdown: `
            # heading 1
            ## heading 2
            some text
            ![leaf](${base}/images/moon.svg) {dark}
            inline image: ![leaf](${base}/images/sun.svg)
            sun: ![sun](${base}/images/leaf.svg)`
        };
    }

    throw error(404, 'Not found');
}