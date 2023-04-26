<script>
// importo il componente 

import AppHeader from './components/AppHeader.vue'



export default {
    data() {
        return {

        }
    },

            // lista dei componenti da utilizzare nell' app
    components: {
        AppHeader,
    },




}
</script>


<template>
    <AppHeader />
    <main class="container">
        <router-view></router-view>
    </main>

</template>

<style lang="scss" ></style>