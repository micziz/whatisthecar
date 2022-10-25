<script lang="ts">
	import PointsMode from './pages/PointsMode.svelte';
  import Home from "./pages/Home.svelte";
  import Normal from "./pages/Normal.svelte";
  import Htp from "./pages/HTP.svelte";
  import Router from 'svelte-spa-router'


  const routes = {
    // Exact path
    '/': Home,
    '/normal': Normal,
    '/htp': Htp,
    '/pointsmode': PointsMode
  }
</script>

<main> 
  <Router {routes}/>
</main>