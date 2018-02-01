import { mapGetters, mapActions } from 'vuex';
import Vue from 'vue';

export default {
    name: 'loginView',

    // data() {
    //     return {
    //         customAlert: {
    //             buttons: 2,
    //             leftBtn: {
    //                 text: 'zhidao',
    //                 handler: 'close',
    //             },
    //             rightBtn: {
    //                 text: 'wo zoule',
    //                 handler: 'goBack',
    //             },
    //         },
    //     };
    // },
    beforeRouteEnter(to, from, next) {
        console.log('-----------测试路由进入---s');
        console.log(to);
        console.log('-----------测试路由进入---e');
        next();
    },
    computed: {
        ...mapGetters(['alert'])
    },
    methods: {
        ...mapActions(['alert']),
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
        async testPutM(){
            const res = await Vue.$ajax.put('testPutMethod', {
                id: '测试PUT'
            })
        },
        async testPostM(){
            const res = await Vue.$ajax.post('testPostMethod', {
                id: '测试post'
            })
        },
        
        async testClickA() {
            try {
                const res = await this.fetchLogin();
                console.log(res)
                
                console.log('数据执行完成')
            } catch (error) {
                console.log(error);
            }
        }
    },
    async mounted() {
        try {
            const res = await this.fetchLogin();
            console.log(res)
            
            console.log('数据执行完成')
        } catch (error) {
            console.log(error);
        }
    }
};
