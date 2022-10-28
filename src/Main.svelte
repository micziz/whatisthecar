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
  import HomeUni from './HomeUni.svelte';


  const routes = {
    // Exact path
    '/': HomeUni,
    '/ita/': Home,
    '/ita/normal': Normal,
    '/ita/htp': Htp,
    '/ita/pointsmode': PointsMode,
    '/ita/about': About,
    '/eng/': HomeEng,
    '/eng/normal': NormalEng,
    '/eng/htp': HtpEng,
    '/eng/pointsmode': PointsModeEng,
    '/eng/about': AboutEng,
  }
</script>

<main> 
  <Router {routes}/>
</main>