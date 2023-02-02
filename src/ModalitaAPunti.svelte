<script lang="ts">
	import GoHome from './components/GoHome.svelte';
    import CarPoints from "./GiocoAPunti.svelte";
    import Title from './components/Title.svelte';
    import Btn from './components/Btn.svelte'

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
            <Btn content={"5 Punti"}  clickFunc={() => startGame(4)}/>
        </div>
        <div id="points-choice-btns">
            <Btn content={"10 Punti"}  clickFunc={() => startGame(4)}/>
        </div>
        <div id="points-choice-btns">
            <Btn content={"20 Punti"}  clickFunc={() => startGame(4)}/>
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
    }

    #points-choice-btns{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>