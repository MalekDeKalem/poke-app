<script lang="ts">
    let { image="s", name } = $props();
</script>

<div class="rounded-lg justify-center items-center bg-gray-600">
    <div class="m-1 p-px bg-gray-800 rounded-lg">
        <img alt="{name}" src="${image}" class="rounded-lg"/>
    </div>
    <div>
        <h2> {name} </h2>
    </div>
</div>