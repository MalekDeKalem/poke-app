<script lang="ts">
    import {onMount} from 'svelte';
    import type { PokeItems } from '$lib/types';
    import Pagination from '$lib/components/Pagination.svelte'
    import { page } from '$app/stores'

    let { data } = $props();

    
</script>



<ul>
    {#each data.res as item, i}
        <li id="list-item-${i}"> 
            <a class="text-purple-400" href="/pokemon/{item.name}"> {item.name} </a> 
        </li>
    {/each}
</ul>

<Pagination pageSize={50} totalItems={1000}/>