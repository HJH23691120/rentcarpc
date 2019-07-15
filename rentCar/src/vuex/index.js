 import Vue from 'vue'
 import Vuex from 'vuex'
 Vue.use(Vuex)
 export default new Vuex.Store({
   state: {
    weishow:false,
    clearedshow:false
   },
   mutations:{
     change(state, v){
       state.weishow=v;
     },
     open(state, v){
state.clearedshow=v
     }
    
   }
 })
