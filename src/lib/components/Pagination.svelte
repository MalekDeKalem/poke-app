<script lang="ts">
    import { page } from '$app/stores'
    import {onMount} from 'svelte';

    let { pageSize, totalItems } = $props();


    let totalPages = $state(totalItems / pageSize);

    let currentPage = $state((Number($page.url.searchParams.get('offset')) || 0) / pageSize);
</script>


<div>
    {#each Array(totalPages) as _, idx}
        {#if idx+1 === currentPage}
            <a class="text-lime-600" href="/?limit={pageSize}&offset={pageSize * idx}"> {idx + 1}</a>
        {:else}
            <a class="text-rose-600" href="/?limit={pageSize}&offset={pageSize * idx}"> {idx + 1}</a>
        {/if}
    {/each}
</div>


