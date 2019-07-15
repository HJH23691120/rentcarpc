<template>
  <div class="accept">
    <div class="accepttop">
      <span>已结算订单</span>
      <div class="date">
        <div class="block">
          <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>—
          <el-date-picker v-model="value2" type="date" placeholder="选择日期"></el-date-picker>
          <span @click="data">筛选</span>
        </div>
      </div>
    </div>
    <div class="acceptlist">
      <header>
        <span>姓名</span>
        <span>订单号</span>
        <span>租赁类型</span>
        <span>车号</span>
        <span>退款金额</span>
        <span>退款时间</span>
        <span>退款人</span>
      </header>
      <ul class="list" @click="open($event)">
        <li>
          <span>张三</span>
          <span>18336093166</span>
          <span>日租</span>
          <span>豫A 12345</span>
          <span>222元</span>
          <span>2019-7-10</span>
          <span>员工1</span>
        </li>
        <li>
          <span>张三</span>
          <span>18336093166</span>
          <span>日租</span>
          <span>豫A 12345</span>
          <span>222元</span>
          <span>2019-7-10</span>
          <span>员工1</span>
        </li>
        <li>
          <span>张三</span>
          <span>18336093166</span>
          <span>日租</span>
          <span>豫A 12345</span>
          <span>222元</span>
          <span>2019-7-10</span>
          <span>员工1</span>
        </li>
        <li>
          <span>张三</span>
          <span>18336093166</span>
          <span>日租</span>
          <span>豫A 12345</span>
          <span>222元</span>
          <span>2019-7-10</span>
          <span>员工1</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      value1: "",
      value2: "",
      clearedshow:false
    };
  },

  methods: {
    data() {
      console.log("我是用来提交时间的");
    },
    open(e) {
    

   
      console.log(e.target)
        //防止父元素ul也触发事件
        console.log(1);
        if (e.target.parentNode.localName == "li") {
          this.clearedshow = true;
          console.log(2);
          this.$store.commit("open", this.clearedshow);
       
       
      };
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
  .accepttop {
    margin: 37px 28px 0 28px;
    font-family: MicrosoftYaHei;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 16px;
    letter-spacing: 2px;
    color: #333333;
    .date {
      float: right;
      .block {
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 1px;
        color: #333333;
        .el-date-editor.el-input {
          width: 87px;
        }
        .el-input--prefix/deep/.el-input__inner {
          width: 87px;
          height: 24px;
          padding: 0;
          background-color: #fbf5e0;
          border-radius: 0;
        }
        .el-date-editor/deep/.el-input__icon::before {
          display: none;
        }
      }
    }
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
        }
      }
    }
  }
}
</style>
