<script lang="ts">
    import { pokeStore } from "$lib/stores";
    import type { PokeItem, PokeItems, PokeResponse } from "$lib/types";

    let query = $state<string>("");

        
    const handleInput = () => {
        pokeStore.update((store: PokeResponse) => {
        const filteredResults: PokeItem[] = store.results.results.filter((item: PokeItem) =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );

        return {
            ...store, // Spread other properties (count, next, previous)
            results: {
                ...store.results, // Preserve any additional properties in `PokeItems`
                results: filteredResults, // Update the `results` array within `PokeItems`
            },
        };
    });
};



</script>



<div>
    <input oninput={handleInput} type="search" placeholder="search" bind:value={query} class="rounded-lg h-9" />
</div>