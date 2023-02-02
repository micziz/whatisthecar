<script lang="ts">
  import Casa from "./Casa.svelte";
  import Normal from "./NormalIta.svelte";
  import Htp from "./HTPIta.svelte";
  import PointsMode from './PointsModeIta.svelte';
  import About from './AboutIta.svelte';

  
  import Router from 'svelte-spa-router'

  const routes = {
    '/': Casa,
    '/normale': Normal,
    '/comeGiocare': Htp,
    '/modalitaAPunti': PointsMode,
  }
</script>

<main> 
  <Router {routes}/>
</main>