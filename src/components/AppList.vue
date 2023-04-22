TEMPLATE BASE
<script>
// importo il componente 
import AppCard from './AppCard.vue'


export default {


    props : {
        // ricevo l'array dal genitore tramite una props 'projects'
        projects: Array,
        pages: Array

    },

        // lista dei componenti da utilizzare nell' app
        components: {
        AppCard
    }
}
</script>


<template>
    <div class="container">
        <h1 class="my-4">Lista Progetti</h1>
        <!-- v-if se nell' array ci sono elementi stampa la lista -->
        <div v-if="projects.length" class="row justify-content-center g-4">
                <!-- per ogni 'project in projects' stampo un componente 'AppCard' e
                passo con una props il singolo oggetto 'project' al componente figlio  -->
                <AppCard v-for="project in projects" :key="project.id" :project="project" class="col-4"/>
        </div>

        <!-- altrimenti stampa il messaggio -->
        <div v-else>
            <h1>Non ci sono progetti da visualizzare</h1>
        </div>

        <!-- PAGINAZIONE -->
        <nav aria-label="Page navigation example">
            <ul class="pagination my-4">
                <!-- v-html="page.label" per stampare correttamente la label -->
                <li class="page-item" v-for="page in pages">
                    <button type="button" class="page-link" 
                    :class="{
                        disabled: !page.url, // stampaimo la classe disabled se non riceviamo un URL
                        active: page.active  //stampiamo la classe active quando 'active' è true
                    }"
                     v-html="page.label"
                     @click="$emit('changePage', page.url)">
                    </button>
                <!-- sul click del button viene lanciato un $emit 'changePage' al genitore passando l'URL  -->
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped></style>