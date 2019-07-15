<template>
  <div class="chart1">
    <div id="chart1"></div>
    <p>
      今日车辆数据
      <span class="right">查看更多</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topData: [
        { value: 10, name: "代取车辆：" + 10 },
        { value: 23, name: "在租车辆：" + 23 },
        { value: 9, name: "逾期未还：" + 9 },
        { value: 58, name: "为租车辆：" + 58 }
      ]
    };
  },
  mounted() {
    this.$chart.line1("chart1", this.topData);
    // this.$chart.line2('chart1');
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.chart1 {
  position: relative;
  p {
    position: absolute;
    top: 10px;
    left: 20px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    padding: 0 40px 0 10px;
    overflow: hidden;
    font-size: 19px;
    line-height: 19px;
    .right {
      font-size: 13px;
      float: right;
    }
  }
  #chart1 {
    min-width: 342px;
    width: 38%;
    height: 100%;
    min-height: 191px;
    background: white;
  }
}
</style>
