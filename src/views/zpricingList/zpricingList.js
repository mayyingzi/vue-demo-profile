import Vue from 'vue';
import _ from 'lodash';
import MeScroll from 'vue-mescroll/mescroll.vue';
import { lazyAMapApiLoaderInstance } from 'vue-amap';
import listTabBar from '../../components/listTabBar';
import countDown from '../../components/countDown';
import itemTemp from './itemTmp';
import { setPosiAddr, getPosiAddr } from '../../utils/storage';
// mock data
import listBarData from '../../../mock/listTabBar';
import { setTimeout } from 'timers';
// import listPricing from '../../../mock/listPricing';

export default {
    name: 'zpricingListView',
    components: {
        listTabBar,
        countDown,
        itemTemp,
        MeScroll
    },
    data() {
        return {
            listBarData: null,
            listPricing: [],
            amapAddr: {},
            imescroll: null,
            canScro: true
        };
    },
    computed: {},
    mounted() {
        this.imescroll = this.$refs.imescroll.instance;
    },
    activated() {
        this.resetPage();
        // mock data
        this.listBarData = listBarData;
        // this.listPricing = listPricing.data.shelvesGoodsList;
        this.getPosition();
    },
    watch: {
        amapAddr: {
            handler() {
                this.imescroll.triggerDownScroll();
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
        async fetchGoodsList(isRefresh, page) {
            const params = {
                page: 1,
                modelCode: 'TRADEMODEL000001',
                lng: 104.06792346,
                lat: 30.67994285
            };
            if (this.amapAddr && this.amapAddr.position) {
                params.lng = this.amapAddr.position.lng;
                params.lat = this.amapAddr.position.lat;
            }
            if (page) {
                params.page = page.num;
            }
            const res = await Vue.$ajax.get('goodsList', {
                ...params
            });
            if (isRefresh) {
                this.listPricing = res.shelvesGoodsList;
                this.imescroll.endSuccess();
            } else {
                const nowDate = this.listPricing;

                this.listPricing = nowDate.concat(res.shelvesGoodsList);
                this.imescroll.endSuccess(res.shelvesGoodsList.length, true);
            }
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
        },
        allScrollBack() {
            console.log(
                '统一回调（配置 opt-up 时，为上拉回调，下拉失效;配置 opt-down 时，为下拉回调，上拉失效;均不配置不生效）'
            );
        },
        upCallBack(page) {
            console.log('上滑加载更多');
            console.log(page);
            this.fetchGoodsList(false, page);
        },
        downCallBack() {
            console.log('刷新');
            // mescroll.resetUpScroll();
            this.fetchGoodsList(true);
        }
    }
};
