<template>
  <div id="chart1">
    <!-- <div ></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      topData: [
        { value: 10, name: "代取车辆："+10 },
        { value: 23, name: "在租车辆："+23 },
        { value: 9,  name: "逾期未还："+9 },
        { value: 58, name: "为租车辆："+58 }
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

<style scoped>
#chart1 {
  min-width: 342px;
  width: 38%;
  height: 100%;
  min-height: 191px;
  background: white;
}
</style>
