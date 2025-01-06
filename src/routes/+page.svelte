<script lang="ts">
    import {onMount} from 'svelte';
    import type { PokeItems } from '$lib/types';
    import Pagination from '$lib/components/Pagination.svelte'
    import { page } from '$app/stores'
    import Card from '$lib/components/Card.svelte';
    import { loadAllPokemons, loadPokemons } from '$lib/api.js';


    // let { data } = $props();

    onMount( async () => {
        await loadAllPokemons();
    });

    let data = loadPokemons(50, 0);

    console.log(data?.results);

</script>



<ul  class="grid grid-cols-5 place-items-center">
    {#each data?.results! as item, i}
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