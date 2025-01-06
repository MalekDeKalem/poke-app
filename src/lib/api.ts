import type { PokeItem, PokeItems, PokemonRespose, PokeResponse } from "$lib/types";
import { error } from '@sveltejs/kit';

export const loadPokemons = async (limit: number = 50, offset: number = 0): Promise<PokeItems> => {

    if (limit > 50) {
        throw error(400, 'Bad request');
    }

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);
    if (!res.ok) throw new Error('Failed to reach api');
    
    const data: PokeResponse = await res.json();

    let pokemons: PokeItems = [];
    data.results.map((item: PokeItem) => {
        pokemons.push(item);
    });
    
    
    return pokemons;
}

export const loadAllPokemons = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
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