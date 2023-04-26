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
    <!-- utilizzare il componente sottoforma di tag -->
    <AppHeader />
    <main class="container">
        <router-view></router-view>
    </main>

 
    <!-- ad ogni 'changePage' invoco 'fetchProjects' (senza parentesi) -->

</template>

<style lang="scss" ></style>