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
              <span>去结算</span><span>修改</span>
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
              <span>去结算</span><span>修改</span>
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
              <span>去结算</span><span>修改</span>
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
              <span>去结算</span><span>修改</span>
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
      span {
        font-family: MicrosoftYaHei;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;

        letter-spacing: 2px;
        color: #333333;
        text-align: center;
        display: inline-block;
        &:nth-child(1) {
          width: 48px;
          text-align: left;
        }
        &:nth-child(2) {
          width: 120px;
        }
        &:nth-child(3) {
          width: 72px;
        }
        &:nth-child(4) {
          width: 108px;
        }
        &:nth-child(5) {
          width: 106px;
        }
        &:nth-child(6) {
          width: 174px;
        }
        &:nth-child(7) {
          width: 144px;
        }
      }
    }
    .list {
      li {
            height: 38px;
          line-height: 38px;
        span {
        
        //   vertical-align: middle;
          display: inline-block;
          text-align: center;
          font-size: 12px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 16px;
          letter-spacing: 1px;
          color: #333333;
          &:nth-child(1) {
            width: 48px;
            text-align: left;
          }
          &:nth-child(2) {
            width: 120px;
          }
          &:nth-child(3) {
            width: 72px;
          }
          &:nth-child(4) {
            width: 108px;

            text-overflow: ellipsis;
            white-space: nowrap;
            // overflow: hidden;
          }
          &:nth-child(5) {
            width: 106px;
          }
          &:nth-child(6) {
            width: 174px;
          }
          &:nth-child(7) {
            width: 144px;
           
            span{
                height: 14px;
                border-radius: 6px;
                font-size: 12px;
        
                &:nth-child(1){
                    width: 46px;background-color: #ffcc00;color: #333333;margin-right: 5px;
                }
                &:nth-child(2){
                    width: 36px;background-color: #009944;color: #fff;
                }
            }
          }
        }
      }
    }
  }
}
</style>
