<script lang="ts">
    import { page } from '$app/stores'
    import {onMount} from 'svelte';

    let { pageSize, totalItems, pagesToShow=5 } = $props();
    let currentPage = $derived((Number($page.url.searchParams.get('offset')) || 0) / pageSize);


    let totalPages = $state(totalItems / pageSize);

    const getPageRange = (current: number) => {
        const halfRange = Math.floor(pagesToShow / 2);
        let startPage = Math.max(0, current - halfRange);
        let endPage = startPage + pagesToShow - 1;

        if (endPage >= totalPages) {
            endPage = totalPages - 1;
            startPage = Math.max(0, endPage - pagesToShow + 1);
        }

        return Array.from({length: endPage - startPage + 1}, (_, idx) => startPage + idx);
    }

</script>


<div class="justify-center flex">
    <div class="bg-gradient-to-r from-slate-600 to-slate-400 px-0.5 justify-center flex py-0.5 rounded">
        {#each getPageRange(currentPage) as pageNum}
            {#if pageNum === currentPage}
                <div class="rounded-lg bg-gray-800 size-11 mx-0.5">
                    <a class="text-lime-600 justify-center flex items-center h-full" href="/?limit={pageSize}&offset={pageSize * pageNum}"> {pageNum + 1}</a>
                </div>
            {:else}
                <div class="rounded-lg bg-gray-800 size-11 mx-0.5">
                    <a class="text-rose-600 justify-center flex items-center h-full" href="/?limit={pageSize}&offset={pageSize * pageNum}"> {pageNum + 1}</a>
                </div>
            {/if}
        {/each}
    </div>
</div>


