<script lang="ts">
    const location = localStorage.getItem('lang');
    if (location == null){
        window.location.href = `/#/ita`

    } else {
        window.location.href = `/#/${location}`
    }
</script>