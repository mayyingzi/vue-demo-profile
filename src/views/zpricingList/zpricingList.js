import Vue from 'vue';
import _ from 'lodash';
import { lazyAMapApiLoaderInstance } from 'vue-amap';
import listTabBar from '../../components/listTabBar';
import countDown from '../../components/countDown';
import itemTemp from './itemTmp';
import { setPosiAddr, getPosiAddr } from '../../utils/storage';
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
            listPricing: [],
            amapAddr: {}
        };
    },
    computed: {},
    activated() {
        this.resetPage();
        // mock data
        this.listBarData = listBarData;
        // this.listPricing = listPricing.data.shelvesGoodsList;
        this.fetchGoodsList();
        this.getPosition();
    },
    watch: {
        amapAddr: {
            handler() {
                // this.fetchGoodsList();
            },
            deep: true
        }
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
        async fetchGoodsList() {
            const params = {
                page: 1,
                modelCode: 'TRADEMODEL000001',
                lng: 104.06792346,
                lat: 30.67994285
            };
            console.log(this.amapAddr);
            if (this.amapAddr && this.amapAddr.position) {
                params.lng = this.amapAddr.position.lng;
                params.lat = this.amapAddr.position.lat;
            }
            const res = await Vue.$ajax.get('goodsList', { ...params });
            this.listPricing = res.shelvesGoodsList;
            console.log(res);
        },
        getPosition() {
            const cashAddr = getPosiAddr();
            if (!cashAddr) {
                lazyAMapApiLoaderInstance.load().then(() => {
                    const geolocation = new AMap.Geolocation({
                        enableHighAccuracy: true,
                        timeout: 6000
                    });
                    geolocation.getCurrentPosition((status, result) => {
                        if (status === 'complete') {
                            const saveAddr = _.pick(result, [
                                'addressComponent',
                                'position',
                                'formattedAddress'
                            ]);
                            setPosiAddr(saveAddr);
                            this.amapAddr = saveAddr;
                            console.log(result);
                        } else {
                            console.log(result, '定位失败');
                        }
                    });
                });
            } else {
                console.log('从缓存中获取地址');
                console.log(cashAddr);
                this.amapAddr = cashAddr;
            }
        }
    }
};
