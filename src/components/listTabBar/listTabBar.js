import _ from 'lodash';

export default {
    name: 'listBarTab',
    props: ['listBarData'],
    data() {
        const cashAddrSub = {
            key: 'firTab',
            selected: {
                shop: {
                    index: -1
                },
                addr: {
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
        };
        return {
            cashAddrSub,
            listKil:[50, 100, 150, 200],
            curTabVal: [
                {
                    ...cashAddrSub
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
            actTab: null,
            // true位置，false所有店铺
            curPosi: true
        };
    },
    created() {},
    computed: {
        listData() {
            const result = {
                firTab: {
                    shopMap: null,
                    address: null
                }
            };
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
        },
        changePosi(isCurPosi) {
            if (this.isCurPosi === this.curPosi) {
                return;
            }
            this.curPosi = isCurPosi;
        },
        changeShopId(shopItem) {
            this.curTabVal[0].selected.shop.index = shopItem.key;
            this.curTabVal[0].title = shopItem.value;
            this.curTabVal[0].postVal.shopId = shopItem.key > -1 ? shopItem.key : '';
            this.toggleDetail(-1);
        },
        changeAddrSub(addrPItem) {
            console.log('修改地址信息');
            console.log(addrPItem);
            // const result = {
            //     key: 'firTab',
            //     selected: {
            //         addr: {
            //             provinceInd: addrPItem.index,
            //             cityInd: -1
            //         }
            //     },
            //     postVal: {
            //         provinceName: addrPItem.index > 0 ? addrPItem.value : '',
            //         cityName: ''
            //     },
            //     title: '所有店铺'
            // };
        }
    }
};
