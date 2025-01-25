<script lang="ts">
    import { pokeStore } from "$lib/stores";
    import type { PokeItems, PokeResponse } from "$lib/types";

    let query = $state<string>("");

        
    const handleInput = (event: any) => {
        pokeStore.update((store: PokeResponse) => {
            const filteredResults = store.results.results.filter((item) =>
                item.name.toLowerCase().includes(query) // Filter results by name
            );

            return {
                ...store, // Spread the rest of the store properties (count, next, previous)
                results: filteredResults // Update results with filtered array
            };
        });
    }



</script>



<div>
    <input onchange={handleInput} type="text" placeholder="search" bind:value={query} class="rounded-lg h-9" />
</div>