import type {PageServerLoad} from './$types';


import { loadFiftyPokemon } from '$lib/api';

export const load: PageServerLoad = async ({ params }) => {
    try {
        const res = await loadFiftyPokemon(0);
        return { res };
    } catch(error) {
        console.error('Failed to load fifty Pokemons:', error);
        throw error;
    }
};