import _ from 'lodash';

export default {
    name: 'listBarTab',
    props: ['listBarData'],
    data() {
        return {
            curTabVal: [
                {
                    key: 'firTab',
                    cur: -1,
                    selected: {
                        shop:{
                            index: -1,
                        },
                        addr:{
                            provinceInd: -1,
                            cityInd: -1
                        }
                    },
                    postVal: {
                        shopId: '',
                        provinceName: '',
                        cityName: '',
                        kilometers: ''
                    },
                    title: '所有店铺'
                },
                {
                    key: 'shelvesGoodsStatus',
                    postVal: {
                        goodsStatus: ''
                    },
                    cur: -1,
                    title: '所有状态'
                },
                {
                    key: 'pigTypeMap',
                    postVal: {
                        goodsType: ''
                    },
                    cur: -1,
                    title: '所有品类'
                }
            ],
            actTab: null
        };
    },
    created() {},
    computed: {
        listData() {
            const result = {};
            if (this.listBarData) {
                const keyList = [
                    'pigTypeMap',
                    'shelvesGoodsStatus',
                    'shopMap',
                    'address'
                ];
                const omitKey = [keyList[2], keyList[3]];
                const _result = _.extend({}, this.listBarData);
                result.firTab = {
                    shopMap: _result.shopMap,
                    address: _result.address
                };
                _.extend(result, _.omit(_result, omitKey));
            }
            return result;
        }
    },
    watch: {
        curTabVal: {
            deep: true,
            handler(newVal) {
                console.log('重新更新接口');
                console.log(newVal);
            }
        }
    },
    methods: {
        toggleDetail(actTabIndx) {
            if (this.actTab === actTabIndx || actTabIndx === -1) {
                this.actTab = null;
                return;
            }
            this.actTab = actTabIndx;
        },
        selectTabCell(config) {
            const { title, cur, tabIndex } = config;
            if (this.curTabVal[tabIndex].cur === cur) {
                this.toggleDetail(-1);
                return;
            }
            const postValKey = ['firTab', 'goodsStatus', 'goodsType'];
            const result = {
                cur,
                title,
                postVal: {}
            };
            if (tabIndex > 0) {
                result.postVal[postValKey[tabIndex]] = cur !== -1 ? cur : '';
            }
            _.extend(this.curTabVal[tabIndex], result);
            this.toggleDetail(-1);
        }
    }
};
