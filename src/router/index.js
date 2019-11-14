import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import button from '../pages/roi_button'
import list from '../pages/roi_list'
import nav from '../pages/roi_nav'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/btn',
      name: 'button',
      component: button
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/nav',
      name: 'nav',
      component: nav
    }
  ]
})
