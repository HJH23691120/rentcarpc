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
     breaklist: [],
     clreadlist: [],
     id: "172.25.1.194:8080",
     cleardinfo: {},
     refund: '',
     refundPeople: '',
     acceptList:[],
    
   
   },

   mutations: {
     change(state, v) {
       state.weishow = !state.weishow;
     },
     open(state, v) {
       state.clearedshow = !state.clearedshow
     },
     pchange(state) {
       state.phoneshow = !state.phoneshow
     },
     recharge(state) {
       state.recharge = !state.recharge
     },
     cleardinfo(state, v) {
       state.cleardinfo = v
     },
   },
   actions: {
     saveFrom(context) {
       Axios({
           url: `http://${context.state.id}/pcshouye/weizhang`
         }).then(res => {
           context.state.breaklist = res.data;
         })
         .catch(err => {
           console.log(err)
         });
     },
     clreadFrom(context) {
       Axios({
           url: `http://${context.state.id}/order/yijiesuanorders`
         }).then(res => {
           context.state.clreadlist = res.data;
         })
         .catch(err => {
           console.log(err)
         });
     },
     acceptFrom(context) {
       Axios({
         url: `http://${context.state.id}/order/daijiesuanorders`
       }).then(res => {
         context.state.acceptList=res.data;
       }).catch(err => {
         console.log(err)
       });
     },
   }
 })
