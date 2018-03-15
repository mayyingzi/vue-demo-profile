import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import goodsEmpty from '../../components/goodsEmpty';
import itemTemp from './itemTmp.vue';
// mock
import mockData from '../../../mock/zIndexData';

export default {
    name: 'zIndex',
    components: {
        swiper,
        swiperSlide,
        goodsEmpty,
        itemTemp
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
                    img: 'http://jbz.pigsales.cn/static/img/ban2_58a3876.png'
                },
                {
                    tit: '生猪市场',
                    url: 'some 生猪市场 url',
                    img: 'http://jbz.pigsales.cn/static/img/ban6_9fd0f9a.png'
                },
                {
                    tit: '豪猪好卖',
                    url: 'some 豪猪好卖 url',
                    img: 'http://jbz.pigsales.cn/static/img/ban1_0ebdca2.png'
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
            goodsList:{
                distanceGoods: {},
                priceGoods: {},
            }
        };
    },
    computed:{
        curFinishedGoods() {
            if (!this.curRecomment) {
                return this.goodsList.distanceGoods.traded;
            }
            return this.goodsList.priceGoods.traded;
        }
    },
    activated() {
        this.resetHeader();
        // mock data
        setTimeout(() => {
            this.goodsList.distanceGoods = mockData.distanceGoods;
            this.goodsList.priceGoods = mockData.priceGoods;
        }, 3000);
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
