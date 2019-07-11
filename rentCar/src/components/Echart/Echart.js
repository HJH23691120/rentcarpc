import echarts from 'echarts'
const install = function (Vue) {
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get() {
                return {
                    //画一条简单的线
                    line1: function (id, data) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        const optionData = {
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: data,
                                // data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line',
                                smooth: true
                            }]
                        };

                        this.chart.setOption(optionData);
                    },
                    line2: function (id, data) {
                        let i =0;
                        let colors = ['red','green','blue','pink','yellow'];
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        const optionData = {
                            tooltip: {
                                trigger: 'item',
                                formatter: " <br/>{b}: {c} ({d}%)"
                            },
                            legend: {
                                orient: 'vertical',
                                x: 'right',
                                y: 'center',
                                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                            },
                            series: [
                                {
                                    name: '访问来源',
                                    type: 'pie',
                                    radius: ['50%', '70%'],
                                    avoidLabelOverlap: false,
                                    itemStyle : {  
                                        normal : {  
                                            color:function(){
                                                return colors[i++];  
                                            },
                                            label : {  
                                                show : false  
                                            },  
                                            labelLine : {  
                                                show : false  
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
                                                fontSize: '10',
                                                fontWeight: 'bold'
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            show: false
                                        }
                                    },
                                    data: [
                                        { value: 335, name: '直接访问' },
                                        { value: 310, name: '邮件营销' },
                                        { value: 234, name: '联盟广告' },
                                        { value: 135, name: '视频广告' },
                                        { value: 1548, name: '搜索引擎' }
                                    ]
                                }
                            ]
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