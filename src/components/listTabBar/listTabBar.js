import _ from 'lodash';

export default {
    name: 'listBarTab',
    props: ['listBarData'],
    data() {
        return {};
    },
    created() {},
    computed: {
        listData() {
            const result = {};
            if (this.listBarData) {
                result.firTab = {
                    shopMap: this.listBarData.shopMap,
                    address: this.listBarData.address
                };
                _.extend(result, _.omit(this.listBarData, ['shopMap', 'address']));
            }

            return result;
        }
    }
};
