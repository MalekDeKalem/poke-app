<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { loadPokemon } from '$lib/api';

    let { data } = $props()
</script>


<div>
    <h1 class="flex justify-center font-bold text-2xl"> {data.pokemon.name.toUpperCase()} </h1>
    <hr class="rounded-lg border-2 mx-9">
    <img alt="picture of pokemon {data.pokemon.name}" src="{data.pokemon.sprites.front_default}"/>
    <p> His height is {data.pokemon.height}</p>
    <p>Experience: {data.pokemon.base_experience}</p>
    <figure>
        <figcaption> Listen to the Cry of {data.pokemon.name} </figcaption>
        {#if data.pokemon.cries.latest}
            <audio class="rounded-lg" controls src={data.pokemon.cries.latest}></audio>
        {:else}
            <audio class="rounded-lg" controls src={data.pokemon.cries.legacy}></audio>
        {/if}
    </figure>
</div>
