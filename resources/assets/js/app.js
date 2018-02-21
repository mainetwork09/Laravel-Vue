/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//import Bootstrap from './bootstrap';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Header from './components/AppHeaderComponent.vue';
import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/LoginComponent.vue';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('app-header', require('./components/AppHeaderComponent.vue'));

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
    ]
});

const app = new Vue({
    el: '#app',
    router: router
});