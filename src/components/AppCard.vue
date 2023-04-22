TEMPLATE BASE
<script>

export default {

        // lista dei componenti da utilizzare nell' app
        props: {
            project : Object
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
            <!-- <p>Stack utilizzato: {{ project.type }}</p> -->
            <div v-if="project.technologies.length">
                <p>Tecnologie utilizzate</p>
                <ul> 
                    <li v-for="tecnology in project.technologies">{{ tecnology.name }}</li>
                </ul>
            </div>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>