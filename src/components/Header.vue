<template>
    <div class="d-flex  align-items-center justify-content-around" style="border: blue solid 1px;">
        <Logo />
        <Icons />
    </div>
</template>

<script>
import Logo from './Logo.vue';
import Icons from './Icons.vue'
    export default {
        name: 'HeaderComponent',
        components: {
            Logo,
            Icons,
        }
    }
</script>

<style scoped>

</style>