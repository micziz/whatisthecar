<script lang="ts"> 
	import Title from './components/Title.svelte';
	import Btn from './components/Btn.svelte'
	
	let play = false;

    function GOTO(location: string){
        console.log('Hi')
        window.location.href = `/#/${location}`
    }
</script>
  
<main> 
    <Title/>
    
    <div id="info">
        <h1 class="title is-2" id="h1">Crediti</h1>
        <p id="p">Creato da: micziz</p>
        <p id="p">Codice: micziz</p>
        <p id="p">Immaggini: <a href="https://commons.wikimedia.org">wikimedia commons</a></p>
        <p id="p"> <a href="https://github.com/micziz/whatisthecar">Questo Proggetto è Open Source!</a></p>
    </div>
    
    {#if !play}
        <div id="btn">
            <Btn content="Gioca" clickFunc={() => {play = true}}/>
        </div>
    {:else}
         <div id="btn">
            <Btn content="Modalita Normale" clickFunc={() => GOTO("normale")}/>
        </div>
        <div id="btn">
            <Btn content="Modalita A Punti"  clickFunc={() => GOTO("modalitaAPunti")}/>
        </div>    
        <div id="btn">
            <Btn content="Come si gioca" clickFunc={() => GOTO("comeGiocare")} />
        </div>
        <div id="btn">
            <Btn content="Indietro" clickFunc={() => {play = false}}/>
        </div>
    {/if}
    
</main>
  
<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
    main{
      font-family: 'Raleway', sans-serif;
    }
  
    #btn{
        max-width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #info{
        margin-top: 10rem;
        min-width: 130%;
        position: fixed;
        text-align: center;
    }

    #p{
        margin-top: 1rem;
    }
</style>