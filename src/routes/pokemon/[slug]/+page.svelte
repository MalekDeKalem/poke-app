<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { loadPokemon } from '$lib/api';

    let { data } = $props()
</script>


<div>
    <p> This is the Pokémon page of ... {data.pokemon.name} </p>
    <img alt="picture of pokemon {data.pokemon.name}" src="{data.pokemon.sprites.front_default}"/>
    <p> His height is {data.pokemon.height}</p>
</div>
