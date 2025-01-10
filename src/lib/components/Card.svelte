<script lang="ts">
    import PokeBallIcon from "$lib/icons/PokeBallIcon.svelte";

    let { image="s", name } = $props();


    const rand = (min: number, max: number) => {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }

</script>

<div class="rounded-lg justify-center items-center bg-gray-600">
    <div class="m-1 p-px bg-gray-800 rounded-lg">
        <div class="rounded-lg">
            <PokeBallIcon rotInnerCircle={rand(0, 360)}/>
        </div>
    </div>
    <div>
        <h2> {name} </h2>
    </div>
</div>