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
        AppHeader
    }
}
</script>


<template>
    <!-- utilizzare il componente sottoforma di tag -->
    <AppHeader />
</template>

<style lang="scss" scoped></style>