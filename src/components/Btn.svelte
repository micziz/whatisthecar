<script lang="ts">
  export let clickFunc;
  export let content;
</script>

<button on:click={clickFunc} id="btn-itslef" class="button is-black is-outlined">{content}</button>

<style>
    #btn-itslef{
        margin-top: 4rem;
    }
</style>