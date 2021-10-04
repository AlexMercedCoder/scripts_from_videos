<script>

export let cheese;

let count = 0

const addOne = () => count += 1

const arr = [1,2,3,4,5,6,7]

</script>

<div>
    <h1 on:click={addOne}>{count}</h1>
    <h2>{cheese}</h2>
    {#each arr as num}
    <h3>{num}</h3>
    {/each}

</div>

<style>

</style>