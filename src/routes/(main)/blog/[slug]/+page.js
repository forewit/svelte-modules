import { error } from '@sveltejs/kit';
import { base } from '$app/paths';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {

    function slugToTitle(slug) {
        return slug
            .split('-')
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join(' ');
    }

    return {
        title: slugToTitle(params.slug),
        url: `${base}/markdown/${params.slug}.md`,
    };

    throw error(404, 'Not found');
}