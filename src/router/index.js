import Vue from 'vue'

import store from '../store';
import Guard from '../router/guard';

import Login from '../views/Login';
import Register from '../views/Register.vue';
import Router from 'vue-router';
import Dashboard from '../views/Dashboard';
import Editor from '../views/New';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: Guard.guest
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter: Guard.guest
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: Guard.auth
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor,
      beforeEnter: Guard.auth
    },
    {
      path: '*',
      redirect: '/',
      beforeEnter: Guard.auth
    }
  ]
})
