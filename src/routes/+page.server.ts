import type {PageServerLoad} from './$types';


import { loadPokemons } from '$lib/api';

export const load: PageServerLoad = async ({ url }) => {
    const limit = Number(url.searchParams.get('limit')) || 50;
    const offset = Number(url.searchParams.get('offset')) || 0;

    try {
        const res = await loadPokemons(limit, offset);
        return { res };
    } catch(error) {
        console.error('Failed to load fifty Pokemons:', error);
        throw error;
    }
};