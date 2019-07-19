<template>
  <div class="accept">
    <p class="accepttop">待受理订单</p>
    <div class="acceptlist">
      <header>
        <span>姓名</span>
        <span>手机号</span>
        <span>租赁方式</span>
        <span>车型</span>
        <span>取车时间</span>
        <span>订单号</span>
        <span>操作</span>
      </header>
      <ul class="list">
        <li>
          <span>张三</span>
          <span>18336093166</span>
          <span>日租</span>
          <span>大众斯柯达</span>
          <span>2019-07-10</span>
          <span>123456784012</span>
          <span>
            <span @click=" masking=true">受理</span>
            <span>删除</span>
          </span>
        </li>
        <li>
          <span>张三</span>
          <span>18336093166</span>
          <span>日租</span>
          <span>大众斯柯达</span>
          <span>2019-07-10</span>
          <span>123456784012</span>
          <span>
            <span>受理</span>
            <span>删除</span>
          </span>
        </li>
        <li>
          <span>张三</span>
          <span>18336093166</span>
          <span>日租</span>
          <span>大众斯柯达</span>
          <span>2019-07-10</span>
          <span>123456784012</span>
          <span>
            <span>受理</span>
            <span>删除</span>
          </span>
        </li>
        <li>
          <span>张三</span>
          <span>18336093166</span>
          <span>日租</span>
          <span>大众斯柯达</span>
          <span>2019-07-10</span>
          <span>123456784012</span>
          <span>
            <span>受理</span>
            <span>删除</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="accepmasking" v-show="masking">
      <div class="left">
        <header>
          <span class="list">待受理列表</span>
          <span class="img">
            <img src="./../../assets/search/fanhui.png" alt />
          </span>
          订单号
          <span>123564893215</span>
        </header>
        <ul class="acceptlist">
          <li>
            驾驶员：
            <span></span>
          </li>
          <li>
            手机号：
            <span></span>
          </li>
          <li>
            驾驶证号：
            <span></span>
          </li>
          <li>
            <span>
              <img src="./../../assets/search/zj-1.jpg" alt />
              <span>驾驶证正面</span>
            </span>
            <span>
              <img src="./../../assets/search/zj-1.jpg" alt /><span>驾驶证反面</span>
            </span>
          </li>
          <li>
            紧急联系人：
            <span></span>
          </li>
          <li>
            紧急联系人手机号：
            <span></span>
          </li>
          <li>
            购买保险：
            <span></span>
          </li>
          <li>
            支付押金：
            <span></span>
          </li>
          <li>
            支付金额：
            <span></span>
          </li>
          <li>
            支付类型：
            <span></span>
          </li>
        </ul>
      </div>
      <div class="right">
        <header>
          租借时间：<span>2019-07-09</span>~<span>2019-07-16</span>
        </header>
        <ul class="acceptlist">
          <li><img src="./../../assets/search/pic-1.jpg" alt=""></li>
          <li>租界车：<span></span></li>
          <li>租界类型：<span></span></li>
          <li>租界门店：<span></span></li>
          <li>租赁方式：<span></span></li>
          <li>提车人：<input type="text" class="info"></li>
          <li>提车时间：<input type="text" class="info"></li>
          <li>还车时间：<input type="text" class="info"></li>
          <li>受理人：<input type="text" class="info"></li>
          <li><span class="btn" @click="btn">受&emsp;&emsp;&emsp;&emsp;理</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      masking:false
    };
  },
  methods: {
    btn(){
      console.log('我即将提交')
      this.masking=false;
    }
  },
  components: {}
};
</script >

<style scoped lang='less'>
.accept {
  margin: 34px auto 0;
  width: 94%;
  min-width: 900px;
  min-height: 583px;
  height: 77%;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 12px 1px rgba(21, 21, 21, 0.23);
  position: relative;
  .accepttop {
    margin: 37px 0 0 28px;
    font-family: MicrosoftYaHei;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 16px;
    letter-spacing: 2px;
    color: #333333;
  }
  .acceptlist {
    margin: 26px 65px 0 28px;
    header {
      height: 38px;
      line-height: 38px;
      display: flex;

      span {
        flex: 1;
        font-family: MicrosoftYaHei;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 2px;
        color: #333333;
        text-align: center;
        display: inline-block;
        &:nth-child(1) {
          width: 5.6%;
          min-width: 48px;
          text-align: left;
        }
      }
    }
    .list {
      li {
        height: 38px;
        line-height: 38px;
        display: flex;
        span {
          flex: 1;

          display: inline-block;
          text-align: center;
          font-size: 12px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 1px;
          color: #333333;
          &:nth-child(1) {
            text-align: left;
          }

          &:nth-child(7) {
            min-width: 144px;
            width: 16.9%;

            span {
              height: 14px;
              line-height: 14px;
              border-radius: 6px;
              font-size: 12px;
              text-align: center;
              &:nth-child(1) {
                width: 25%;
                min-width: 36px;
                background-color: #ffcc00;
                color: #333333;
                margin-right: 5px;
              }
              &:nth-child(2) {
                width: 25%;
                min-width: 36px;
                background-color: #009944;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
  .accepmasking {
    width: 100%;
    min-width: 900px;
    min-height: 583px;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: row;
    padding: 26px 0;
    box-sizing: border-box;
    position: absolute;
    top: 0;

    div {
      min-width: 450px;
      width: 50%;
      height: 100%;
      box-shadow: none;
      padding: 0 29px;
      box-sizing: border-box;
      header {
        font-family: MicrosoftYaHei;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 16px;
        letter-spacing: 1px;
        color: #333333;
        .list {
          font-weight: 500;
          letter-spacing: 2px;
          color: #ffcc00;
        }
        .img {
          margin: 0 10px;
        }
      }
      .acceptlist {
        margin: 27px 0 0 0;
        padding: 0 0 0 40px;
        li {
          margin-bottom: 25px;
          &:nth-child(4) {
            display: flex;
            flex-direction: row;
            span {
              img{
                width: 120px;
                height: 82px;
              }
              min-width: 150px;
              display: flex;
              flex-direction: column;
              align-items: center;
              span{
                margin-top: 10px;
              }
            }
          }
        }
      }
    }
    div.right{
.acceptlist{
  padding: 0;
  li{
    img{
      width: 223px;
      height: 132px;
    }
     .info {
          border: none;
          outline: none;
          width: 156px;
          border-bottom: 1px solid #000;
        }
         .btn {
          display: block;
         
          width: 220px;
          height: 33px;
          background-color: #f1f1f1;
          border-radius: 17px;
          text-align: center;
          font-size: 16px;

          line-height: 33px;
          letter-spacing: 3px;
          color: #999999;
        }
  }
}
    }
  }
}
</style>
