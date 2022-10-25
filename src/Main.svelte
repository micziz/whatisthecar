<script lang="ts">
	import NormalEng from './pages/english/NormalEng.svelte';
	import PointsMode from './pages/italian/PointsModeIta.svelte';
  import Home from "./pages/italian/HomeIta.svelte";
  import Normal from "./pages/italian/NormalIta.svelte";
  import Htp from "./pages/italian/HTPIta.svelte";
  import About from './pages/italian/AboutIta.svelte';
  import HtpEng from './pages/english/HTPEng.svelte';
  import PointsModeEng from './pages/english/PointsModeEng.svelte';
  import AboutEng from './pages/english/AboutEng.svelte';
  import HomeEng from './pages/english/HomeEng.svelte';
  
  import Router from 'svelte-spa-router'


  const routes = {
    // Exact path
    '/': Home,
    '/normal': Normal,
    '/htp': Htp,
    '/pointsmode': PointsMode,
    '/about': About,
    '/eng': HomeEng,
    '/normalENG': NormalEng,
    '/htpENG': HtpEng,
    '/pointsmodeENG': PointsModeEng,
    '/aboutENG': AboutEng,
  }
</script>

<main> 
  <Router {routes}/>
</main>