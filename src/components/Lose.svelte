<script lang="ts">
	import capitalize from 'just-capitalize';
    import GoHome from "./GoHome.svelte";  
    export let car;
</script>

<main>
    <h1 id="win-lose-title" class="title is-1">Sbagliato, era la {capitalize(car)}</h1>
  
    <GoHome />    
</main>
  
  <style>
      main{
        font-family: 'Raleway', sans-serif;
      }
      
      #win-lose-title {
          margin-top: 4rem;
          text-align: center;
          font-weight: bold;
      }
  </style>