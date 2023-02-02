<script lang="ts">
  import Casa from "./Casa.svelte";
  import Gioco from "./GiocoNormale.svelte";
  import ComeSiGioca from "./ComeSiGioca.svelte";
  import ModalitaAPunti from './ModalitaAPunti.svelte';  
  import Router from 'svelte-spa-router'

  const routes = {
    '/': Casa,
    '/normale': Gioco,
    '/comeGiocare': ComeSiGioca,
    '/modalitaAPunti': ModalitaAPunti,
  }
</script>

<main> 
  <Router {routes}/>
</main>