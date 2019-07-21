<template>
  <div class="management">
    <div class="header">
      <div>
        <span>
          <img src="./../../assets/search/search.png" />
        </span>
        <input type="text" placeholder="输入驾驶员姓名/手机号" v-model="phone" @input="recover" />
      </div>
      <button @click="query">订单查询</button>
    </div>
    <div class="mentinfo">
      <header>
        近期订单
        <button>已逾期</button>
        <select @click="removeall($event)">
          <option value disabled selected hidden>批量操作</option>
          <option value="删除">删除</option>
        </select>
      </header>
      <div class="listtitle" @click="all($event)">
        <span>
          <span></span>姓名
        </span>
        <span>手机号</span>
        <span>租赁方式</span>
        <span>车型</span>
        <span>取车时间</span>
        <span>还车时间</span>
        <span>订单状态</span>
        <span>操作</span>
      </div>
      <ul class="lists" @click="select($event)">
        <li v-for="(item,index) in list " :key="index">
          <span>
            <span></span>
            {{item.username}}
          </span>
          <span>{{item.phoneNo}}</span>
          <span>{{item.hire}}</span>
          <span>{{item.vehicle}}</span>
          <span>{{item.collectionTime | dates}}</span>
          <span>{{item.carTime | dates}}</span>
          <span>{{item.status}}</span>
          <span>
            <span>删除</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      list: [],
      alls: false,
      arr: []
    };
  },
  methods: {
    query() {
      console.log(this.phone);
      this.arr = this.list;
      if (this.phone === "") {
        alert("不能输入为空");
      } else {
        this.list = [];
        console.log();
        let temp = true;
        for (let i = 0; i < this.arr.length; i++) {
          if (
            this.arr[i].phoneNo === this.phone ||
            this.arr[i].username === this.phone
          ) {
            this.list.push(this.arr[i]);
            return false;
          } else {
            temp = false;
          }
        }
        if (!temp) {
          alert("用户名不存在");
        }
      }
    },
    recover() {
      if (this.arr.length !== 0 && this.phone === "") {
        this.list = this.arr;
      }
    },
    all(e) {
      let lis = document
        .getElementsByClassName("lists")[0]
        .getElementsByTagName("li");
      for (let i = 0; i < lis.length; i++) {
        let span = lis[i].children[0].children[0];
        if (!this.alls) {
          span.setAttribute("class", "light");
        } else {
          span.removeAttribute("class");
        }
      }
      if (e.target.parentNode.localName === "span") {
        console.log( e.target.parentNode.children[1])
        //  全选功能函数
        if (e.target === e.target.parentNode.children[0]) {
          if (!this.alls) {
            e.target.setAttribute("class", "light");
            this.alls = true; //全选的判定条件
          } else {
            e.target.setAttribute("class", "");
            this.alls = false;
          }
        }
      }
    },
    select(e) {
      if (e.target.parentNode.localName === "span") {
        //选择功能的方法
        if (
          e.target.parentNode === e.target.parentNode.parentNode.children[0]
        ) {
          if (e.target.hasAttribute("class")) {
            e.target.removeAttribute("class");
          } else {
            e.target.setAttribute("class", "light");
          }
        } else {
          var lis = e.target.parentNode.parentNode.parentNode.children;
          for (let i = 0; i < lis.length; i++) {
            if (lis[i] === e.target.parentNode.parentNode) {
              this.list.splice(i, 1);
            }
          }
        }
      }
    },
    removeall(e) {
      if (e.target.value === "删除") {
        console.log("我即将执行删除功能函数");
        let lis = document
          .getElementsByClassName("lists")[0]
          .getElementsByTagName("li");
        for (let i = 0; i < lis.length; i++) {
          if (lis[i].children[0].children[0].hasAttribute("class")) {
            // this.list.splice(i, 1);
            lis[i].parentNode.removeChild(lis[i]);
            console.log(this.list);
            console.log(this.list.length);
            // lis[i].children[0].children[0].removeAttribute("class")
          }
        }
      }
    }
  },
  components: {},
  mounted() {
    this.$axios(`http://${this.$store.state.id}/order/recentOrder`)
      .then(res => {
        this.list = res.data;
      })
      .catch(err => {
        throw err;
      });
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
.management {
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
    height: 68px;
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
      background-color: #ffcc00;
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
  .mentinfo {
    display: flex;
    flex-direction: column;
    div {
      background: none;
      box-shadow: none;
    }
    margin-top: 30px;
    height: 592px;
    padding: 21px 28px 0;
    font-size: 18px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 2px;
    color: #333333;
    button {
      width: 68px;
      height: 22px;
      background-color: #ffcc00;
      border-radius: 11px;
      font-size: 12px;
      letter-spacing: 1px;
      border: none;
      outline: none;
      margin-left: 19px;
    }
    select {
      float: right;

      border: none;
      option {
        font-size: 12px;

        line-height: 16px;
        letter-spacing: 1px;
        color: #333333;
      }
    }
    .listtitle {
      margin-top: 30px;
      display: flex;
      .light {
        background: #ffcc00;
      }
      span {
        flex: 1;
        text-align: center;
        &:nth-child(1) {
          span {
            display: block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 1px solid #666666;
            float: left;
          }
        }
      }
    }
    .lists {
      flex: 1;
      overflow: auto;
      margin-top: 25px;
      li {
        margin-bottom: 27px;
        display: flex;
        span {
          flex: 1;
          text-align: center;
          font-size: 12px;
          &:nth-child(1) {
            span {
              display: block;
              width: 12px;
              height: 12px;
              border-radius: 50%;
              border: 1px solid #666666;
              float: left;
            }
            .light {
              background: #ffcc00;
            }
          }
          &:nth-child(8) {
            span {
              font-size: 10px;
              line-height: 16px;
              letter-spacing: 1px;
            }
          }
        }
      }
    }
  }
}
</style>

