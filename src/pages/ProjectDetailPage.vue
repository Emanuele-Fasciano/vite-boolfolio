<script>
// importo il componente 
import AppCard from '../components/AppCard.vue'
import axios from 'axios';


export default {
    data() {
        return {
            project: null
        }
    },

    created(){
        // genero un url dinamico che mi restituisce il post in base al suo ID
        axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`)
            .then((response) =>{
                this.project = response.data;

            })
    },

        // lista dei componenti da utilizzare nell' app
        components: {
        AppCard
    }
}
</script>


<template>
    <h1 class="my-4 text-center">Dettagli progetto {{ project?.name }}</h1>

     <!-- con una props dico a AppCard che siamo sulla pagina del dettaglio (true) e passo il project da stampare -->
    <AppCard :project="project"
     v-if="project"
    :isDetail="true"
      class="my-4 col-6 m-auto"/>
</template>

<style lang="scss" scoped>

</style>