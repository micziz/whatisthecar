<script lang="ts">
	import GoHome from '../../lib/ita/components/GoHome.svelte';
    import CarPoints from "../../lib/ita/CarPoints.svelte";
    import Title from '../../lib/ita/components/Title.svelte';

    let inGame = false;
    let maxTimes;

    function startGame(maxTimesArg: number){
        maxTimes = maxTimesArg;
        inGame = true;
    }
</script>
  
<main> 
    <Title/>

    {#if !inGame}
        <h1 class="title is-3" id="title-1">Qunati punti?</h1>

        <div id="points-choice-btns">
            <button on:click={() => startGame(4)} id="five-pt" class="button is-link is-rounded is-outlined">5 punti</button>
            <button on:click={() => startGame(9)} id="ten-pt" class="button is-link is-rounded is-outlined">10 punti (defualt)</button>
            <button on:click={() => startGame(19)} id="twenty-pt" class="button is-link is-rounded is-outlined">20 punti</button>
        </div>

        <GoHome/>
    {:else}
        <CarPoints maxTimes={maxTimes}/>
    {/if}

</main>
  
<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
    main{
      font-family: 'Raleway', sans-serif;
    }
  

    #title-1{
        text-align: center;
        margin-top: 400px;
    }

    #points-choice-btns{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }

    #five-pt{
        margin-right: 50px;
    }
    
    #ten-pt{        
        margin-right: 50px;
    }
</style>