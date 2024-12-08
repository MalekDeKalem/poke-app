<script lang="ts">
    import {onMount} from 'svelte';
    import {loadFiftyPokemon} from "$lib/api";
    import type { PokeItems } from '$lib/types';

    let { data } = $props();
</script>



<h1 class="text-3xl font-bold underline">
    Hello world!
</h1>

<ul>
    {#each data.res as item, i}
        <li id="list-item-${i}"> 
            <a class="text-purple-400" href="/pokemon/{item.name}"> {item.name} </a> 
        </li>
    {/each}
</ul>