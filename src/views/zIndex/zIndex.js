import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import goodsEmpty from '../../components/goodsEmpty';

export default {
    name: 'zIndex',
    components: {
        swiper,
        swiperSlide,
        goodsEmpty
    },
    data() {
        const _vm = this;
        return {
            title: '八戒通',
            adSwiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                },
                autoplay: true,
                loop: true
            },
            recommendSwiper: {
                on: {
                    slideChangeTransitionEnd() {
                        _vm.curRecomment = this.activeIndex;
                    }
                }
            },
            adList: [
                {
                    tit: '发布求购单',
                    url: 'some 发布求购单 url',
                    img: '//jbz.pigsales.cn/static/img/ban2_58a3876.png'
                },
                {
                    tit: '生猪市场',
                    url: 'some 生猪市场 url',
                    img: '//jbz.pigsales.cn/static/img/ban6_9fd0f9a.png'
                },
                {
                    tit: '豪猪好卖',
                    url: 'some 豪猪好卖 url',
                    img: '//jbz.pigsales.cn/static/img/ban1_0ebdca2.png'
                }
            ],
            tabList: [
                {
                    icon: '',
                    moduleName: 'pricing',
                    title: '定价买猪',
                    desc: '一拍即得'
                },
                {
                    icon: '',
                    moduleName: 'auction',
                    title: '竞价买猪',
                    desc: '低价抢拍'
                },
                {
                    icon: '',
                    moduleName: 'offer',
                    title: '求购',
                    desc: '猪源上门'
                }
            ],
            curRecomment: 0,
            distanceGoods: [
                {
                    goodsName: '外二元肥猪 这个名字超长，显示应该是怎样的',
                    averageWeight: '133',
                    price: 11.6,
                    unit: '元/kg',
                    modelCode: 'TRADEMODEL000001',
                    mapAddress: '四川省德阳市中江县桂竹路',
                    kilometers: '86',
                    picUrl:
                        'http://img.pigkeeping.cn/berkshireapi/201802/6d95d371-f70a-4986-8c37-bd3eee546d47.jpg',
                    shelvesId: 2832,
                    priceDesc: '11.60',
                    endTime: 1519815600000,
                    salerName: '徐伟',
                    weightDesc: null,
                    discussFlag: false,
                    selfPrice: true,
                    imageId: 6314,
                    modelId: 1
                },
                {
                    goodsName: '外三元肥猪',
                    averageWeight: '120',
                    price: 11.2,
                    unit: '元/kg',
                    modelCode: 'TRADEMODEL000001',
                    mapAddress: '陕西省咸阳市杨陵区杨扶路',
                    kilometers: '545',
                    picUrl: null,
                    shelvesId: 2835,
                    priceDesc: '11.20',
                    endTime: 1519830000000,
                    salerName: '张常青',
                    weightDesc: null,
                    discussFlag: false,
                    selfPrice: true,
                    imageId: null,
                    modelId: 1
                },
                {
                    goodsName: '外三元肥猪',
                    averageWeight: '120',
                    price: 11.2,
                    unit: '元/kg',
                    modelCode: 'TRADEMODEL000001',
                    mapAddress: '陕西省咸阳市杨陵区揉谷产业路',
                    kilometers: '545',
                    picUrl: null,
                    shelvesId: 2836,
                    priceDesc: '11.20',
                    endTime: 1519830000000,
                    salerName: '张常青',
                    weightDesc: null,
                    discussFlag: false,
                    selfPrice: true,
                    imageId: null,
                    modelId: 1
                }
            ],
            priceGoods: [
                {
                    goodsName: '外三元肥猪',
                    averageWeight: '120',
                    price: 11.2,
                    unit: '元/kg',
                    modelCode: 'TRADEMODEL000001',
                    mapAddress: '陕西省咸阳市杨陵区杨扶路',
                    kilometers: '545',
                    picUrl: null,
                    shelvesId: 2835,
                    priceDesc: '11.20',
                    endTime: 1519830000000,
                    salerName: '张常青',
                    weightDesc: null,
                    discussFlag: false,
                    selfPrice: true,
                    imageId: null,
                    modelId: 1
                },
                {
                    goodsName: '外三元肥猪',
                    averageWeight: '120',
                    price: 11.2,
                    unit: '元/kg',
                    modelCode: 'TRADEMODEL000001',
                    mapAddress: '陕西省咸阳市杨陵区揉谷产业路',
                    kilometers: '545',
                    picUrl: null,
                    shelvesId: 2836,
                    priceDesc: '11.20',
                    endTime: 1519830000000,
                    salerName: '张常青',
                    weightDesc: null,
                    discussFlag: false,
                    selfPrice: true,
                    imageId: null,
                    modelId: 1
                },
                {
                    goodsName: '外二元肥猪',
                    averageWeight: '133',
                    price: 11.6,
                    unit: '元/kg',
                    modelCode: 'TRADEMODEL000001',
                    mapAddress: '四川省德阳市中江县桂竹路',
                    kilometers: '86',
                    picUrl:
                        'http://img.pigkeeping.cn/berkshireapi/201802/6d95d371-f70a-4986-8c37-bd3eee546d47.jpg',
                    shelvesId: 2832,
                    priceDesc: '11.60',
                    endTime: 1519815600000,
                    salerName: '徐伟',
                    weightDesc: null,
                    discussFlag: false,
                    selfPrice: true,
                    imageId: 6314,
                    modelId: 1
                }
            ],
        };
    },
    activated() {
        this.resetHeader();
        this.distanceGoods = [];
    },
    methods: {
        resetHeader() {
            this.$emit('setHeader', {
                isNavHide: true
            });
        },
        clickAd(url) {
            console.log(`跳转当前广告链接：${url}`);
        },
        clickTab(module) {
            console.log(`跳转到tab对应的模块：${module}`);
        },
        clickRecommend(index) {
            if (index === this.curRecomment) {
                return;
            }
            this.curRecomment = index;
            this.$refs.recommendSwiper.swiper.slideTo(index);
        }
    }
};
