import Echarts from 'vue-echarts/components/ECharts';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
// bar
import 'echarts/lib/chart/bar';
// pie
import 'echarts/lib/chart/pie';

export default {
    name: 'testEcharts',
    components: {
        chart: Echarts
    },
    data() {
        const barItems = ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'];
        return {
            title: 'Echarts Demo',
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
            pie: {
                title: {
                    text: '饼图数据示例'
                }
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
