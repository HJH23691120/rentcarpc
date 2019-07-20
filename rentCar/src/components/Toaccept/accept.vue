<template>
  <div>
    <div class="accept" v-if="listshow">
      <p class="accepttop">待结算订单</p>
      <div class="acceptlist">
        <header>
          <span>姓名</span>
          <span>手机号</span>
          <span>租赁方式</span>
          <span>车型</span>
          <span>还车时间</span>
          <span>订单号</span>
          <span>操作</span>
        </header>
        <ul class="list" @click="opens($event)">
          <li v-for="(item_a,index_b) in this.$store.state.acceptList" :key="index_b">
            <span>{{item_a.username}}</span>
            <span>{{item_a.phoneNo}}</span>
            <span>{{item_a.hire}}</span>
            <span>{{item_a.vehicle}}</span>
            <span>{{item_a.collectionTime | dates}}</span>
            <span>{{item_a.orderNumber}}</span>
            <span>
              <span>去结算</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="validate" v-else>
      <div class="vailleft">
        <header>
          <span class="head_title">验车</span>
          <p class="head_right">
            <span>订单号</span>
            <span>{{ acceptinfo.orderNumber}}</span>
          </p>
        </header>
        <ul class="vaillist">
          <li>
            驾驶员：
            <span>{{ acceptinfo.username}}</span>
          </li>
          <li>
            手机号：
            <span>{{ acceptinfo.phoneNO}}</span>
          </li>
          <li>
            租借时间：
            <span>{{ acceptinfo.carTime |dates}}</span>~
            <span>{{ acceptinfo.collectionTime |dates}}</span>
          </li>
          <li>
            租借车：
            <span>{{acceptinfo.vehicle}}</span>
          </li>
          <li>
            租借类型：
            <span>{{acceptinfo.leaseType}}</span>
          </li>
          <li>
            租借门店：
            <span>{{acceptinfo.rentalStores}}</span>
          </li>
          <li>
            租赁方式：
            <span>{{acceptinfo.hire}}</span>
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
            还车人：
            <input type="text" class="info" v-model="user" />
          </li>
          <li>
            还车人手机号：
            <input type="text" class="info" v-model="userphone" />
          </li>
        </ul>
      </div>
      <div class="vailright">
        <button @click="close"><img src="./../../assets/masking/guanbi.png" alt=""></button>
        <header>
          <span class="head_title">结算</span>
        </header>
        <ul class="vaillist">
          <li>
            还车时间：
             <span>{{ acceptinfo.collectionTime |dates}}</span>
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
  </div>
</template>

<script>

export default {
  data() {
    return {
      listshow: true,
      param: "",
      user: "",
      badinfo: "",
      userphone: "",
      Cartime: "",
      royalty: "",
      premium: "",
      overtime: "",
      damage: "",
      handling: "",
      acceptinfo: {}
    };
  },
  methods: {
    opens(e) {
      if (e.target.parentNode.localName === "span") {
        this.listshow = !this.listshow;
        console.log(e.target.parentNode.parentNode.children[5].innerText);
        this.$axios(`http://${this.$store.state.id}/order/jiesuandingdan?`, {
          params: {
            orderNum: e.target.parentNode.parentNode.children[5].innerText
          }
        })
          .then(res => {
            this.acceptinfo = res.data;       
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    close(){

      this.listshow = !this.listshow;
    },
    fn() {
    }
  },
  filters: {
    dates(val) {
      let date = new Date(val);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      month = String(month).padStart(2, "0");
      day = String(day).padStart(2, "0");
      return year + "-" + month + "-" + day;
    }
  },
  components: {
   
  },
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
  },
  mounted() {
    this.$store.dispatch("acceptFrom");
  },
  filters: {
    dates(val) {
      let date = new Date(val);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      month = String(month).padStart(2, "0");
      day = String(day).padStart(2, "0");
      return year + "-" + month + "-" + day;
    }
  }
};
</script >

<style scoped lang='less'>
div{
   height: 74%;
  // min-width: 519px;
  .accept {
  overflow: hidden;
  margin: 34px auto 0;
  width: 94%;
  min-width: 900px;
 height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 12px 1px rgba(21, 21, 21, 0.23);
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
    overflow: hidden;
    margin: 26px 65px 0 28px;
    display: flex;
    flex-direction: column;
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
      flex: 1;
      overflow: auto;
      height: 400px;
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
            span {
              height: 14px;
              line-height: 14px;
              border-radius: 6px;
              font-size: 12px;
              text-align: center;
              &:nth-child(1) {
                width: 31.9%;
                min-width: 46px;
                background-color: #ffcc00;
                color: #333333;
                margin-right: 5px;
              }
            }
          }
        }
      }
    }
  }
}
.validate {
  margin: 34px auto 0;
  width: 94%;
  min-width: 905px;

  height: 100%;
  display: flex;
  flex-direction: row;
  div {
    background: #fff;
    min-width: 408px;
    width: 45.3%;
    height: 100%;
    overflow: auto;
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
    position: relative;
    button{
      position: absolute;
        top: 18px;
        right: 22px;
        background: none;
        border: none;
        outline: none;
        width: 17px;
        height: 17px;

    }
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
        overflow: hidden;
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
}
</style>
