<script>
// importo il componente 
import AppList from '../components/AppList.vue'

export default {


    // lista dei componenti da utilizzare nell' app
    components: {
        AppList
    },


}
</script>


<template>
       <!-- con una props dico a AppCard che NON siamo sulla pagina del dettaglio (false) -->
        <AppList :isDetail="false" />
</template>

<style lang="scss" scoped>

</style>