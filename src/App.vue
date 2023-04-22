<script>
// importo il componente 
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import AppList from './components/AppList.vue'


export default {
    data() {
        return {
            // creo un oggetto projects che conterrà tutte le  informazioni della lista e della paginazione
            projects: {
                list: [],
                pages: []
            }
            
        }
    },

            // lista dei componenti da utilizzare nell' app
    components: {
        AppHeader,
        AppList
    },

    // dal componente figlio ricevo 'changePage' al click del button per cambiare pagina
    emits: ['changePage'],

    methods : {
        fetchProjects(endPoint = null){
            // se non arriva l'endpoint usa quello della prima pagina (all' apertura dell' app)
            // se arriva dall emit 'chagePage' usa quell' endpoint
            if(!endPoint) endPoint = 'http://127.0.0.1:8000/api/projects';
            axios.get(endPoint)
            .then((response) => {

                // inserisco i dati, per stampare la lista, ricevuti nell array 'list' dentro l'oggetto 'projects'
                // saranno in 'response.data.data' per via della paginazione
               this.projects.list = response.data.data;

               // inserisco i dati per la paginazione nell array 'pages' dentro l'oggetto 'projects'
               this.projects.pages = response.data.links;
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

    <!-- con una props invio gli array al componente figlio AppList -->
    <AppList :projects="projects.list" 
    :pages="projects.pages"
    @changePage="fetchProjects" 
    />
    <!-- ad ogni 'changePage' invoco 'fetchProjects' (senza parentesi) -->

</template>

<style lang="scss" ></style>