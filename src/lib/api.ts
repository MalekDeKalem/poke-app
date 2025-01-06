import type { PokeItem, PokeItems, PokemonRespose, PokeResponse } from "$lib/types";
import { error } from '@sveltejs/kit';

// export const loadPokemons = async (limit: number = 50, offset: number = 0): Promise<PokeItems> => {

//     if (limit > 50) {
//         throw error(400, 'Bad request');
//     }

//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);
//     if (!res.ok) throw new Error('Failed to reach api');
    
//     const data: PokeResponse = await res.json();

//     let pokemons: PokeItems = [];
//     data.results.map((item: PokeItem) => {
//         pokemons.push(item);
//     });
    
    
//     return pokemons;
// }

export const loadPokemons = (limit: number = 50, offset: number = 0): PokeItems | null => {
    if (limit > 50) throw new Error('Bad request');

    if (typeof window !== 'undefined') {
        const data = window.localStorage.getItem("pokemons");
        if (data) {
            const res: PokeItems = JSON.parse(data);
            return res;
        } else {
            console.error("Nothing in local storage");
            return null;
        }
    } else {
        console.error("window is not defined - running in SSR context");
        return null;
    }
};


export const loadAllPokemons = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0");
    if (res.ok) {
        const data = await res.json(); // Parse the JSON from the response
        window.localStorage.setItem("pokemons", JSON.stringify(data)); // Store the actual data
    } else {
        console.error("Failed to fetch Pokémon data", res.statusText);
    }
}

export const loadPokemon = async (name: string) => {
    // https://pokeapi.co/api/v2/pokemon/{id}
    // https://pokeapi.co/api/v2/pokemon-species/{id}
    // https://pokeapi.co/api/v2/evolutions-chain/{id}

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`); 
    if (!res.ok) throw new Error("Failed to reach api");

    const data: PokemonRespose = await res.json();

    return data;
}