//这时主页
<template>
  <div class="box">
    <aside>
      <leftaside></leftaside>
    </aside>
    <section>
      <Head></Head>
     <router-view></router-view>
    </section>
    <div class="masking" v-show="$store.state.weishow">
      <div class="maskingbox">
        <p class="top">违章记录</p>
        <span @click="close" class="close">
          <img src="./../../assets/masking/guanbi.png" alt />
        </span>
        <ul class="infolist">
          <li>
          
              <span class="newinfo">新</span>
            
           
              <span>2019-7-10</span>&nbsp;
              <span>16:03</span>&nbsp;
              <span>订单号</span>&nbsp;
              <span>123456789012</span>
              <span>下豫A12345</span>
              <span>车在金水区xx路口发生闯红灯违章行为</span>
            
          </li>
          <li>
           
              <span class="newinfo">新</span>
          
               <span>2019-7-10</span>&nbsp;
              <span>16:03</span>&nbsp;
              <span>订单号</span>&nbsp;
              <span>123456789012</span>
              <span>下豫A12345</span>
              <span>车在金水区xx路口发生闯红灯违章行为</span>
          </li>
          <li>
               <span>2019-7-10</span>&nbsp;
              <span>16:03</span>&nbsp;
              <span>订单号</span>&nbsp;
              <span>123456789012</span>
              <span>下豫A12345</span>
              <span>车在金水区xx路口发生闯红灯违章行为</span>
          </li>
          <li>
               <span>2019-7-10</span>&nbsp;
              <span>16:03</span>&nbsp;
              <span>订单号</span>&nbsp;
              <span>123456789012</span>
              <span>下豫A12345</span>
              <span>车在金水区xx路口发生闯红灯违章行为</span>
          </li>
          <li>
               <span>2019-7-10</span>&nbsp;
              <span>16:03</span>&nbsp;
              <span>订单号</span>&nbsp;
              <span>123456789012</span>
              <span>下豫A12345</span>
              <span>车在金水区xx路口发生闯红灯违章行为</span>
          </li>
          <li>
              <span>2019-7-10</span>&nbsp;
              <span>16:03</span>&nbsp;
              <span>订单号</span>&nbsp;
              <span>123456789012</span>
              <span>下豫A12345</span>
              <span>车在金水区xx路口发生闯红灯违章行为</span>
          </li>
          <li>
              <span>2019-7-10</span>&nbsp;
              <span>16:03</span>&nbsp;
              <span>订单号</span>&nbsp;
              <span>123456789012</span>
              <span>下豫A12345</span>
              <span>车在金水区xx路口发生闯红灯违章行为</span>
          </li>
          <li>
               <span>2019-7-10</span>&nbsp;
              <span>16:03</span>&nbsp;
              <span>订单号</span>&nbsp;
              <span>123456789012</span>
              <span>下豫A12345</span>
              <span>车在金水区xx路口发生闯红灯违章行为</span>
          </li>
        </ul>
      </div>
    </div>
    <p class="copy">
      Copyright@2014-2019   沪ICP备  12345678号
    </p>
  </div>
</template>

<script>
import Head from "../head";

// 左边侧边栏
import Leftaside from "./../leftaside.vue";
export default {
  data() {
    return {
      weishow: false
    };
  },
  mounted(){
    this.$router.push('/home/homeTex');
  },
  methods: {
    close() {
      this.$store.commit("change", this.weishow);
    }
  },
  components: {
    Head,
    Leftaside
  }
};
</script>

<style scoped lang="less">
.box {
  height: 100%;
  display: flex;
  flex-direction: row;
  aside {
    width: 274px;
    min-width: 274px;
  }
  section {
    flex: 1;
    background: #fbf5e0;
  }
  .masking {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .maskingbox {
      width: 59%;
      height: 90%;
      background: #fff;
      position: relative;
      display: flex;
      flex-direction: column;
      .top {
        margin-top: 20px;
        width: 100%;

        text-align: center;
        font-family: MicrosoftYaHei-Bold;
        font-size: 18px;
        font-weight: 900;
        line-height: 16px;
        letter-spacing: 1px;
        color: #333333;
      }
      .close {
        position: absolute;
        top: 15px;
        right: 21px;
        display: block;
        width: 19px;
        height: 19px;
      }
      .infolist {
        li {
        position: relative;
          padding: 0 35px 0 48px;
          margin-top: 25px;
          font-family: MicrosoftYaHei;
          font-size: 15px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 22px;
          letter-spacing: 1px;
          color: #333333;
          .newinfo {
            position: absolute;
            left: 18px;
            display: inline-block;
            width: 16px;
            height: 17px;
            background-color: #00a0e9;
            color: #fff;
            font-size: 12px;
            line-height: 17px;
            text-align: center;
            margin-right: 12px;
          }
        }
      }
    }
  }
  .copy{
    position: fixed;
    bottom: 20px;
    width: 100%;
    text-align: center;
    font-family: MicrosoftYaHei;
	font-size: 10px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 16px;
	letter-spacing: 1px;
	color: #535353;
  }
}
</style>
