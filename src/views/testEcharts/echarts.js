import Echarts from 'vue-echarts/components/ECharts';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
// bar
import 'echarts/lib/chart/bar';
// pie
import 'echarts/lib/chart/pie';
// line
import 'echarts/lib/chart/line';

export default {
    name: 'testEcharts',
    components: {
        chart: Echarts
    },
    data() {
        const barItems = ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'];
        return {
            title: 'Echarts Demo',
            // 柱状条线图
            bar: {
                title: {
                    text: '异步加载数据bar'
                },
                tooltip: {},
                legend: {
                    data: ['销量']
                },
                xAxis: {
                    data: barItems,
                    name: '分类'
                },
                yAxis: {
                    axisLabel: {
                        show: true
                    },
                    name: '销量'
                },
                series: [
                    {
                        type: 'bar',
                        name: '销量',
                        data: barItems.map(() =>
                            Math.floor(Math.random() * 40 + 10)
                        )
                    }
                ]
            },
            // 饼状图
            pie: {
                title: {
                    text: '饼图数据示例',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a}<br />{b}:{c}({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: [
                        '直接访问',
                        '邮件营销',
                        '联盟广告',
                        '视频广告',
                        '搜索引擎'
                    ]
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            { value: 335, name: '直接访问' },
                            { value: 310, name: '邮件营销' },
                            { value: 234, name: '联盟广告' },
                            { value: 135, name: '视频广告' },
                            { value: 1548, name: '搜索引擎' }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            },
            // 折线图
            line: {
                // 标题设置
                title: {
                    text: '未来一周气温变化',
                    subtext: '纯属虚构'
                },
                // 浮动提示信息
                tooltip: {
                    trigger: 'axis'
                },
                // 图例组件
                legend: {
                    data: ['最高气温', '最低气温']
                },
                // 是否显示拖拽图标
                calculabel: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: [
                            '周一',
                            '周二',
                            '周三',
                            '周四',
                            '周五',
                            '周六',
                            '周日'
                        ]
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}℃'
                        }
                    }
                ],
                series: [
                    {
                        name: '最高气温',
                        type: 'line',
                        data: [11, 11, 15, 13, 12, 12, 10],
                        markPoint: {
                            data: [
                                {
                                    type: 'max',
                                    name: '最大值'
                                },
                                {
                                    type: 'min',
                                    name: '最小值'
                                }
                            ]
                        },
                        markLine: {
                            data: [
                                {
                                    type: 'average',
                                    name: '平均值'
                                }
                            ]
                        }
                    },
                    {
                        name: '最低气温',
                        type: 'line',
                        data: [-1, 2, -2, 5, 3, 0, 2],
                        markPoint: {
                            data: [
                                {
                                    name: '周最低',
                                    value: -2,
                                    xAxis: 1,
                                    yAxis: -1.5
                                }
                            ]
                        },
                        markLine: {
                            data: [
                                {
                                    type: 'average',
                                    name: '平均值'
                                }
                            ]
                        }
                    }
                ]
            }
        };
    },
    activated() {
        this.resetHeader();
    },
    methods: {
        resetHeader() {
            this.$emit('setHeader', {
                title: this.title
            });
        }
    }
};
