//这时主页
<template>
  <div class="box">
    <aside>
      <leftaside></leftaside>
    </aside>
    <section>
      <Head></Head>
      <router-view></router-view>
      <p class="copy">Copyright@2014-2019 沪ICP备 12345678号</p>
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
    <div class="masking" v-show="$store.state.clearedshow">
      <div class="clearedbox">
        <p class="top">
          订单号：
          <span>123564893215</span>
        </p>
        <span @click="clearedclose" class="close">
          <img src="./../../assets/masking/guanbi.png" alt />
        </span>
        <ul>
          <li>
            <div>
              <img src="./../../assets/search/pic-1.jpg" alt />
            </div>
            <div class="clearedright">
              <p>
                还车时间：
                <span></span>
              </p>
              <p>
                车辆是否损坏：
                <span></span>
              </p>
              <p>
                还车门店：
                <span></span>
              </p>
            </div>
          </li>
          <li>
            <div>
              租车人：
              <span></span>
            </div>
            <div>
              使用费：
              <span></span>
            </div>
          </li>
          <li>
            <div>
              手机号：
              <span></span>
            </div>
            <div>
              基本保险费费：
              <span></span>
            </div>
          </li>
          <li>
            <div>
              租借时间：
              <span></span>
            </div>
            <div>
              超时费：
              <span></span>
            </div>
          </li>
          <li>
            <div>
              租借车：
              <span></span>
            </div>
            <div>
              损坏费：
              <span></span>
            </div>
          </li>
          <li>
            <div>
              租借类型：
              <span></span>
            </div>
            <div>
              违章处理费：
              <span></span>
            </div>
          </li>
          <li>
            <div>
              租借门店：
              <span></span>
            </div>
            <div>
              参与优惠活动：
              <span></span>
            </div>
          </li>
          <li>
            <div>
              租赁方式：
              <span></span>
            </div>
            <div>
              平价币抵扣：
              <span></span>
            </div>
          </li>
          <li>
            <div>
              购买保险：
              <span></span>
            </div>
            <div>
              积分抵扣：
              <span></span>
            </div>
          </li>
          <li>
            <div>
              支付押金：
              <span></span>
            </div>
          </li>
          <li>
            <div>
              支付金额：
              <span></span>
            </div>
            <div>
              退款金额：
              <span></span>
            </div>
          </li>
          <li>
            <div>
              支付类型：
              <span></span>
            </div>
            <div>
              退款人：
              <span></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="masking" v-show="$store.state.phoneshow">
      <div class="phonebox">
        <button @click="phonechange">
          <img src="./../../assets/masking/guanbi.png" alt />
        </button>
        <div>
          <p>
            原手机号：
            <input type="text" />
          </p>
          <p>
            新手机号：
            <input type="text" />
          </p>
          <p>
            <span>确定</span>
          </p>
        </div>
      </div>
    </div>
    <div class="masking" v-show="$store.state.recharge">
      <div class="rechargebox">
        <button @click="recharge">
          <img src="./../../assets/masking/guanbi.png" alt />
        </button>
        <div>
          <p>
            金额：
            <input type="text" />
          </p>
        
          <p>
            <span>充值</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "../head";
import HomeTex from "./home_echart_top";
import Leftaside from "./../leftaside.vue";
export default {
  data() {
    return {
      weishow: false,
      clearedshow: false
    };
  },
  methods: {
    close() {
      this.$store.commit("change", this.weishow);
    },
    clearedclose() {
      this.$store.commit("open", this.clearedshow);
    },
    phonechange() {
      this.$store.commit("pchange");
    },
    recharge() {
      this.$store.commit("recharge");
    }
  },
  components: {
    Head,
    HomeTex,
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
    .clearedbox {
      width: 59%;
      height: 90%;
      padding: 28px 34px 0 45px;
      box-sizing: border-box;
      background: #fff;
      position: relative;
      display: flex;
      flex-direction: column;
      .top {
        margin-top: 20px;
        width: 100%;

        font-family: MicrosoftYaHei;
        font-size: 18px;
        line-height: 16px;
        letter-spacing: 1px;
        color: #333333;
      }
      .close {
        position: absolute;
        top: 46px;
        right: 35px;
        display: block;
        width: 19px;
        height: 19px;
      }
      ul {
        li {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: 23px;
          div {
            img {
              width: 223px;
              height: 132px;
            }
            &:nth-child(1) {
              width: 60%;
            }
            &:nth-child(2) {
              width: 40%;
            }
          }
          div.clearedright {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p {
              margin-bottom: 25px;
            }
          }
        }
      }
    }
    .phonebox {
      width: 51.5%;
      height: 28.5%;
      background: #fff;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        position: absolute;
        top: 18px;
        right: 22px;
        background: none;
        border: none;
        outline: none;
        width: 17px;
        height: 17px;
      }
      p {
        font-size: 18px;
        line-height: 38px;
        input {
          border: none;
          outline: none;
          border-bottom: 1px solid #000;
        }
        &:nth-child(3) {
          text-align: center;
          span {
            display: inline-block;
            width: 84px;
            height: 21px;
            line-height: 22px;
            background-color: #f9c307;
            border-radius: 11px;
            font-size: 14px;
            color: #333;
          }
        }
      }
    }
    .rechargebox {
      width: 51.5%;
      height: 20.9%;
      background: #fff;
      position: relative;
       display: flex;
      align-items: center;
      justify-content: center;
      button {
        position: absolute;
        top: 18px;
        right: 22px;
        background: none;
        border: none;
        outline: none;
        width: 17px;
        height: 17px;
      }
      p {
        font-size: 18px;
        line-height: 38px;
        input {
          border: none;
          outline: none;
          border-bottom: 1px solid #000;
        }
        &:nth-child(2) {
          text-align: center;
          span {
            display: inline-block;
            width: 84px;
            height: 21px;
            line-height: 22px;
            background-color: #f9c307;
            border-radius: 11px;
            font-size: 14px;
            color: #333;
          }
        }
      }
    }
  }
  .copy {
    text-indent: 30%;
    font-family: MicrosoftYaHei;
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 16px;
    letter-spacing: 1px;
    color: #535353;
    margin-top: 40px;
  }
}
</style>
