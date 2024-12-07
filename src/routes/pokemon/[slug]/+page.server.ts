import type {PageServerLoad} from './$types';


import { loadPokemon } from '$lib/api';

export const load: PageServerLoad = async ({ params }) => {
    const slug = params.slug;
    try {
        const name = await loadPokemon(Number(slug));
        return { name };
    } catch (error) {
        console.error('Failed to load Pokemon data:', error);
        throw error;
    }
};