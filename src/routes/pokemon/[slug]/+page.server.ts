import type {PageServerLoad} from './$types';


import { loadPokemon } from '$lib/api';
import type { PokemonRespose } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
    const slug = params.slug;
    try {
        const pokemon: PokemonRespose = await loadPokemon(slug);
        return { pokemon }
    } catch (error) {
        console.error('Failed to load Pokemon data:', error);
        throw error;
    }
};