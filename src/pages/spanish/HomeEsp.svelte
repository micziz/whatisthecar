<script lang="ts"> 
	import Title from '../../lib/esp/components/Title.svelte';

    function GOTO(location: string){
        window.location.href = `/#/esp/${location}`
    }
    
    function goToEng(){
        localStorage.clear();
        localStorage.setItem('lang', 'eng');
        window.location.href = `/#/eng/`
    }
    
    function goToIta(){
        localStorage.clear();
        localStorage.setItem('lang', 'ita');
        window.location.href = `/#/ita/`
    }
</script>
  
<main> 
    <Title/>

    <div id="btn">
        <button class="button is-link is-rounded is-outlined" on:click={() => GOTO("normal")} id="btn1">Modaidad Normal</button>
        <button class="button is-link is-rounded is-outlined" on:click={() => GOTO("pointsmode")} id="btn1" style="margin-left: 50px;">Modalidad A Puntos</button>
    </div>

    <div id="btn-htp">
        <button class="button is-link is-rounded is-outlined" on:click={() => GOTO("htp")} id="btn-htp-1">Come se juega</button>
        <button class="button is-link is-rounded is-outlined" on:click={() => GOTO("about")} id="">Creditos</button>
    </div>

    <h1 class="title is-3" style="text-align: center; margin-top: 70px; margin-right: 40px;">Otras Lenguas</h1>
    <div id="btn-lang">
        <button class="button is-link is-rounded is-outlined" on:click={goToEng} id="btn-htp-1">English</button>
        <button class="button is-link is-rounded is-outlined" on:click={goToIta} id="btn-htp-1">Italiano</button>
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
        margin-top: 400px;
    }
    
    #btn-htp{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 70px;
    }

    #btn-lang{
        display: flex;
        justify-content: center;
        align-items: center;
    }
  
    #btn-htp-1{
        margin-right: 50px;
    }

</style>