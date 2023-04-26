
<script>
// importo il componente 
import AppCard from './AppCard.vue'
import axios from 'axios';


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
        AppCard
    },

    // dal componente figlio ricevo 'changePage' al click del button per cambiare pagina
    emits: ['changePage'],

    methods: {
        fetchProjects(endPoint = null) {
            // se non arriva l'endpoint usa quello della prima pagina (all' apertura dell' app)
            // se arriva dall emit 'chagePage' usa quell' endpoint
            if (!endPoint) endPoint = 'http://127.0.0.1:8000/api/projects';
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
    <div class="container">
        <h1 class="my-4">Lista Progetti</h1>
        <!-- v-if se nell' array ci sono elementi stampa la lista -->
        <div v-if="projects.list.length" class="row justify-content-center g-4">
                <!-- per ogni 'project in projects' stampo un componente 'AppCard' e
                passo con una props il singolo oggetto 'project' al componente figlio  -->
                <AppCard v-for="project in projects.list"
                 :key="project.id" 
                 :project="project"
                  class="col-4"/>
        </div>

        <!-- altrimenti stampa il messaggio -->
        <div v-else>
            <h1>Non ci sono progetti da visualizzare</h1>
        </div>

        <!-- PAGINAZIONE -->
        <nav aria-label="Page navigation example">
            <ul class="pagination my-4">
                <!-- v-html="page.label" per stampare correttamente la label -->
                <li class="page-item" v-for="page in projects.pages">
                    <button type="button" class="page-link" 
                    :class="{
                        disabled: !page.url, // stampaimo la classe disabled se non riceviamo un URL
                        active: page.active  //stampiamo la classe active quando 'active' è true
                    }"
                     v-html="page.label"
                     @click="fetchProjects(page.url)">
                    </button>
                <!-- sul click del button viene lanciato un $emit 'changePage' al genitore passando l'URL  -->
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped></style>