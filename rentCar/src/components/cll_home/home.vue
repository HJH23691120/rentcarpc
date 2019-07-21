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
          <li v-for="(item,index) in this.$store.state.breaklist" :key="index">
            <span class="newinfo">新</span>
            <span>{{item.date | dates}}</span>&nbsp;
            <span>{{item.date | times}}</span>&nbsp;
            <span>订单号</span>&nbsp;
            <span>{{item.order}}</span>
            <span>{{item.carNum}}</span>
            <span>{{item.detail}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="masking" v-show="$store.state.clearedshow">
      <div class="clearedbox">
        <p class="top">
          订单号：
          <span>{{$store.state.cleardinfo.orderNumber }}</span>
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
                <span>{{$store.state.cleardinfo.carTime | dates}}</span>
              </p>
              <p>
                车辆是否损坏：
                <span>{{$store.state.cleardinfo.failure }}</span>
              </p>
              <p>
                还车门店：
                <span>{{$store.state.cleardinfo.carStores }}</span>
              </p>
            </div>
          </li>
          <li>
            <div>
              租车人：
              <span>{{$store.state.cleardinfo.username }}</span>
            </div>
            <div>
              使用费：
              <span>{{$store.state.cleardinfo.royalties }}</span>
            </div>
          </li>
          <li>
            <div>
              手机号：
              <span>{{$store.state.cleardinfo.phoneNo }}</span>
            </div>
            <div>
              基本保险费费：
              <span>{{$store.state.cleardinfo.premium }}</span>
            </div>
          </li>
          <li>
            <div>
              租借时间：
              <span>{{$store.state.cleardinfo.collectionTime |dates }}</span>
            </div>
            <div>
              超时费：
              <span>{{$store.state.cleardinfo.overtime }}</span>
            </div>
          </li>
          <li>
            <div>
              租借车：
              <span>{{$store.state.cleardinfo.leaseType}}</span>
            </div>
            <div>
              损坏费：
              <span>{{$store.state.cleardinfo.damageFee }}</span>
            </div>
          </li>
          <li>
            <div>
              租借类型：
              <span>{{$store.state.cleardinfo.leaseType }}</span>
            </div>
            <div>
              违章处理费：
              <span>{{$store.state.cleardinfo.IllegalProcessing }}</span>
            </div>
          </li>
          <li>
            <div>
              租借门店：
              <span>{{$store.state.cleardinfo.rentalStores }}</span>
            </div>
            <div>
              参与优惠活动：
              <span>{{$store.state.cleardinfo.shiFoWeiZhang }}</span>
            </div>
          </li>
          <li>
            <div>
              租赁方式：
              <span>{{$store.state.cleardinfo.hire }}</span>
            </div>
            <div>
              平价币抵扣：
              <span>{{$store.state.cleardinfo.pingJiaBiZheKou}}</span>
            </div>
          </li>
          <li>
            <div>
              购买保险：
              <span>{{$store.state.cleardinfo.buyInsurance }}</span>
            </div>
            <div>
              积分抵扣：
              <span>{{$store.state.cleardinfo.integral }}</span>
            </div>
          </li>
          <li>
            <div>
              支付押金：
              <span>{{$store.state.cleardinfo.cashPledge }}</span>
            </div>
          </li>
          <li>
            <div>
              支付金额：
              <span>{{$store.state.cleardinfo.payMoney}}</span>
            </div>
            <div>
              退款金额：
              <span>{{$store.state.cleardinfo.refund }}</span>
            </div>
          </li>
          <li>
            <div>
              支付类型：
              <span>{{$store.state.cleardinfo.paymentType }}</span>
            </div>
            <div>
              退款人：
              <span>{{$store.state.cleardinfo.refundPeople }}</span>
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
            <input type="text" v-model="oldphone" />
          </p>
          <p>
            新手机号：
            <input type="text" v-model="newphone" />
          </p>
          <p>
            <span @click="amend">确定</span>
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
            <input type="text" v-model="money"/>
          </p>

          <p>
            <span @click="cz">充值</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "../head";

// 左边侧边栏
import Leftaside from "./../leftaside.vue";
export default {
  data() {
    return {
      weishow: false,
      clearedshow: false,
      oldphone: "",
      newphone: "",money:''
    };
  },
  mounted(){
    this.$router.push('/home/homeTex');
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
    },
    amend() {
      this.$axios(`http://${this.$store.state.id}/admin/adminchangetel?F`, {
        params: {
          oldTel: this.oldphone,
          newTel: this.newphone
        }
      })
        .then(res => {
          console.log(res.data.result);
          if(res.data.result){
             this.$store.commit("pchange");
             this.oldphone='';
             this.newphone=''; 
            alert("修改成功")

          }else{
            alert('原用户手机号错误')
          }

        })
        .catch(err => {
          console.log(err);
        });
    },
    cz(){
      if(this.money!==''){
        alert('充值成功');
         this.$store.commit("recharge");
      }else{
        alert('金额不能为空')
      }
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
    },
    times(val) {
      let date = new Date(val);
      let hour = date.getHours();
      let min = date.getMinutes();
      hour = String(hour).padStart(2, "0");
      min = String(min).padStart(2, "0");
      return hour + ":" + min;
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
    .clearedbox {
      width: 59%;
      height: 80%;
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
          margin-bottom: 8px;
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
