import Vue from 'vue' // Stocker dans node.js 
import Router from 'vue-router' // Stocker dans node.js 
import HomePage from './../views/HomePage' // Importation de la page d'accueil
import LesFilms from './../views/LesFilms.vue'

Vue.use(Router)

export default new Router ({
    routes: [
        { path: '/', component: HomePage },
        { path: '/films', component: LesFilms },
        
    ]
})
