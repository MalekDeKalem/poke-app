<script lang="ts">
    let query = $state<string>("");
</script>



<div>
    <input type="text" placeholder="search" bind:value={query} class="rounded-lg h-9" />
</div>