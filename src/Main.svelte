<script lang="ts">
  // Ita
  import Home from "./pages/italian/HomeIta.svelte";
  import Normal from "./pages/italian/NormalIta.svelte";
  import Htp from "./pages/italian/HTPIta.svelte";
	import PointsMode from './pages/italian/PointsModeIta.svelte';
  import About from './pages/italian/AboutIta.svelte';
  
  // Eng
  import HomeEng from './pages/english/HomeEng.svelte';
	import NormalEng from './pages/english/NormalEng.svelte';
  import HtpEng from './pages/english/HTPEng.svelte';
  import PointsModeEng from './pages/english/PointsModeEng.svelte';
  import AboutEng from './pages/english/AboutEng.svelte';
  // Esp
  import HomeEsp from './pages/spanish/HomeEsp.svelte';
  import NormalEsp from './pages/spanish/NormalEsp.svelte';
  import HtpEsp from './pages/spanish/HTPEsp.svelte';
  import PointsModeEsp from './pages/spanish/PointsModeEsp.svelte';
  import AboutEsp from './pages/spanish/AboutEsp.svelte';

  import HomeUni from './HomeUni.svelte';

  
  import Router from 'svelte-spa-router'

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
    '/esp/': HomeEsp,
    '/esp/normal': NormalEsp,
    '/esp/htp': HtpEsp,
    '/esp/pointsmode': PointsModeEsp,
    '/esp/about': AboutEsp
  }
</script>

<main> 
  <Router {routes}/>
</main>