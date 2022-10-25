<script lang="ts">
	import PointsMode from './pages/italian/PointsModeIta.svelte';
  import Home from "./pages/italian/HomeIta.svelte";
  import Normal from "./pages/italian/NormalIta.svelte";
  import Htp from "./pages/italian/HTPIta.svelte";
  import About from './pages/italian/AboutIta.svelte';
  
  import Router from 'svelte-spa-router'


  const routes = {
    // Exact path
    '/': Home,
    '/normal': Normal,
    '/htp': Htp,
    '/pointsmode': PointsMode,
    '/about': About
  }
</script>

<main> 
  <Router {routes}/>
</main>