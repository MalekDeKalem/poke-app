<script lang="ts">
    import {onMount} from 'svelte';
    import {loadFiftyPokemon} from "$lib/api";
    import type { PokeItems } from '$lib/types';

    let data: PokeItems = $state([]);
    const offset = 0;

    onMount(async () => {
        const res = loadFiftyPokemon(offset);
        data = await res;
        $state.snapshot(data);
    });

</script>



<h1 class="text-3xl font-bold underline">
    Hello world!
</h1>

<ul>
    {#each data as item, i}
        <li id="list-item-${i}"> 
            <a class="text-purple-400" href="/pokemon/{i+offset+1}"> {item.name} </a> 
        </li>
    {/each}
</ul>