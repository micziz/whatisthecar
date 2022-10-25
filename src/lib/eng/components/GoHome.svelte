<script lang="ts">
    function goToHome() {        
        window.location.href = '/#/eng'
    }
</script>

<main>
    <div id="get-back-btn">
        <button class="button is-link is-rounded is-outlined" style="margin-top: 70px;" on:click={goToHome}>Go back</button>
    </div>
</main>

<style>
    #get-back-btn{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>