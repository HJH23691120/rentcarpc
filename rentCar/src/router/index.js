import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/cll_home/home'
import Login from '../components/login.vue'
import accept from '@/components/Toaccept/accept'
import HomeTex from '../components/cll_home/home_tex.vue'
import Mendian from '../components/cll_md/mendian.vue'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,children:[
        {
          path:"homeTex",
          name:'HomeTex',
          component:HomeTex
        }, 
        {
          path:"mendian",
          name:'Mendian',
          component:Mendian
        }, 
        {
          path:'accept',
          name:'Accept',
          component:accept
        },
      ]
    },
  ]
})
