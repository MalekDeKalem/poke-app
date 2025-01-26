<script lang="ts">
    import { queryStore } from "$lib/stores";
    import type { PokeItem, PokeItems, PokeResponse } from "$lib/types";


</script>



<div>
    <input type="search" placeholder="search" bind:value={$queryStore} class="rounded-lg h-9" />
</div>