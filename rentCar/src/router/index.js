import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/cll_home/home'
import Login from '../components/login.vue'
import accept from '@/components/Toaccept/accept'//待结算
import vali from '@/components/valicar/vali.vue'//验车
import shouli from '@/components/shouli/shouli.vue'//受理
import management from '@/components/management/management.vue'//受理
import cleared from '@/components/cleared/cleared.vue'//结算
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
          path:'accept',//待结算
          name:'Accept',
          component:accept
        },{
          path:'vali',//验车
          name:'Vali',
          component:vali
        },
        {
          path:'shouli',//验车
          name:'Shouli',
          component:shouli
        },
       
        {
          path:'cleared',//验车
          name:'Cleared',
          component:cleared
        },
       
        {
          path:'management',//验车
          name:'Management',
          component:management
        },
      ]
    },
  ]
})
