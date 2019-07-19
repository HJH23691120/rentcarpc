<template>
  <div class="box">
    <div class="loginbox">
      <div class="loginleft"></div>
      <div class="login">
        <div class="logo">
          <img src="./../assets/login/logo @2x.png" alt="logo" />
        </div>
        <p>平驾租车后台管理系统</p>
        <div class="menu">
          <div id="user">
            <span>
              <img src="./../assets/login/regeset.png" alt="用户" />
            </span>
            <input
              type="text"
              placeholder="用户名"
              v-focus
              @blur="useverify"
              @focus="userfocus"
              v-model="name"
            />
            <span>{{userright}}</span>
          </div>
          <div id="pass">
            <span>
              <img src="./../assets/login/pwsswad.png" alt="密码" />
            </span>
            <input
              type="password"
              placeholder="密码"
              @blur="passverify"
              @focus="passfocus"
              v-model="password"
            />
            <span>{{passright}}</span>
          </div>
          <p>
            <label for="auto">
              <input type="checkbox" id="auto" />自动登录
            </label>
            <a href="#">忘记密码</a>
          </p>
          <button @click="fn">登&emsp;&emsp;录</button>
          <!-- <router-link to="/hometex">登&emsp;&emsp;录</router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      userreg: "",
      userright: "",
      passright: "",
      password: "",
      user: false,
      pass: false
    };
  },
  methods: {
    fn() {
      //这是提交按钮得函数
      if (this.user && this.pass) {
        this.$axios
          .post(
            `http://${this.$store.state.id}/admin/login?`,
            this.$qs.stringify({
                name: this.name,
                password: this.password
            })
          )
          .then(res => {
            console.log(res.data[0].result);
            if (res.data[0].result) {
              this.$router.push('/home')
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    userfocus() {
      this.userright = "";
    },
    passfocus() {
      this.passright = "";
    },
    useverify() {
      //这是用户名验证的函数
      let user = /^[a-z]+$/i;
      if (user.test(this.name)) {
        this.userright = "√";
        this.user = true;
      } else {
        this.userright = "×";
      }
    },
    passverify() {
      //这是密码验证的函数
      let patrn = /^(\w){6,20}$/;
      if (patrn.test(this.password)) {
        this.passright = "√";
        this.pass = true;
      } else {
        this.passright = "×";
      }
    }
  },
  components: {},
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
        return;
      }
    }
  }
};
</script >
<style scoped lang='less'>
.box {
  height: 100%;
  min-width: 1000px;
  background: url("./../assets/login/beijing.jpg") no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .loginbox {
    width: 927px;
    height: 507px;
    min-width: 927px;
    display: flex;
    flex-direction: row;
    .loginleft {
      width: 628px;
      height: 507px;
      background: url("./../assets/login/zuo.png") no-repeat center center;
      background-size: cover;
    }
    .login {
      width: 299px;
      height: 507px;
      background: #fff;
      .logo {
        margin: 98px auto 0;
        text-align: center;
      }
      p {
        color: #333;
        height: 20px;
        font-size: 20px;
        font-weight: 900;
        line-height: 16px;
        letter-spacing: 4px;
        margin: 38px 0 0 0;
        text-align: center;
      }
      .menu {
        margin: 35px 0 0 0;
        div {
          width: 196px;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          padding-bottom: 6px;
          border-bottom: 1px solid #666;
          align-items: center;
          span {
            display: block;
            width: 13px;
            height: 20px;
          }
          input {
            border: none;
            flex: 1;
            margin: 0 0 0 10px;
            &::placeholder {
              color: #999;
              font-size: 14px;
              line-height: 16px;
            }
          }
          &:nth-child(2) {
            margin-top: 23px;
          }
        }
        p {
          margin: 11px auto 0;
          width: 196px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          color: #999;
          font-weight: normal;
          letter-spacing: 0px;
          input {
            vertical-align: middle;
          }
          a {
            font-size: 12px;
            color: #999;
          }
        }
        button {
          display: block;
          margin: 24px auto 0;
          width: 196px;
          height: 34px;
          background-color: #f9c307;
          border-radius: 17px;
          border: none;
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 16px;
          letter-spacing: 3px;
          color: #333333;
          outline: none;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

