<script lang="ts">
    import Btn from './Btn.svelte'
    function goToHome() {        
        window.location.href = '/#/'
    }
</script>

<main>
    <div id="get-back-btn">
        <Btn content={"Torna indietro"}  clickFunc={goToHome}/>
    </div>
</main>

<style>
    #get-back-btn{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>