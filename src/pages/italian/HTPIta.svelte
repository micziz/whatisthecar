<script lang="ts">
  import Title from "../../lib/ita/components/Title.svelte";

    let tutNum = 1;

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function goToNormal(){
        tutNum = 6;
        await sleep(3000);
        window.location.href = '/#/normal'
    }
    
    function goToHome() {        
        window.location.href = '/#/'
    }
</script>
  
<main> 
    <Title/>    
    {#if tutNum == 1}
        <h1>Ciao! Sono micziz, e oggi ti insegnero come giocare a What is the Car!</h1>
        <div id="tut1">
            <button on:click={() => {tutNum++}} class="button is-link is-rounded is-outlined">Continua</button>
        </div>
    {:else if tutNum == 2}
        <h1>Iniziamo! Davanti a te apparira un nome di una compagnia di macchine</h1>
        <div id="tut2">
            <button on:click={() => {tutNum++}} class="button is-link is-rounded is-outlined">Continua</button>
        </div>

        <h1 id="car" class="title is-3" style="margin-top: 50px;">Honda</h1>        
    {:else if tutNum == 3}
        <h1>E anche due foto di loghi. Sotto queste due foto apparianno due bottoni!</h1>
        <div id="tut3">
            <button on:click={() => {tutNum++}} class="button is-link is-rounded is-outlined">Continua</button>
        </div>
        <h1 id="car" class="title is-3" style="margin-top: 50px;">Honda</h1>

        <div id="images">
            <img src={`/images/honda.jpg`} alt="car-1" width="300" height="300" id="img1">
            <img src={`/images/audi.jpg`} alt="car-2" width="300" height="300" id="img2">
        </div>    

        <div id="buttons">
            <button class="button is-link is-rounded is-outlined" id="btn1">Questa</button>    
            <button class="button is-link is-rounded is-outlined" id="btn2">Questa</button>
        </div>
    {:else if tutNum == 4}
        <h1>Il tuo obbiettivo è  di indovinare quella giusta.</h1>
        <div id="tut4">
            <button on:click={() => {tutNum++}} class="button is-link is-rounded is-outlined">Continua</button>
        </div>
    {:else if tutNum == 5}
        <h1>Vuoi provare?</h1>

        <div id="tut5">
            <button on:click={goToNormal} id="btnGO" class="button is-link is-rounded is-outlined">Si</button>
            <button on:click={goToHome} id="btnHome" class="button is-link is-rounded is-outlined">No</button>
        </div>

    {:else if tutNum == 6}
        <h1>Ok! La tua partita iniziera tra 3 secondi</h1>
    {:else}
        <h1>C'e stato un errore. Prova a ricaricare la pagina</h1>
    {/if}
</main>
  
<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
    main{
      font-family: 'Raleway', sans-serif;
    }

    h1{
        text-align: center;
    }

    #tut1 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }
            
    #tut2 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }
            
    #tut3 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }
            
    #tut4 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }
            
    #tut5 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }
    

    #btnGO{
        margin-right: 40px;
    }

    #images{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 300px;
  }

  #img1{
    margin-right: 500px;
  }

  #buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }

  #btn1{
    margin-right: 700px;
  }

  #btn2{
    margin-left: 15px;
  }
</style>