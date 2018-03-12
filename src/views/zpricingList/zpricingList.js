import listTabBar from '../../components/listTabBar';
// mock data
import listBarData from '../../../mock/listTabBar';

export default {
    name: 'zpricingListView',
    components: {
        listTabBar
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
        }
    }
};
