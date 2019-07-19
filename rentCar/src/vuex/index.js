 import Vue from 'vue'
 import Vuex from 'vuex'
 import Axios from 'axios'
 Vue.prototype.$axios = Axios

 Vue.use(Vuex)
 export default new Vuex.Store({
   state: {
     weishow: false,
     clearedshow: false,
     phoneshow: false,
     recharge: false,
     breaklist:[],
   },
  
   mutations: {
     change(state, v) {
       state.weishow = v;
     },
     open(state, v) {
       state.clearedshow = v
     },
     pchange(state) {
       state.phoneshow = !state.phoneshow
     },
     recharge(state) {
       state.recharge = !state.recharge
     }
   },
   actions:{
    saveFrom(context){
      Axios({
        url:"http://172.25.1.194:8080/pcshouye/weizhang"
      }).then(res => {
        console.log(res.data);
        context.state.breaklist=res.data;
      })
      .catch(err => {
        console.log(err);
      });
    },
   
   }
 })
