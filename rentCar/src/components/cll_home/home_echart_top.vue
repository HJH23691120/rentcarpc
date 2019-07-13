<template>
  <div>
     
      <div id="chart1"></div>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  mounted(){
    //   this.$chart.line1('chart1',[820, 932, 901, 934, 1290, 1330, 1320]);
      this.$chart.line2('chart1');
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>
#chart1{
    width: 342px;
    height: 191px;
}
</style>
