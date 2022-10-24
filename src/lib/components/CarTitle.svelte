<script lang="ts">
    import capitalize from "just-capitalize";

    export let car;
</script>

<main>
    <h1 id="car" class="title is-3">{capitalize(car)}</h1>
</main>


<style>
    main{
        font-family: 'Raleway', sans-serif;
    }

    #car{
        text-align: center;
    }
</style>