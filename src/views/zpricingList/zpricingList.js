import listTabBar from '../../components/listTabBar';
import countDown from '../../components/countDown';
// mock data
import listBarData from '../../../mock/listTabBar';

export default {
    name: 'zpricingListView',
    components: {
        listTabBar,
        countDown
    },
    data() {
        return {
            listBarData: null
        };
    },
    computed: {},
    activated() {
        this.resetHeader();
        // mock data
        this.listBarData = listBarData;
    },
    methods: {
        resetHeader() {
            this.$emit('setHeader', {
                isNavHide: true
            });
        },
        // 测试倒计时
        countDownS_cb(flag) {
            console.log(flag);
        },
        countDownE_cb(flag) {
            console.log(flag);
        }
    }
};
