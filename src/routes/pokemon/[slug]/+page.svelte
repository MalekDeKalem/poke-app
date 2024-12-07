<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { loadPokemon } from '$lib/api';

    //export let data: { name: string }; // This is injected automatically from the server-side load
    let { data } = $props()
    // let name: string = $state('');
    // let loading: boolean = $state(true);

    // let slug = $page.url.pathname.split('/').pop()!; 

    // onMount(async () => {
    //     try {
    //         name = await loadPokemon(Number(slug));
    //     } catch (error) {
    //         console.error('Failed to load Pokémon data:', error);
    //     } finally {
    //         loading = false; // Stop loading when API call finishes
    //     }
    // });
</script>


<div>
        <p> This is the Pokémon page of ... {data.name} </p>
</div>
