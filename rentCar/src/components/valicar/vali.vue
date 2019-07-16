<template>
  <div class="validate">
    <div class="vailleft">
      <header>
        <span class="head_title">验车</span>
        <p class="head_right">
          <span>订单号</span>
          <span>123564893215</span>
        </p>
      </header>
      <ul class="vaillist">
        <li>
          驾驶员：
          <span>李国威</span>
        </li>
        <li>
          手机号：
          <span>18334567890</span>
        </li>
        <li>
          租借时间：
          <span>2019-07-09</span>~
          <span>2019-07-16</span>
        </li>
        <li>
          租借车：
          <span>现代全新胜达（7座）</span>
        </li>
        <li>
          租借类型：
          <span>SUV/自动</span>
        </li>
        <li>
          租借门店：
          <span>金水区平驾租车</span>
        </li>
        <li>
          租赁方式：
          <span>周租</span>
        </li>
        <li>
          车辆是否损坏：
          <label for="yes">
            <input type="radio" name="car" id="yes" @click="param=true" />是
          </label>
          <label for="no">
            <input type="radio" name="car" id="no" @click="param=false" />否
          </label>
          <div contenteditable="true" class="badinfo" v-show="param">记录损坏的信息</div>
        </li>
        <li>
          还车门店：
          <select>
            <option value="金水区平价租车">金水区平价租车</option>
            <option value="惠济区平价租车">惠济区平价租车</option>
            <option value="二七区平价租车">二七区平价租车</option>
          </select>
        </li>
        <li>
          换车人：
          <input type="text" class="info" v-model="user" />
        </li>
        <li>
          换车人手机号：
          <input type="text" class="info" v-model="userphone" />
        </li>
      </ul>
    </div>
    <div class="vailright">
      <header>
        <span class="head_title">结算</span>
      </header>
      <ul class="vaillist">
        <li>
          还车时间：
          <span>2019-01-16</span>
        </li>
        <li>
          实际还车时间：
          <input type="text" class="info" v-model="Cartime" />
        </li>
        <li>
          使用费：
          <input type="text" class="info" v-model="royalty " />
        </li>
        <li>
          基本保险费：
          <input type="text" class="info" v-model="premium" />
        </li>
        <li>
          超时费：
          <input type="text" class="info" v-model="overtime" />
        </li>
        <li>
          损坏费：
          <input type="text" class="info" v-model="damage" />
        </li>
        <li>
          违章处理费
          <input type="text" class="info" v-model="handling" />
        </li>
      </ul>
      <ul class="accountlist">
        <li>
          共计：
          <span>{{sum}}</span>元
        </li>
        <li>
          是否参与优惠活动：
          <select>
            <option value="无">无</option>
          </select>
        </li>
        <li class="morelist">
          <div>
            已交押金：
            <span></span> 元
          </div>
          <div>
            优惠金额：
            <span></span>元
          </div>
        </li>
        <li class="morelist">
          <div>
            平价币抵扣
            <span></span>元
          </div>
          <div>
            积分抵扣
            <span></span>元
          </div>
        </li>
        <li class="morelist">
          <div>
            实际应退：
            <span></span>元
          </div>
          <div>
            退款人：
            <input type="text" class="info" />
          </div>
        </li>
        <li>
          <span class="btn" @click="fn">退款结算</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      param: "",
      user: "",
      badinfo: "",
      userphone: "",
      Cartime: "",
      royalty: "",
      premium: "",
      overtime: "",
      damage: "",
      handling: ""
    };
  },
  methods: {
    fn(){
      console.log('我即将结算');
    }
  },
  components: {},
  computed: {
    // 计算属性的 getter
    sum: function() {
      // `this` 指向 vm 实例
      return (
        this.royalty -
        0 +
        (this.premium - 0) +
        (this.overtime - 0) +
        (this.damage - 0) +
        (this.handling - 0)
      );
    }
  }
};
</script >

<style scoped lang='less'>
.validate {
  margin: 34px auto 0;
  width: 94%;
  min-width: 905px;
  min-height: 583px;
  height: 77%;
  display: flex;
  flex-direction: row;
  div {
    background: #fff;
    min-width: 408px;
    width: 45.3%;
    box-shadow: 0px 0px 12px 1px rgba(21, 21, 21, 0.23);
    padding: 26px 0;
    box-sizing: border-box;
    header {
      padding: 0 26px;
      box-sizing: border-box;
      .head_title {
        font-family: MicrosoftYaHei;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 16px;
        letter-spacing: 2px;
        color: #ffcc00;
      }
      .head_right {
        float: right;
        font-family: MicrosoftYaHei;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 16px;
        letter-spacing: 1px;
        color: #333333;
        margin-right: 5px;
      }
    }
    .vaillist {
      padding: 0 26px;
      box-sizing: border-box;
      margin-top: 30px;
      li {
        font-family: MicrosoftYaHei;
        font-size: 16px;

        line-height: 16px;
        letter-spacing: 1px;
        color: #333333;
        margin-bottom: 25px;
        .badinfo {
          padding: 5px;
          margin: 15px 0 0 0;
          width: 79%;
          height: 68px;
          font-family: MicrosoftYaHei;
          font-size: 12px;

          line-height: 16px;
          letter-spacing: 1px;
          color: #999999;
          box-shadow: none;
          border: solid 1px #666666;
          box-sizing: border-box;
        }
        select {
          border: none;
        }
        .info {
          border: none;
          outline: none;
          width: 156px;
          border-bottom: 1px solid #000;
        }
      }
    }
  }
  div.vailleft {
    margin-right: 4.8%;
    margin-left: 5px;
  }
  div.vailright {
    .vaillist {
      border-bottom: 1px solid #000;
    }
    .accountlist {
      padding: 15px 26px 0;
      box-sizing: border-box;
      li {
        text-align: right;
        font-family: MicrosoftYaHei;
        font-size: 16px;
        margin-bottom: 25px;
        line-height: 16px;
        letter-spacing: 1px;
        color: #333333;

        div {
          width: 50%;
          min-width: 204px;
          text-align: left;
          padding: 0;
          margin: 0;
          box-shadow: none;
        }
        select {
          border: none;
        }
        .info {
          border: none;
          outline: none;
          width: 100px;
          border-bottom: 1px solid #000;
        }
        .btn {
          display: block;
          margin: 0 auto;
          width: 253px;
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
      li.morelist {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
