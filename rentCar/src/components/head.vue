<template>
  <div class="header">
    <p class="time">
      <span>{{year}}</span>&emsp;
      <span>{{time}}</span>
    </p>
    <div class="headright">
      <a href="#" @click.prevent="fn">
        <img src="./../assets/head/wei.png" alt />
        <span class="wei">{{this.$store.state.breaklist.length}}</span>
      </a>
      <router-link to="/home/shouli">
        <img src="./../assets/head/xiaoxi.png" alt />
        <span class="info">2</span>
      </router-link>
      <a href="#">
        <img src="./../assets/head/shezhi.png" alt />
      </a>
      <div class="userinfo">
        <img src="./../assets/head/touxxiang.png" alt />
        <span>管理员01</span>
      </div>
      <a href="#">
        <img src="./../assets/head/fanhui.png" alt />
      </a>
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: "",
      time: "",
     
    };
  },
  
  methods: {
    fn(){
 
    
      this.$store.commit("change");
     
    }
  },
  components: {},

  mounted() {
       this.$store.dispatch('saveFrom');

  //  setInterval(()=>{
  //      this.$store.dispatch('saveFrom');
  //   },300000)
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = String(month).padStart(2, "0");
    day = String(day).padStart(2, "0");
    this.year = year + "-" + month + "-" + day;
    setInterval(() => {
      let date = new Date();
      let hour = date.getHours();
      let min = date.getMinutes();
      hour = String(hour).padStart(2, "0");
      min = String(min).padStart(2, "0");
      this.time = hour + ":" + min;
    }, 1000);
  }
};
</script >

<style scoped lang='less'>
.header {
  
  min-width: 900px;
  height: 63px;
  background: #f9c307;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 39px 0 13px;
  box-sizing: border-box;
  .time {
    color: #333;
  }
  .headright {
    width: 311px;
    height: 63px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    a {
      display: block;
      position: relative;
      span{
          display: inline-block;
          position: absolute;
          top: -6px;
          right: -6px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          text-align: center;
          line-height: 16px;
          color: #fff;
          font-size: 12px;
      }
      span.wei{
          	background-color: #0006ff;
      }
      span.info{
         background-color: #f93507;
      }
    }
    .userinfo {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
      sapn {
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 1px;
        color: #333333;
      }
    }
  }
 
}
</style>
