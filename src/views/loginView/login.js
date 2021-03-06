import { mapGetters, mapActions } from 'vuex';
import Vue from 'vue';
import eventBus from '../../utils/eventBus';
import { HEADER_RIGHT_CLICK } from '../../utils/eventBus';
import alert from '@/components/Alert';

const headerRightBtn = {
    template: '<p class="small" @click="showAggr">帮助文档</p>',
    methods: {
        showAggr() {
            eventBus.$emit(HEADER_RIGHT_CLICK, '点击右侧参数设置');
        }
    }
};

export default {
    name: 'loginView',
    // TODO: test todo
    // FIXME: 已经修复
    components: {
        // alert: require('@/components/Alert')
        alert
    },
    data() {
        return {
            loginTime: [
                {
                    time: '2018-2-5',
                    txt: '设置文案2-5'
                },
                {
                    time: '2018-2-4',
                    txt: '设置文案2-4'
                },
                {
                    time: '2018-2-3',
                    txt: '设置文案2-3'
                },
                {
                    time: '2018-2-2',
                    txt: '设置文案2-2'
                }
            ]
            // customAlert: {
            //     buttons: 2,
            //     leftBtn: {
            //         text: 'zhidao',
            //         handler: 'close',
            //     },
            //     rightBtn: {
            //         text: 'wo zoule',
            //         handler: 'goBack',
            //     },
            // },
        };
    },
    beforeRouteEnter(to, from, next) {
        next();
    },
    activated() {
        this.restHeader();
    },
    beforeDestroy() {
        eventBus.$off(HEADER_RIGHT_CLICK);
    },
    computed: {
        ...mapGetters(['alertOpts'])
    },
    methods: {
        ...mapActions(['alert']),
        // reset header
        restHeader() {
            this.$emit('setHeader', {
                title: '请登录',
                headerRightBtn
            });
            eventBus.$on(HEADER_RIGHT_CLICK, (param) => {
                console.log(param);
                this.alert({
                    message: `<p style="color:#ff4d6a">${param}</p>`
                });
            });
        },
        goThird() {
            console.log('进入首页');
            this.$router.replace('/');
            this.$navigation.cleanRoutes();
        },
        fetchLogin() {
            return Vue.$ajax.get('userCenter', {
                openId: '12356'
            });
        },
        async testPutM() {
            const res = await Vue.$ajax.put('testPutMethod', {
                id: '测试PUT'
            });
        },
        async testPostM() {
            const res = await Vue.$ajax.post('testPostMethod', {
                id: '测试post'
            });
        },

        async getGoodsList() {
            const res = await Vue.$ajax.get('goodsList', {
                page: 1,
                modelCode: 'TRADEMODEL000001',
                lng: '104.06792346',
                lat: '30.67994285',
                _: '1523840857972'
            });
            console.log(res);
        },

        async testClickA() {
            try {
                const res = await this.fetchLogin();
                console.log(res);

                console.log('数据执行完成');
            } catch (error) {
                console.log(error);
            }
        }
    },
    async mounted() {
        try {
            const res = await this.fetchLogin();
            console.log(res);

            console.log('数据执行完成');
        } catch (error) {
            console.log(error);
        }
    }
};
