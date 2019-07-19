<template>
  <div class="accept">
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
      <ul class="list">
        <li>
          <span>张三</span>
          <span>18336093166</span>
          <span>日租</span>
          <span>大众斯柯达</span>
          <span>2019-07-10</span>
          <span>123456784012</span>
          <span>
              <span>去结算</span>
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
              <span>去结算</span>
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
              <span>去结算</span>
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
              <span>去结算</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
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
  box-shadow: 0px 0px 12px 1px 
		rgba(21, 21, 21, 0.23);
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
           
            span{
                height: 14px;
                line-height: 14px;
                border-radius: 6px;
                font-size: 12px;
                text-align: center;
                &:nth-child(1){
                    width: 31.9%;min-width: 46px;background-color: #ffcc00;color: #333333;margin-right: 5px;
                }
               
            }
          }
        }
      }
    }
  }
}
</style>
