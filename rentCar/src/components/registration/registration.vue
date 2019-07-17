<template>
  <div class="reg">
    <div class="reg_top">
      <input type="text" :placeholder="carNunber" />
      <button @click="changes" :class="{'clors':colorshow}">查询车辆</button>
    </div>
    <div class="reg_one" v-show="divshow">
      <h2>最近车辆出租记录</h2>
      <ul>
        <li class="reg_nav">
          <span>车型</span>
          <span>车牌号</span>
          <span>订单号</span>
          <span>借车时间</span>
          <span>还车时间</span>
          <span>状态</span>
          <span>是否有违章</span>
        </li>
        <li>
          <span>大众斯柯达</span>
          <span>豫A 00000</span>
          <span>123456789012</span>
          <span>2019-7-10</span>
          <span>2019-8-10</span>
          <span>代还</span>
          <span>无</span>
        </li>
      </ul>
    </div>
    <div class="reg_two" v-show="!divshow">
      <div class="reg_two_l">
        <h2>车辆基本信息</h2>
        <img src="../../assets/mendian/che.png" alt />
        <p>品牌：现代全新胜达（7座）SUV/自动</p>
        <p>车牌号：{{carNunber}}</p>
        <p>发动机号码：EW12345</p>
        <p>注册号码：2017-9-8</p>
        <p>发证时间：2017-9-8</p>
        <p>车主：小云云</p>
        <p>门店：金水区平价租车</p>
      </div>
      <div class="reg_two_r">
        <h2>车辆出租记录（共3次）</h2>
        <ul>
          <li>
            <span class="reg_two_r_nav">借出日期</span>
            <span>归还日期</span>
            <span>订单号</span>
          </li>
          <li>
            <span>2019-7-3</span>
            <span>2019-7-8</span>
            <span>123456789009</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      divshow:  true,
      colorshow: false,
      carNunber: "请输入车牌号"
    };
  },
  methods: {
    changes() {
      this.divshow = !this.divshow;
      this.carNunber = "豫A 12345";
      this.colorshow = !this.colorshow;
    }
  },
  components: {}
};
</script >

<style scoped lang='less'>
.reg {
  padding: 35px 36px 0 42px;
  .reg_top {
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 33px;
    padding: 22px 0 17px 55px;
    background: white;
    box-shadow: 0px 0px 12px 1px rgba(21, 21, 21, 0.23);
    input {
      width: 40%;
      min-width: 342px;
      height: 30px;
      padding-left: 40px;
      background: url("../../assets/search/search.png") no-repeat 5% center,
        #fbf5e0;
      margin-right: 18px;
      border-radius: 15px;
    }
    .clors{
      background: #ccc;
    }
    button {
      font-size: 13px;
      background: #ffcc00;
      padding: 5px 6px;
      border-radius: 11px;
    }
  }
  .reg_one {
    background: white;
    h2 {
      font-family: MicrosoftYaHei;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 2px;
      color: #333333;
      padding: 25px 29px;
    }
    ul {
      .reg_nav {
        padding: 3px 0;
        color: #333333;
        font-size: 18px;
        span {
          text-align: center;
        }
      }
      li {
        padding: 10px 0;
        font-size: 12px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        span {
          flex: 1;
          text-align: center;
        }
      }
    }
  }
  .reg_two {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div {
      width: 45%;
      // height: 80%;
      min-height: 559px;
      min-width: 363px;
       box-shadow: 0px 0px 12px 1px rgba(21, 21, 21, 0.23);
    }
    .reg_two_l {
      padding: 24px 17px 0 32px;
      background: white;
      h2 {
        font-size: 19px;
        color: #333333;
        padding: 0 0 8px 0;
        font-weight: normal;
      }
      img {
        width: 223px;
        height: 132px;
      }
      p {
        font-size: 16px;
        color: #333333;
        padding: 13px 0;
        &:last-of-type{
          padding: 13px 0 26px;
        }
      }
    }
    .reg_two_r {
      background: white;
      h2 {
        font-size: 19px;
        font-weight: normal;
        color: #333333;
        padding: 22px 0 0 34px;; 
      }
      ul {
        .reg_two_r_nav {
          font-size: 16px
        }
        li {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          font-size: 12px;
          padding: 13px  0;
          span{
            flex: 1;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
