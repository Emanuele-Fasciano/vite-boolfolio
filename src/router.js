import { createRouter, createWebHistory } from 'vue-router';

import AppHomePage from './pages/AppHomePage.vue';
import ProjectDetailPage from './pages/ProjectDetailPage.vue';

const router = createRouter({
history: createWebHistory(),

// aggiungo queste 2 righe per dare la classe 'active' di boostrap quando siamo sulla pagina del link
linkActiveClass: 'active',
linkExactActiveClass: '',
routes: [
    // rotta per la Homepage
{
path: '/',
name: 'Home',
component: AppHomePage
},

// rotta per la pagina del dettaglio(i 2 punti indicano che l'id è un parametro)
{
path: '/project/:id',
name: 'project-detail',
component: ProjectDetailPage
},

]
});
export { router };