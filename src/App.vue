<script>
// importo il componente 
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import AppList from './components/AppList.vue'


export default {
    data() {
        return {
            // creo un array vuoto che conterrà i projects ottenuti dalla chiamata axios
            projects: []
            
        }
    },

            // lista dei componenti da utilizzare nell' app
    components: {
        AppHeader,
        AppList
    },

    methods : {
        fetchProjects(){
            axios.get('http://127.0.0.1:8000/api/projects')
            .then((response) => {

                // inserisco i dati ricevuti nell array projects
               this.projects = response.data;
            })
        }
    },

    created() {
        this.fetchProjects()
    }


}
</script>


<template>
    <!-- utilizzare il componente sottoforma di tag -->
    <AppHeader />

    <!-- con una props invio l'array al componente figlio AppList -->
    <AppList :projects="projects"/>

</template>

<style lang="scss" ></style>