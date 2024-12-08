export type PokeItem = { 
    name: string; 
    url: string; 
};

export type PokeItems = PokeItem[];

export type PokeResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokeItems;
};

export type PokeCries = {
    latest: string | null;
    legacy: string | null;
};

export type PokeForm = {
    name: string;
    url: string;
};

export type PokeForms = PokeForm[];

export type PokeAbility = {
    name: string;
    url: string;
};

export type PokeForm = {
    name: string;
    url: string;
};

export type PokeForms = PokeForm[];

export type PokeAbilitiesItem = {
    ability: PokeAbility;
    is_hidden: boolean;
    slot: number;
};

export type PokeAbilities = PokeAbilitiesItem[];

export type PokeGameVersion = {
    name: string;
    url: string;
};

export type PokeGame = {
    game_index: number;
    version: PokeGameVersion
};

export type PokeGameIndices = PokeGame[];

export type PokeHeldItem = {
    item: {
        name: string,
        url,
    };
};

export type PokeHeldItems = PokeHeldItem[];

export type PokeSpecies = {
    name: string;
    url: string;
};

export type PokeSprites = {
    front_default: string | null;
};

export type PokemonRespose = {
    abilities: PokeAbilities;
    base_experience: number;
    cries: PokeCries;
    forms: PokeForms;
    game_indices: PokeGameIndices;
    height: number;
    held_items: PokeHeldItems;
    name: string;
    species: PokeSpecies;
    sprites: PokeSprites;
};