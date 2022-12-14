<script>
    import GoHome from "../../lib/eng/components/GoHome.svelte";
    import Title from "../../lib/eng/components/Title.svelte";

</script>

<main>
    <Title/>
    <h1 class="title is-2" id="h1">Credits</h1>

    <p id="p">Created by: micziz</p>

    <p id="p">Code: micziz</p>

    <p id="p">Images: <a href="https://commons.wikimedia.org">wikimedia commons</a></p>

    <p id="p"> <a href="https://github.com/micziz/whatisthecar">This project is Open Source!</a></p>

    <GoHome/>
</main>

<style>
    main{
      font-family: 'Raleway', sans-serif;
    }

    #h1{
        text-align: center;
        margin-top: 4.063rem;
    }

    #p{
        text-align: center;
        margin-top: 2.5rem;
        font-weight: bold;
        font-size: large;
    }
</style>