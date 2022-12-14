<script lang="ts">
  import Title from "../../lib/eng/components/Title.svelte";

    let tutNum = 1;

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function goToNormal(){
        tutNum = 6;
        await sleep(3000);
        window.location.href = '/#/eng/normal'
    }
    
    function goToHome() {        
        window.location.href = '/#/'
    }
</script>
  
<main> 
    <Title/>    
    {#if tutNum == 1}
        <h1>Hi! I'm micziz, and today i will teach you how to play What is the Car!</h1>
        <div id="tut1">
            <button on:click={() => {tutNum++}} class="button is-link is-rounded is-outlined">Continue</button>
        </div>
    {:else if tutNum == 2}
        <h1>Let's start! A famous car brand will appear on your screen</h1>
        <div id="tut2">
            <button on:click={() => {tutNum++}} class="button is-link is-rounded is-outlined">Continue</button>
        </div>

        <h1 id="car" class="title is-3" style="margin-top: 50px;">Honda</h1>        
    {:else if tutNum == 3}
        <h1>And also two car logos. Under these two logos two buttons will appear!</h1>
        <div id="tut3">
            <button on:click={() => {tutNum++}} class="button is-link is-rounded is-outlined">Continue</button>
        </div>
        <h1 id="car" class="title is-3" style="margin-top: 50px;">Honda</h1>

        <div id="images">
            <img src={`/images/honda.jpg`} alt="car-1" width="300" height="300" id="img1">
            <img src={`/images/audi.jpg`} alt="car-2" width="300" height="300" id="img2">
        </div>    

        <div id="buttons">
            <button class="button is-link is-rounded is-outlined" id="btn1">This one</button>    
            <button class="button is-link is-rounded is-outlined" id="btn2">This one</button>
        </div>
    {:else if tutNum == 4}
        <h1>Your objective is to guess the wright one!</h1>
        <div id="tut4">
            <button on:click={() => {tutNum++}} class="button is-link is-rounded is-outlined">Continue</button>
        </div>
    {:else if tutNum == 5}
        <h1>Want to try</h1>

        <div id="tut5">
            <button on:click={goToNormal} id="btnGO" class="button is-link is-rounded is-outlined">Yes</button>
            <button on:click={goToHome} id="btnHome" class="button is-link is-rounded is-outlined">No</button>
        </div>

    {:else if tutNum == 6}
        <h1>Ok! Your game will start in 3 seconds</h1>
    {:else}
        <h1>Error. Please reload the page!</h1>
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