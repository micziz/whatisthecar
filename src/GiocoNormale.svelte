<script lang="ts">
  import Title from './components/Title.svelte'
  import Lose from './components/Lose.svelte';
  import Win from './components/Win.svelte';
  import Car from './components/Car.svelte';
  import Btn from './components/Btn.svelte'
  import { generateCar } from './utils/generateCars.js'
  import { cars } from './cars.js';
  let chosenCar = Math.floor(Math.random() * 2) + 1
  let carChosen = false; 

  let carss = generateCar()
  let car1 = carss[0] 
  let car2 = carss[1] 

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  let result;

  async function checkCar(carNum?: number){
    if ( carNum == chosenCar){
      carChosen = true;
      result = "win";
      await sleep(1000);
      carss = generateCar()
      car1 = carss[0] 
      car2 = carss[1]
      chosenCar = Math.floor(Math.random() * 2) + 1
      carChosen = false;
    } else{
      carChosen = true;
      result = "lose";
      await sleep(1000);
      carss = generateCar()
      car1 = carss[0] 
      car2 = carss[1]
      chosenCar = Math.floor(Math.random() * 2) + 1
      carChosen = false;
    }
  }
  
</script>

<main>
  <Title/>
  {#if carChosen}
    {#if result == 'win'}
      <Win/>
    {:else}
      {#if chosenCar == 1}
        <Lose car={car1}/>
        <div id="images">
          <Car src={`/images/${car1}.jpg`}/>
        </div>
      {:else}
        <Lose car={car2}/>
        <div id="images">
          <Car src={`/images/${car2}.jpg`}/>
        </div>
      {/if}
    {/if}
  {:else}
    {#if chosenCar == 1}
       <div id="images">
        <Car src={`/images/${car1}.jpg`}/>
      </div>
    {:else}
      <div id="images">
        <Car src={`/images/${car2}.jpg`}/>
      </div>
    {/if}
    <div id="buttons">
      <div id="btns">
        <Btn content={car1}  clickFunc={() => checkCar(1)}/>
      </div>
      <Btn content={car2}  clickFunc={() => checkCar(2)}/>
    </div>
  {/if}
</main>

<style>


  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  main{
    font-family: 'Raleway', sans-serif;
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
    margin-top: 30px;
  }
  #btns{
    margin-right: 2rem;
  }
</style>