<template>
  <div class="aside">
    <div class="logo">
      <img src="./../assets/aside-left/logo.jpg" alt="logo" />
    </div>
    <p class="logoinfo">平驾租车管理端-PC端</p>
    <div class="list">
      <el-menu>
        <el-menu-item index="1">
          <router-link to="#5">
            <span>
              <img src="./../assets/aside-left/3.png" alt />
              <img src="./../assets/aside-left/3-1.png" alt />
            </span>首页
          </router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <div>
              <span class="img">
                <img src="./../assets/aside-left/3-2.png" alt />
                <img src="./../assets/aside-left/2-2.png" alt />
              </span>订单管理
              <span class="right img">
                <img src="./../assets/aside-left/jiantou1.png" alt />
                <img src="./../assets/aside-left/jiant2.png" alt />
              </span>
            </div>
          </template>
           <el-menu-item index="2-5 ">
            <router-link to="/home/management">订单管理</router-link>
          </el-menu-item>
          <el-menu-item index="2-1">
            <router-link to="/home/shouli">待受理</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="/home/accept">待结算</router-link>
          </el-menu-item>
          <el-menu-item index="2-3">
            <router-link to="/home/vali">验车 结算</router-link>
          </el-menu-item>
          <el-menu-item index="2-4">
            <router-link to="/home/cleared">已结算</router-link>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="3">
          <router-link to="/home/registration">
            <span>
              <img src="./../assets/aside-left/3-3.png" alt />
              <img src="./../assets/aside-left/2-3.png" alt />
            </span>车辆管理
          </router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link to="/home/member">
            <span>
              <img src="./../assets/aside-left/3-4.png" alt />
              <img src="./../assets/aside-left/2-1.png" alt />
            </span>会员管理
          </router-link>
        </el-menu-item>
        <el-menu-item index="5">
          <router-link to="#1">
            <span>
              <img src="./../assets/aside-left/3-5.png" alt />
              <img src="./../assets/aside-left/5.png" alt />
            </span>门店
          </router-link>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    more() {
      this.show = !this.show;
    }
  },
  mounted() {
    let li = document.getElementsByClassName("el-menu-item");
    for (let i = 0; i < li.length; i++) {
      li[i].style.padding = 0;
    }
    document.getElementsByClassName("el-submenu__title")[0].style.padding = 0;
    document.getElementsByClassName("el-submenu__title")[0].style.height = '42px';
    document.getElementsByClassName("el-submenu__icon-arrow")[0].style.display =
      "none";
  },
  components: {}
};
</script >
<style scoped lang='less'>
.aside {
  display: flex;
  flex-direction: column;
  .logo {
    width: 83px;
    height: 83px;
    margin: 23px auto 0;
    img {
      width: 83px;
      height: 83px;
      border-radius: 15px;
    }
  }
  .logoinfo {
    margin-top: 32px;
    height: 19px;
    font-family: MicrosoftYaHei-Bold;
    font-size: 18px;
    font-weight: 900;
    font-stretch: normal;
    text-align: center;
    line-height: 16px;
    letter-spacing: 2px;
    color: #333333;
  }
  .list {
    margin: 29px 0 0 49px;
    .el-menu {
      .el-menu-item {
        height: 42px;
        padding-left: 0;
        a {
          display: block;
          margin: 0 0 24px 0;
          font-family: MicrosoftYaHei-Bold;
          font-size: 16px;
          font-weight: 900;
          font-stretch: normal;
          line-height: 16px;
          letter-spacing: 2px;
          color: #333333;
          span {
            display: inline-block;
            width: 17px;
            height: 16px;
            margin-right: 10px;
            img {
              width: 17px;
              height: 16px;
              vertical-align: top;
              &:nth-child(1) {
                display: inline-block;
              }
              &:nth-child(2) {
                display: none;
              }
            }
          }
        }
        a.router-link-active {
          color: #ffcc00;
          span {
            img {
              &:nth-child(1) {
                display: none;
              }
              &:nth-child(2) {
                display: inline-block;
              }
            }
          }
        }
      }
      .el-submenu {
        .el-submenu__title{
          height: 42px;
        }
        .el-menu-item {
          margin: 0 0 0 49px;
          height: 30px;
          a {
            font-family: MicrosoftYaHei;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 16px;
            letter-spacing: 1px;
            color: #333333;
          }
         a.router-link-active {
           	color: #ffcc00;
         }
        }
        .el-submenu__icon-arrow {
          display: none;
        }
        div {
          font-family: MicrosoftYaHei-Bold;
          font-size: 16px;
          font-weight: 900;
          line-height: 16px;
          letter-spacing: 2px;
          color: #333333;
          .right {
            width: 10px;
            height: 10px;
            margin-left: 8px;
            vertical-align: top;
            img {
              width: 9px;
              height: 9px;
              vertical-align: middle;
            }
          }
        }
      }

      span {
        display: inline-block;
        width: 17px;
        height: 16px;
        margin-right: 10px;
        img {
          width: 17px;
          height: 16px;
          vertical-align: top;
          &:nth-child(1) {
            display: inline-block;
          }
          &:nth-child(2) {
            display: none;
          }
        }
      }
    }
    li.is-opened {
      .el-submenu__title {
        div {
          color: #ffcc00;
        }
        span {
          img {
            &:nth-child(1) {
              display: none;
            }
            &:nth-child(2) {
              display: inline-block;
            }
          }
        }
      }
    }
  }
}
</style>
