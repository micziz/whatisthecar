<script lang="ts">
  import Car from "./lib/Car.svelte";
</script>

<main> 
  <h1 id="title" class="title is-1">What is the car</h1>

  <Car/>
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

</style>