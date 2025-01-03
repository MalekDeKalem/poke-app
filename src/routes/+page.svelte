<script lang="ts">
    import {onMount} from 'svelte';
    import type { PokeItems } from '$lib/types';
    import Pagination from '$lib/components/Pagination.svelte'
    import { page } from '$app/stores'
    import Card from '$lib/components/Card.svelte';


    let { data } = $props();

    console.log(data.res[0])
    
</script>



<ul  class="grid grid-cols-5 place-items-center">
    {#each data.res as item, i}
        <li id="list-item-${i}"> 
            <!-- <a class="text-purple-400" href="/pokemon/{item.name}"> {item.name} </a>  -->
            <a href="/pokemon/{item.name}">
                <Card name={item.name} />
            </a>
        </li>
    {/each}
</ul>
<div class="z-10 my-2.5">
    <Pagination pageSize={50} totalItems={1025} />
</div>