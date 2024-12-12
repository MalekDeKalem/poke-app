<script lang="ts">
    import { page } from '$app/stores'
    let { pageSize, totalItems } = $props();


    let totalPages = $state(totalItems / pageSize);
    let currentPage = $state((Number($page.url.searchParams.get('offset')) || 0) / pageSize);
</script>


<div>
{#each Array(totalPages) as _, idx}
    <a href="/?limit={pageSize}&offset={pageSize * idx}"> {idx + 1}</a>
{/each}
</div>


