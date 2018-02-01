<template lang="html">
    <div class="testPage">
        <div class="test-go-derict">
            <p class="go-item" @click="goDirect('/login')" >跳转登录页面</p>
        </div>
        <p class="test-tit">组件demo测试</p>
        <div class="test-compentent">
            <p class="item-i" @click="cshowAlert">显示弹窗</p>
            <p class="item-i" @click="cshowToast">显示toast</p>
            <p class="item-i" @click="cshowLoading">显示loading</p>
            <p class="item-i">过滤器过99的数据显示为：{{100 | parseNumPoint}}</p>
            <p class="item-i">过滤器过99的数据显示为：{{100 | parseNum}}</p>
            
        </div>
        <i class="test-arrow">测试箭头</i>
        <loading v-if="loading" :text="loadingText" />

        <toast :message="toastMsg" />
        <alert :message="alertOpts.message"
            :buttons="alertOpts.buttons"
            :left-btn="alertOpts.leftBtn"
            :right-btn="alertOpts.rightBtn"
            :single-btn="alertOpts.singleBtn" />
    </div>  
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        loading: require('@/components/Loading'),
        toast: require('@/components/Toast'),
        alert: require('@/components/Alert')
    },
    data() {
        return {
            error: {
                msg: '测试吧',
                buttons: 2,
                leftBtn: {
                    text: '取消',
                    handler: 'close'
                },
                rightBtn: {
                    text: '确定',
                    handler: 'unbindWx'
                }
            },
            loading: false,
            loadingText: '加载中'
        };
    },
    computed: {
        ...mapGetters(['toastMsg', 'alertOpts'])
    },
    activated() {
        console.log('组件已激活：此处作为页面的初始化数据更新');
    },
    mounted() {
        console.log('创建成功');
    },
    methods: {
        ...mapActions(['alert', 'toast']),
        cshowAlert() {
            this.alert({ message: this.error.msg, ...this.error });
        },
        cshowToast() {
            this.toast('测试显示toast');
        },
        cshowLoading() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 1000);
        },
        goDirect(path) {
            this.alert({
                message: path,
                singleBtn: {
                    text: '确认跳转',
                    handler: 'redirect',
                    params: {
                        url: path
                    }
                }
            });
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/mixins'

.testPage
    font-size rem(28)
    color $fcGrey
    text-align center
    .test-tit
        margin-bottom rem(112)
        padding-top rem(40)
    .item-i
        font-size rem(32)
        color #ff4d6a
        border 1px solid #cccccc
        text-align center
        padding rem(20) 0
        width 80%
        border-radius 10px
        margin 0 auto rem(20)
    .test-arrow
        font-size rem(24)
        line-height 1.2em;
        display block
        font-size rem(20)
        font-style normal
        width 80%
        padding rem(20)
        margin 0 auto
        arrowGreyUp(0.2,0.2)
        retinaBorder(false, false, false, true)
    .test-go-derict
        padding rem(10)
        display flex
        align-items center
        .go-item
            flex 1
            line-height 1.2em
            retinaBorder(true, true, true, true)
            padding rem(20)
            
</style>
