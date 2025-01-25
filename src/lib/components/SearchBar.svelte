<script lang="ts">
    import { pokeStore } from "../../routes/+page.svelte"
    let query = $state<string>("");

        
    const handleInput = (event: any) => {
    
    }
</script>



<div>
    <input on:change={handleInput} type="text" placeholder="search" bind:value={query} class="rounded-lg h-9" />
</div>