<script lang="ts">
  import GoHome from "./GoHome.svelte";

    export let pointCount;
</script>

<main>
    <h1 class="title is-3" id="finito">Finitio</h1>
    <h1 class="title is-5">Hai ottenuto {pointCount}/20 punti</h1>

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