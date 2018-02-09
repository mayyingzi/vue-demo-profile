import Echarts from 'vue-echarts/components/ECharts';

export default {
    name: 'testEcharts',
    components: {
        echart: Echarts
    },
    data() {
        return {
            title: 'Echarts Demo'
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
