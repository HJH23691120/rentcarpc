import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomeTex from '@/components/cll_home/Home_tex'

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
      name: 'HomeTex',
      component: HomeTex
    },
    {
      path: '/hometex',
      name: 'HomeTex',
      component: HomeTex
    },
  ]
})
