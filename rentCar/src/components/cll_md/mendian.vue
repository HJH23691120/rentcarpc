<template>
  <div class="mendian">
    <div class="chart3">
      <div id="chart3"></div>
      <p>近一周各店租车量</p>
    </div>
    <ul>
      <li>
        <div class="bg_"></div>
        <div>
          <h2>金水区店</h2>
          <p>
            待取车辆：
            <span>10</span>量
          </p>
          <p>
            再租车辆：
            <span>12</span>量
          </p>
          <p>
            逾期未还车辆：
            <span>12</span>量
          </p>
          <p>
            未租车辆：
            <span>66</span>量
          </p>
        </div>
      </li>
      <li>
        <div class="bg_"></div>
        <div>
          <h2>惠济区店</h2>
          <p>
            待取车辆：
            <span>10</span>量
          </p>
          <p>
            再租车辆：
            <span>12</span>量
          </p>
          <p>
            逾期未还车辆：
            <span>&nbsp;9</span>量
          </p>
          <p>
            未租车辆：
            <span>69</span>量
          </p>
        </div>
      </li>
      <li>
        <div class="bg_"></div>
        <div>
          <h2>二七区店</h2>
          <p>
            待取车辆：
            <span>10</span>量
          </p>
          <p>
            再租车辆：
            <span>12</span>量
          </p>
          <p>
            逾期未还车辆：
            <span>12</span>量
          </p>
          <p>
            未租车辆：
            <span>66</span>量
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataX: ["7.3", "7.4", "7.5", "7.6", "7.7", "7.8", "7.9"],
      dataY: [
        {
          name: "二七区店",
          type: "bar",
          data: [55, 20, 10, 30, 10, 60, 10],
          barWidth: 15,
          color: "skyblue"
        },
        {
          name: "惠济区店",
          type: "bar",
          data: [45, 45, 25, 55, 25, 20, 40],
          barWidth: 15,
          color: "red"
        },
        {
          name: "金水区店",
          type: "bar",
          data: [30, 40, 35, 30, 30, 30, 32],
          barWidth: 15,
          color: "green"
        }
      ]
    };
  },
  mounted() {
    this.$chart.line3("chart3", this.dataX, this.dataY);
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.mendian {
  padding: 23px 36px 0 40px;
  box-sizing: border-box;
  .chart3 {
    position: relative;
    p{
      position: absolute;
      top: 10px;
      left: 40px;
      font-size: 19px;
    }
    #chart3 {
      width: 100%;
      box-sizing: border-box;
      min-width: 850px;
      height: 272px;
      background: white;
    }
  }
  ul {
    margin-top: 42px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li {
      position: relative;
      width: 272px;
      min-width: 260px;
      height: 236px;
      box-sizing: border-box;
      color: white;
      &:nth-of-type(1) {
        background: url("../../assets/mendian/c-1.png") repeat-x;
      }
      &:nth-of-type(2) {
        background: url("../../assets/mendian/c-2.png") repeat-x;
      }
      &:nth-of-type(3) {
        background: url("../../assets/mendian/c-3.png") repeat-x;
      }
      .bg_ {
        background: rgba(0, 0, 0, 0.2);
      }
      div {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        h2 {
          text-align: center;
          padding: 33px 0 13px 0;
          box-sizing: border-box;
          font-size: 18px;
        }
        p {
          font-size: 14px;
          text-align: right;
          padding: 8px 68px 8px 0;
        }
      }
    }
  }
}
</style>
