export default {
    name: 'VueFooter',
    data() {
        return {
            footerConfig: {
                buyerTab: [
                    {
                        path: '/zIndex',
                        tit: '商品',
                        icon: 'goods'
                    },
                    {
                        path: '/order',
                        tit: '订单',
                        icon: 'goods'
                    },
                    {
                        path: '/center',
                        tit: '我的',
                        icon: 'center'
                    }
                ],
                sellerTab: [
                    {
                        path: '/sellerZindex',
                        tit: '商品',
                        icon: 'goods'
                    },
                    {
                        path: '/cart',
                        tit: '求购',
                        icon: 'cart'
                    },
                    {
                        path: '/sellerOrder',
                        tit: '订单',
                        icon: 'goods'
                    },
                    {
                        path: '/shopIndex',
                        tit: '店铺',
                        icon: 'shop'
                    }
                ]
            }
        };
    },
    props:['nowTab', 'nowItem'],
    computed: {
        curRoterP() {
            return this.$route.path;
        },
        isShow() {
            return !!this.nowTab;
        }
    },
    created() {},
    methods: {
        goPath(config) {
            // this.nowItem = config.item;
            if (this.curRoterP === config.path) {
                return;
            }
            this.$router.replace(config.path);
        }
    }
};
