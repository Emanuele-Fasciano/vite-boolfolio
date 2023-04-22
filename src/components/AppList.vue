TEMPLATE BASE
<script>
// importo il componente 
import AppCard from './AppCard.vue'


export default {


    props : {
        // ricevo l'array dal genitore tramite una props 'projects'
        projects : Array
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
    </div>
</template>

<style lang="scss" scoped></style>