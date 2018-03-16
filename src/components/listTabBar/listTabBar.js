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
        const listKil = [50, 100, 150, 200];
        return {
            cashAddrSub:{
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
            },
            listKil,
            curPosiSub: listKil,
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
                    address: []
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
        },
        curCityList() {
            let result = [];
            if (this.cashAddrSub.selected.addr.provinceInd > -1) {
                const _index = this.cashAddrSub.selected.addr.provinceInd;
                const curProv = this.listData.firTab.address[_index];
                result = JSON.parse(JSON.stringify(curProv));
                const topProv = {
                    name: curProv.name,
                    sub: true
                };
                result.sub.unshift(topProv);
            }
            return result.sub;
        }
    },
    watch: {
        curTabVal: {
            deep: true,
            handler() {
                this.refresh();
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
            _.extend(this.cashAddrSub, JSON.parse(JSON.stringify(this.curTabVal[0])));
        },
        selectTabCell(config) {
            const {
                title,
                cur,
                tabIndex
            } = config;
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
            const result = this.cashAddrSub;
            if (addrPItem.index === result.selected.addr.provinceInd) {
                return;
            }
            result.selected.addr.provinceInd = addrPItem.index;
            result.selected.addr.cityInd = '';
            result.postVal.kilometers = '';
            result.postVal.provinceName = addrPItem.value;
            result.postVal.cityName = '';
            _.extend(this.cashAddrSub, result);
        },
        subChangeSure(config) {
            const result = this.cashAddrSub;
            if (config.subInd !== result.selected.addr.cityInd) {
                result.title = config.title;
                if (config.type === 'long') {
                    result.selected.addr.cityInd = config.subInd > -1 ? `long${config.subInd}` : config.subInd;
                    result.postVal.cityName = '';
                    result.postVal.kilometers = config.subValue;
                }
                if (config.type === 'city') {
                    result.postVal.cityName = config.subInd > 0 ? config.subValue : '';
                    result.selected.addr.cityInd = config.subInd;
                }
                _.extend(this.cashAddrSub, result);
                _.extend(this.curTabVal[0], JSON.parse(JSON.stringify(result)));
            }
            this.toggleDetail(-1);
        },
        refresh() {
            console.log(this.curTabVal);
            const postData = {};
            _.each(this.curTabVal, (tabItem) => {
                _.extend(postData, tabItem.postVal);
            });
            console.log(postData);
        }
    }
};
