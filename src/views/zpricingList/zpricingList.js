import listTabBar from '../../components/listTabBar';
import countDown from '../../components/countDown';
import itemTemp from './itemTmp';
// mock data
import listBarData from '../../../mock/listTabBar';
import listPricing from '../../../mock/listPricing';

export default {
    name: 'zpricingListView',
    components: {
        listTabBar,
        countDown,
        itemTemp
    },
    data() {
        return {
            listBarData: null,
            listPricing: []
        };
    },
    computed: {},
    activated() {
        this.resetPage();
        // mock data
        this.listBarData = listBarData;
        this.listPricing = listPricing.data.shelvesGoodsList;
    },
    methods: {
        resetPage() {
            this.$emit('setHeader', {
                isNavHide: true
            });

            this.$emit('setFooter', {
                nowTab: false
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
