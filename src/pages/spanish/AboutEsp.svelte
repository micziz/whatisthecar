<script>
    import GoHome from "../../lib/esp/components/GoHome.svelte";
    import Title from "../../lib/esp/components/Title.svelte";

</script>

<main>
    <Title/>
    
    <h1 class="title is-2" id="h1">Creditos</h1>

    <p id="p">Creado por: micziz</p>

    <p id="p">Codigo: micziz</p>

    <p id="p">Imagenes: <a href="https://commons.wikimedia.org">wikimedia commons</a></p>

    <p id="p"> <a href="https://github.com/micziz/whatisthecar">Este proyecto es open sourc</a></p>

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