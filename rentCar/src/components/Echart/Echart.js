import echarts from 'echarts'
const install = function (Vue) {
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get() {
                return {
                    // 上面的饼状图
                    line1: function (id, data) {
                        let i = 0;
                        let colors = ['yellow', 'pink', 'blue', 'green'];
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        const optionData = {
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b}: {c} ({d}%)"
                            },
                            legend: {
                                orient: 'vertical',
                                x: '60%',
                                y: '40%',
                            },
                            series: [
                                {
                                    name: '今日车辆数据',
                                    type: 'pie',
                                    radius: ['45%', '70%'],
                                    // 饼图的位置
                                    center: ['30%', '55%'],
                                    avoidLabelOverlap: false,
                                    itemStyle: {
                                        normal: {
                                            color: function () {
                                                return colors[i++];
                                            },
                                            label: {
                                                show: false
                                            },
                                            labelLine: {
                                                show: false
                                            }
                                        }
                                    },
                                    label: {
                                        normal: {
                                            show: false,
                                            position: 'center'
                                        },
                                        emphasis: {
                                            show: true,
                                            textStyle: {
                                                fontSize: '14',
                                                fontWeight: 'bold'
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            show: false
                                        }
                                    },
                                    data: data
                                }
                            ]
                        }

                        this.chart.setOption(optionData);
                    },
                    // 下面的折线图
                    line2: function (id, dataX, dataY) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        const optionData = {
                            legend: {
                                data: ['金水区店', '惠济区店', '二七区店'],
                                x: 'center',
                                y: '90%'
                            },
                            grid: {
                                top: '20%',
                                left: '10%',
                                right: '15%',
                                bottom: '15%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: dataX,
                                axisLine: {
                                    lineStyle: {
                                        color: "#000"
                                    }
                                },
                                // 是否从0坐标开始
                                // boundaryGap:false,
                            },
                            yAxis: {
                                type: 'value',
                                min: 0,
                                max: 100,
                                axisLine: {
                                    lineStyle: {
                                        color: "#000"
                                    }
                                }
                            },
                            // 数据
                            series: dataY
                        };

                        this.chart.setOption(optionData);
                    },
                    // 柱形图
                    line3: function (id, dataX, dataY) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        const optionData = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                }
                            },
                            legend: {
                                data: ['二七区店', '惠济区店', '金水区店'],
                                orient: 'vertical',
                                x: '90%',
                                y: 'center',
                            },
                            grid: {
                                left: '4%',
                                right: '12%',
                                top: '20%',
                                bottom: '4%',
                                containLabel: true
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    data: dataX
                                }
                            ],
                            yAxis: [
                                {
                                    type: 'value',
                                    min: 0,
                                    max: 100
                                }
                            ],
                            series: dataY
                        }
                        this.chart.setOption(optionData);
                    }
                }
            }
        }
    })
}

export default {
    install
}