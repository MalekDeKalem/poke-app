<script lang="ts">
    import { page } from '$app/stores'
    let { pageSize, totalItems } = $props();


    let totalPages = $state(totalItems / pageSize);
    let currentPage = $state((Number($page.url.searchParams.get('offset')) || 0) / pageSize);
</script>


<div>

</div>


