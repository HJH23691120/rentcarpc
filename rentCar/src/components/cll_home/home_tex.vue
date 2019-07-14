<template>
  <div class="Hometex">
    <div class="tex_top">
      <chartOne></chartOne>
      <div class="tex_top_r">
        <div class="tex_top_new">
          <h2>
            公告
            <span class="right">查看更多</span>
          </h2>
          <p>
            关于及其退押金的新流程通知
            <span class="right">2019-7-2</span>
          </p>
          <p>
            关于违章车辆处理的新标准通知
            <span class="right">2019-7-3</span>
          </p>
        </div>
        <ul>
          <li>
            <div class="bg_"></div>
            <div>
              <img src="../../assets/hometex/2-1.png" />
              <p>会员查询</p>
            </div>
          </li>
          <li>
            <div class="bg_"></div>
            <div>
              <img src="../../assets/hometex/2-2.png" />
              <p>订单查询</p>
            </div>
          </li>
          <li>
            <div class="bg_"></div>
            <div>
              <img src="../../assets/hometex/2-3.png" />
              <p>车辆查询</p>
            </div>
          </li>
          <li>
            <div class="bg_"></div>
            <div>
              <img src="../../assets/hometex/2-4.png" />
              <p>违章查询</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="tex_bottom">
      <chartTwo></chartTwo>
      <div class="tex_bottom__r">
        <h2>热门车型排名<span>本月</span></h2>
        <ul>
          <li>
            荣威550 top1 <span>10次</span>
          </li>
          <li>
            大众朗逸 <span>8次</span>
          </li>
          <li>
            荣威rex5 <span>7次</span>
          </li>
          <li>
            大众斯柯达... <span>5次</span>
          </li>
          <li>
            标致301 <span>5次</span>
          </li>
          <li>
            大众高尔夫... <span>4次</span>
          </li>
          <li>
            上汽打大通 <span>3次</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 第一个上面的图表
import chartOne from "./home_echart_top";
import chartTwo from "./home_echart_bottom";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    chartOne,
    chartTwo
  }
};
</script>

<style scoped lang="less">
.Hometex {
  padding: 23px 47px 22px 27px;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 93%;
  .tex_top {
    width: 100%;
    min-width: 800px;
    height: 100%;
    min-height: 191px;
    margin-bottom: 32px;
    display: flex;
    flex: 2;
    flex-direction: row;
    .tex_top_r {
      margin-left: 40px;
      width: 60%;
      min-width: 470px;
      .tex_top_new {
        min-height: 89px;
        height: 100px;
        background: white;
        margin-bottom: 24px;
        padding: 0 27px 0 11px;
        h2 {
          overflow: hidden;
          font-size: 18px;
          padding: 9px 0;
          font-weight: 400;
          span{
            font-size: 13px
          }
        }
        p {
          overflow: hidden;
          font-size: 13px;
          padding: 5px;
          span{
            font-size: 10px;
          }
        }
      }
      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        li {
          position: relative;
          border-radius: 8px;
          text-align: center;
          // width: 20%;
          min-width: 92px;
          min-height: 76px;
          &:nth-of-type(1) {
            background: url("../../assets/hometex/1-1.png") no-repeat 100% 100%;
          }
          &:nth-of-type(2) {
            background: url("../../assets/hometex/1-2.png") no-repeat 100% 100%;
          }
          &:nth-of-type(3) {
            background: url("../../assets/hometex/1-3.png") no-repeat 100% 100%;
          }
          &:nth-of-type(4) {
            background: url("../../assets/hometex/1-4.png") no-repeat 100% 100%;
          }
          div {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img {
            }
            p {
              color: white;
              z-index: 4;
            }
          }
          .bg_ {
            background: rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
  }
  .tex_bottom {
    flex: 6;
    width: 100%;
    min-width: 800px;
    height: 370px;
    .tex_bottom__r{
      width: 30%;
      min-width: 271px;
      height: 370px;
      background: white;
    }
  }
}
.right {
  float: right;
}
</style>
