<script lang="ts">
    import {onMount} from 'svelte';
    import type { PokeItems } from '$lib/types';
    import Pagination from '$lib/components/Pagination.svelte'
    import { page } from '$app/stores'
    import Card from '$lib/components/Card.svelte';
    import { loadAllPokemons, loadPokemons } from '$lib/api.js';
    import PokeBallIcon from '$lib/icons/PokeBallIcon.svelte';
    import { writable } from 'svelte/store';
    import TopBar from '$lib/components/TopBar.svelte';
    import { pokeStore, queryStore } from '$lib/stores';

    // svelte-ignore non_reactive_update
    let limit = $derived(Number($page.url.searchParams.get('limit')) || 50);
    let offset = $derived(Number($page.url.searchParams.get('offset')) || 0); 
    const data = $derived($pokeStore);

    onMount(async () => {
        const storedData = localStorage.getItem("pokemons");
        if (storedData) {
            pokeStore.set(JSON.parse(storedData));
        } else {
            await loadAllPokemons();
        }
    });


</script>

<TopBar />

<ul  class="grid desktop:grid-cols-5 tablet:grid-cols-3 phone:grid-cols-1 place-items-center">
    {#each data.results.filter((item: any) => item.name.toLowerCase().includes($queryStore)).slice(offset, limit+offset) as item, i}
        <li id="list-item-${i}"> 
            <a href="/pokemon/{item.name}">
                <Card name={item.name} />
            </a>
        </li>
    {/each}
</ul>
<div class="z-10 my-2.5">
    <Pagination pageSize={50} totalItems={1025} />
</div>