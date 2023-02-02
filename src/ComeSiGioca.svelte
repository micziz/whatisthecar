<script lang="ts">
    import Title from "./components/Title.svelte";
    import Btn from "./components/Btn.svelte"
    import Car from './components/Car.svelte'

    let tutNum = 1;

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function goToNormal(){
        tutNum = 6;
        await sleep(3000);
        window.location.href = '/#/normale'
    }
    
    function goToHome() {        
        window.location.href = '/#/'
    }
</script>
  
<main> 
    <Title/>    
    <div id="button">
        <Btn content={"Continua"}  clickFunc={() => {tutNum++}}/>
    </div>
    {#if tutNum == 1}
        <h1>Ciao! Sono micziz, e oggi ti insegnero come giocare a What is the Car!</h1>
    {:else if tutNum == 2}
        <h1>Iniziamo! Davanti a te apparira una foto di un logho di una compagnia di automobili.</h1>

        <h1 id="car" class="title is-3" style="margin-top: 50px;">Honda</h1>        
    {:else if tutNum == 3}
        <h1>E anche due bottoni con due nomi.</h1>
        <h1 id="car" class="title is-3" style="margin-top: 50px;">Honda</h1>

        <div id="images">
            <Car src={`/images/honda.jpg`}/>
        </div>    
        
        <div id="buttons">
            <div id="btns">
                <Btn content={"Honda"}  clickFunc={() => {tutNum++}}/>
            </div>
            <Btn content={"Pegout"}  clickFunc={() => {tutNum++}}/>
        </div>
        
    {:else if tutNum == 4}
        <h1>Il tuo obbiettivo è  di indovinare quella giusta.</h1>
    {:else if tutNum == 5}
        <h1>Vuoi giocare?</h1>

        <div id="tut5">
            <Btn content={"Si"}  clickFunc={goToNormal}/>
            <Btn content={"No"}  clickFunc={goToHome}/>
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
        margin-top: 2rem;
    }
            
    #tut5 {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #images{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3rem;
    }
    
    #buttons{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
    }
    
    #button{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #btns{
        margin-right: 2rem;
    }
</style>