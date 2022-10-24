<script lang="ts">
    function goToHome() {        
        window.location.href = '/#/'
    }
</script>

<main>
    <h1 id="win-lose-title" class="title is-1">Hai perso</h1>

    <div id="get-back-btn">
      <button class="button is-link is-rounded is-outlined" style="margin-top: 70px;" on:click={goToHome}>Torna a casa</button>
    </div>
</main>

<style>
    main{
        font-family: 'Raleway', sans-serif;
    }
    #win-lose-title {
        text-align: center;
        font-weight: bold;
    }

    #get-back-btn{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>