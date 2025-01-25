import { writable } from 'svelte/store';
import type { PokeResponse } from './types';




export const pokeStore = writable(JSON.parse('{"results": []}'));
