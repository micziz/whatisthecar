<script lang="ts">
  import capitalize from 'just-capitalize';
  
  function generateCar(){
    let cars = ["audi", "chevrolet", "citroen", "honda", "hyundai", "pegout", "renault", "suzuki", "volkswagen", "toyota", "mercedes"] 
    let car1 = cars[Math.floor(Math.random()*cars.length)];
    let car2 = cars[Math.floor(Math.random()*cars.length)];  
    if ( car1 == car2){
      car2 = cars[Math.floor(Math.random()*cars.length)];  
    }
    return [car1, car2]
  }
  let chosenCar = Math.floor(Math.random() * 2) + 1
  let carChosen = false; 

  let carss = generateCar()
  let car1 = carss[0] 
  let car2 = carss[1] 

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  let result = []

  async function checkCar(carNum?){
    if ( carNum == chosenCar){
      carChosen = true;
      result.length = 0
      result.push('win')
      await sleep(3000);
      carss = generateCar()
      car1 = carss[0] 
      car2 = carss[1]
      chosenCar = Math.floor(Math.random() * 2) + 1
      carChosen = false;
    } else{
      carChosen = true;
      result.length = 0
      result.push('lost')
      await sleep(3000);
      carss = generateCar()
      car1 = carss[0] 
      car2 = carss[1]
      chosenCar = Math.floor(Math.random() * 2) + 1
      carChosen = false;
    }
  }

  function goToHome() {        
    window.location.href = '/#/'
  }
  
</script>

<main>
  {#if carChosen}
    {#if result[0] == 'win'}
      <h1 id="win-lose-title" class="title is-1">Hai Vinto</h1>
      <div id="get-back-btn">
        <button class="button is-link is-rounded is-outlined" style="margin-top: 70px;" on:click={goToHome}>Torna a casa</button>
      </div>
      {:else}
      <h1 id="win-lose-title" class="title is-1">Hai perso</h1>

      <div id="get-back-btn">
        <button class="button is-link is-rounded is-outlined" style="margin-top: 70px;" on:click={goToHome}>Torna a casa</button>
      </div>

    {/if}
  {:else}
    {#if chosenCar == 1}
      <h1 id="car" class="title is-3">{capitalize(car1.toString())}</h1>
    {:else}
      <h1 id="car" class="title is-3">{capitalize(car2.toString())}</h1>
    {/if}
    <div id="images">
      <img src={`/images/${car1}.jpg`} alt="car-1" width="300" height="300" id="img1">
      <img src={`/images/${car2}.jpg`} alt="car-2" width="300" height="300" id="img2">
    </div>

    <div id="buttons">
      <button class="button is-link is-rounded is-outlined" id="btn1" on:click={() => checkCar(1)}>Questa</button>
      
      <button class="button is-link is-rounded is-outlined" id="btn2" on:click={() => checkCar(2)}>Questa</button>
    </div>
  {/if}
</main>

<style>


  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  main{
    font-family: 'Raleway', sans-serif;
  }


  #car{
    text-align: center;
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