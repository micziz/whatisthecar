<script>
    import GoHome from "../../lib/ita/components/GoHome.svelte";
    import Title from "../../lib/ita/components/Title.svelte";

</script>

<main>
    <Title/>
    <h1 class="title is-2" id="h1">Crediti</h1>

    <p id="p">Creato da: micziz</p>

    <p id="p">Codice: micziz</p>

    <p id="p">Immaggini: <a href="https://commons.wikimedia.org">wikimedia commons</a></p>

    <p id="p"> <a href="https://github.com/micziz/whatisthecar">Questo Proggetto è Open Source!</a></p>

    <GoHome/>
</main>

<style>
    main{
      font-family: 'Raleway', sans-serif;
    }

    #h1{
        text-align: center;
        margin-top: 65px;
    }

    #p{
        text-align: center;
        margin-top: 40px;
        font-weight: bold;
        font-size: large;
    }
</style>