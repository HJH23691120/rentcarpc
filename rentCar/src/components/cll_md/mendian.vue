<template>
  <div class="mendian">
    <div id="chart3"></div>
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
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: "惠济区店",
          type: "bar",
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: "金水区店",
          type: "bar",
          data: [220, 182, 191, 234, 290, 330, 310]
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
    padding: 23px 36px 0  40px;
    box-sizing: border-box; 
  #chart3 {
    width: 850px;
    height: 272px;
    background: white;
  }
}
</style>
