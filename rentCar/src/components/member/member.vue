<template>
  <div class="member">
    <div class="header">
      <div>
        <input type="text" placeholder="输入驾驶员姓名/手机号" v-model="phone" />
      </div>
      <button @click="query">会员查询</button>
    </div>
    <div class="memberinfo">
      <div class="memberinfoleft">
        <div class="headinfo">
          <div>
            <span class="headimg">
              <img src="./../../assets/member/toux.png" alt />
              <img src="./../../assets/member/huiyuan2.png" alt />
            </span>
            <span>小白</span>
            <p>
              <span>
                <img src="./../../assets/member/pingjiabi.png" alt />
                {{userinfo.integral}}
              </span>
              <span>
                <img src="./../../assets/member/jifen.png" alt />
                {{userinfo.pingjiaGold}}
              </span>
            </p>
          </div>
          <div>
            <p>
              姓名：
              <span>{{userinfo.username}}</span>
            </p>
            <p>
              手机号：
              <span>{{userinfo.tel}}</span>
              <button @click="phonechange">编辑</button>
            </p>
            <p>
              证件号：
              <span>{{userinfo.idCard}}</span>
            </p>
          </div>
        </div>
        <div class="footinfo">
          <header>租车记录</header>
          <div class="list_title">
            <span>时间</span>
            <span>租赁方式</span>
            <span>状态</span>
          </div>
          <ul>
            <li v-for="(item,index) in userzuce" :key="index">
              <span>{{item.rentTime | dates}}</span>
              <span>{{item.hire}}</span>
              <span>{{item.state}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="memberinforight">
        <header>
          充值记录
          <button @click="recharge">充值</button>
        </header>
        <div class="list_title">
          <span>时间</span>
          <span>支付金额</span>
          <span>平驾币</span>
          <span>积分</span>
        </div>
        <ul>
          <li v-for="(ite,ind) in usercz" :key="ind">
            <span>{{ite.rechargeTime | dates}}</span>
            <span>{{ite.rechargeMoney}}</span>
            <span>{{ite.pingjiaGold}}</span>
            <span>{{ite.integral}}</span>
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
      phone: "",
      userinfo: "",
      userzuce: "",
      usercz: ""
    };
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
  methods: {
    query() {
      console.log(1);
      this.$axios(`http://${this.$store.state.id}/admin/getuserbytel?`, {
        params: {
          tel: this.phone
        }
      })
        .then(res => {
          console.log(res.data);
          this.userinfo = res.data[0];
          this.usercz = res.data[1];

          this.userzuce = res.data[2];
        })
        .catch(err => {
          console.log(err);
        });
    },
    phonechange() {
      this.$store.commit("pchange");
    },
    recharge() {
      this.$store.commit("recharge");
    }
  },
  components: {},
  mounted() {}
};
</script >

<style scoped lang='less'>
.member {
  margin: 34px auto 0;
  width: 94%;
  min-width: 900px;
  min-height: 583px;
  height: 77%;
  display: flex;
  flex-direction: column;
  div {
    background: #fff;
    box-shadow: 0px 0px 12px 1px rgba(21, 21, 21, 0.23);
  }
  .header {
    min-height: 68px;
    display: flex;
    flex-direction: row;
    align-items: center;
    div {
      margin-left: 55px;
      box-shadow: none;
      width: 342px;
      height: 30px;
      background-color: #fbf5e0;
      border-radius: 15px;
      display: flex;
      flex-direction: row;
      align-items: center;
      span {
        margin-left: 16px;
      }
      input {
        flex: 1;
        background: #fbf5e0;
        border: none;
        outline: none;
        margin-left: 10px;
        &::placeholder {
          font-family: MicrosoftYaHei;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 1px;
          color: #cccccc;
        }
      }
    }
    button {
      width: 78px;
      height: 22px;
      background-color: #cccccc;
      border-radius: 11px;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 1px;
      color: #333333;
      border: none;
      outline: none;
      margin-left: 18px;
    }
  }
  .memberinfo {
    box-shadow: none;
    margin-top: 30px;
    flex: 1;
    font-size: 18px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 2px;
    color: #333333;
    background: #fbf5e0;
    display: flex;
    flex-direction: row;
    div.memberinfoleft {
      width: 45.5%;
      box-shadow: none;
      background: #fbf5e0;
      margin-right: 3%;
      .headinfo {
        height: 177px;
        background: #fff;
        padding: 25px 21px 0 26px;
        display: flex;
        flex-direction: row;
        div {
          box-shadow: none;
          display: flex;
          flex-direction: column;

          justify-content: space-between;
          padding-bottom: 30px;
          &:nth-child(1) {
            align-items: center;
            width: 30%;
            font-size: 14px;
            color: #333333;
            .headimg {
              position: relative;
              img {
                &:nth-child(1) {
                  width: 68px;
                  height: 68px;
                  border-radius: 50%;
                }
                &:nth-child(2) {
                  position: absolute;
                  bottom: 0;
                  right: 5px;
                }
              }
            }
            p {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              span {
                font-size: 12px;
                img {
                  width: 17px;
                  height: 15px;
                  vertical-align: middle;
                }
              }
            }
          }
          &:nth-child(2) {
            flex: 1;
            font-size: 14px;
            letter-spacing: 1px;
            color: #333333;
            margin-left: 10px;
            p {
              text-align: left;
              button {
                width: 44px;
                height: 19px;
                background-color: #ffcc00;
                border-radius: 10px;
                outline: none;
                border: none;
                font-size: 12px;
                float: right;
              }
            }
          }
        }
      }
      .footinfo {
        margin-top: 26px;
        overflow: auto;
        height: 48%;
        background: #fff;
        padding: 24px 22px 0;
        header {
          font-size: 18px;
        }
        div {
          box-shadow: none;
          margin-top: 22px;
          display: flex;
          justify-content: space-between;
          span {
            width: 25%;
            text-align: center;
            &:nth-child(1) {
              text-align: left;
            }
          }
        }
        ul {
          margin-top: 15px;
          li {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            margin-bottom: 5px;
            span {
              width: 25%;
              text-align: center;
              &:nth-child(1) {
                text-align: left;
              }
            }
          }
        }
      }
    }
    .memberinforight {
      flex: 1;
      padding: 19px 25px 0;
      header {
        font-size: 18px;
        button {
          width: 44px;
          height: 19px;
          margin-right: 30px;
          background-color: #ffcc00;
          border-radius: 10px;
          outline: none;
          border: none;
          font-size: 12px;
          float: right;
        }
      }
      div {
        box-shadow: none;
        margin-top: 22px;
        display: flex;
        justify-content: space-between;
        span {
          width: 33%;
          text-align: center;
          &:nth-child(1) {
            text-align: left;
          }
        }
      }
      ul {
        margin-top: 21px;
        li {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          margin-bottom: 5px;
          span {
            width: 33%;
            text-align: center;
            &:nth-child(1) {
              text-align: left;
            }
          }
        }
      }
    }
  }
}
</style>
