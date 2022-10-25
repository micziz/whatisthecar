<script lang="ts">
	import PointsMode from './pages/PointsMode.svelte';
  import Home from "./pages/Home.svelte";
  import Normal from "./pages/Normal.svelte";
  import Htp from "./pages/HTP.svelte";
  import About from './pages/About.svelte';
  
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