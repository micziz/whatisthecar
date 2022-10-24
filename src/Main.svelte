<script lang="ts">
  import Home from "./pages/Home.svelte";
  import Normal from "./pages/Normal.svelte";
  import Htp from "./pages/HTP.svelte";
  
  import Router from 'svelte-spa-router'


  const routes = {
    // Exact path
    '/': Home,
    '/Normal': Normal,
    '/htp': Htp
  }
</script>

<main> 
  <Router {routes}/>
</main>