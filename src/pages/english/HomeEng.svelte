<script lang="ts"> 
	import Title from '../../lib/eng/components/Title.svelte';

    function GOTO(location: string){
        window.location.href = `/#/eng/${location}`
    }

    function goToIta(){
        localStorage.clear();
        localStorage.setItem('lang', 'ita');
        window.location.href = `/#/ita`
    }
    
    function goToEsp(){
        localStorage.clear();
        localStorage.setItem('lang', 'esp');
        window.location.href = `/#/esp`
    }
</script>
  
<main> 
    <Title/>

    <div id="btn">
        <button class="button is-link is-rounded is-outlined" on:click={() => GOTO("normal")} id="btn1">Normal Mode</button>
        <button class="button is-link is-rounded is-outlined" on:click={() => GOTO("pointsmode")} id="btn1" style="margin-left: 50px;">Points mode</button>
    </div>

    <div id="btn-htp">
        <button class="button is-link is-rounded is-outlined" on:click={() => GOTO("htp")} id="btn-htp-1">Tutorial</button>
        <button class="button is-link is-rounded is-outlined" on:click={() => GOTO("about")} id="">Credits</button>
    </div>

    <div id="title-div">
        <h1 class="title is-3" id="title-lang" style="text-align: center; margin-top: 70px; margin-right: 40px;">Other languages</h1>
    </div>
    <div id="btn-lang">
        <button class="button is-link is-rounded is-outlined" on:click={goToIta} id="btn-lang-1">Italian</button>
        <button class="button is-link is-rounded is-outlined" on:click={goToEsp} id="btn-lang-1">Español</button>
    </div>
</main>
  
<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
    main{
      font-family: 'Raleway', sans-serif;
    }
  
    #btn{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 12rem;
    }
    
    #btn-htp{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 4.375rem;
    }
    
    #btn-htp-1{
        display: inline-block;
        margin-right: 3.125rem;
    }
    
    #btn-lang-1{
        margin-right: 3.125rem;
        margin-bottom: 3.125rem;
    }

    #btn-lang{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
    }

    #title-div{
        display: flex;
        justify-content: center;
        align-items: center;    
    }

    #title-lang{
        text-align: center; 
    }
</style>