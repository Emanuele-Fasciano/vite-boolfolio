TEMPLATE BASE
<script>

export default {

        // lista dei componenti da utilizzare nell' app
        props: {
            project : Object,
            // ricevo true o false dal genitore per stampare o meno le informazioni del dettaglio
            isDetail: Boolean
        }
}
</script>


<template>
    <div>
        <div class="card shadow h-100">
          <img :src="project.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Nome progetto: {{ project.name }}</h5>
            <p>Data di inzio: {{ project.start_date }}</p>
            <p>Data fine: {{ project.end_date }}</p>
            <p  v-if="project.type">Stack utilizzato: {{ project.type?.type_of_stack }}</p>
            <div v-if="project.technologies.length">
                <p>Tecnologie utilizzate</p>
                <ul> 
                    <li v-for="tecnology in project.technologies">{{ tecnology.name }}</li>
                </ul>
            </div>
            <h4 v-if="isDetail">Descrizione:</h4>
            <p  v-if="isDetail">{{ project.description }}</p>
          </div>
          <div class="card-footer d-flex justify-content-center" v-if="!isDetail">
            <router-link :to="{ name: 'project-detail', params: { id:project.id} }" class="btn btn-primary">
                  Vedi Dettagli
            </router-link>
          </div>
        </div>
      </div>
</template>

<style lang="scss" scoped></style>