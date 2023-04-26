import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';

const router = createRouter({
history: createWebHistory(),

// aggiungo queste 2 righe per dare la classe 'active' di boostrap quando siamo sulla pagina del link
linkActiveClass: 'active',
linkExactActiveClass: '',
routes: [
{
path: '/',
name: 'Home',
component: AppHome
},

]
});
export { router };