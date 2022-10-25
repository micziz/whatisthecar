<script lang="ts">
  import GoHome from "./GoHome.svelte";

    export let pointCount: number;
    export let maxNum: number;
</script>

<main>
    <h1 class="title is-3" id="finito">You finished</h1>
    <h1 class="title is-5">You obtained {pointCount+1} out of {maxNum+1} points</h1>

    <GoHome/>
</main>


<style>
    main{
        font-family: 'Raleway', sans-serif;
    }

    h1{
        text-align: center;
    }

    #finito{
        margin: 50px;
    }
</style>