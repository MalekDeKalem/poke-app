<script lang="ts">
    import { page } from '$app/stores'
    import {onMount} from 'svelte';

    let { pageSize, totalItems } = $props();
    let currentPage = $derived((Number($page.url.searchParams.get('offset')) || 0) / 50);


    let totalPages = $state(totalItems / pageSize);

</script>


<div>
    {#each Array(totalPages) as _, idx}
        {#if idx === currentPage}
            <a class="text-lime-600" href="/?limit={pageSize}&offset={pageSize * idx}"> {idx + 1}</a>
        {:else}
            <a class="text-rose-600" href="/?limit={pageSize}&offset={pageSize * idx}"> {idx + 1}</a>
        {/if}
    {/each}
</div>


