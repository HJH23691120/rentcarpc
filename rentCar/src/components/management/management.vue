<template>
  <div class="management">
    <div class="header">
      <div>
        <span>
          <img src="./../../assets/search/search.png" />
        </span>
        <input type="text" placeholder="输入驾驶员姓名/手机号" v-model="phone" />
      </div>
      <button @click="query">订单查询</button>
    </div>
    <div class="mentinfo">
      <header>
        近期订单
        <button>已逾期</button>
        <select>
          <option value disabled selected hidden>批量操作</option>
          <option value="受理">受理</option>
          <option value="删除">删除</option>
        </select>
      </header>
      <div class="listtitle">
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
      <ul class="lists">
        <li>
          <span>
            <span></span>姓名
          </span>
          <span>手机号</span>
          <span>租赁方式</span>
          <span>车型</span>
          <span>取车时间</span>
          <span>还车时间</span>
          <span>订单状态</span>
          <span><span>受理</span><span>删除</span></span>
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: ""
    };
  },
  methods: {
    query() {
      console.log("我要查询");
    }
  },
  components: {}
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
    .lists{
      margin-top: 25px;
     li{
       margin-bottom: 27px;
      display: flex;
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
        &:nth-child(8){
          span{
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

