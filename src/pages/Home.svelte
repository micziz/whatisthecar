<script lang="ts"> 

    function GOTO(location: string){
        window.location.href = `/#/${location}`
    }
</script>
  
<main> 
    <h1 id="title" class="title is-1">What is the car</h1>

    <h1 style="text-align: center;">Creato da Micziz</h1>

    <div id="btn">
        <button class="button is-link is-rounded is-outlined" on:click={() => GOTO("normal")} id="btn1">Modalita Normale</button>
        <button class="button is-link is-rounded is-outlined" on:click={() => GOTO("pointsmode")} id="btn1" style="margin-left: 50px;">Modalita A Punti</button>
    </div>

    <div id="btn-htp">
        <button class="button is-link is-rounded is-outlined" on:click={() => GOTO("htp")} id="">Come si gioca</button>
    </div>
</main>
  
<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
    main{
      font-family: 'Raleway', sans-serif;
    }
  
    #title {
      text-align: center;
      margin-top: 50px;
      font-weight: bold;
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
  
</style>