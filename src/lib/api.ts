import type { PokeItem, PokeItems, PokemonRespose, PokeResponse } from "$lib/types";

export const loadFiftyPokemon = async (offset: number): Promise<PokeItems> => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=50&offset=${offset}`);
    if (!res.ok) throw new Error('Failed to reach api');
    
    const data: PokeResponse = await res.json();

    let pokemons: PokeItems = [];
    data.results.map((item: PokeItem) => {
        pokemons.push(item);
    });
    
    
    return pokemons;
}

export const loadPokemon = async (id: number) => {
    // https://pokeapi.co/api/v2/pokemon/{id}
    // https://pokeapi.co/api/v2/pokemon-species/{id}
    // https://pokeapi.co/api/v2/evolutions-chain/{id}

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); 
    if (!res.ok) throw new Error("Failed to reach api");

    const data: PokemonRespose = await res.json();

    return data.name;
}