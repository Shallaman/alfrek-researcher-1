import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../views/Dashboard'
import Editor from '../views/Editor'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Editor
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor
    }
  ]
})
