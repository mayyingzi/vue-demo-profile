<template lang="html">
    <div class="testPull">
        <pull-to 
            :bottom-load-method="loadmore"
            :bottom-block-height = "90"
            :bottom-config = "BOTTOM_DEFAULT_CONFIG"
            @bottom-state-change="bStateChange"
            @top-state-change="stateChange"
            :top-config = "TOP_DEFAULT_CONFIG"
            :top-block-height = "90"
            :top-load-method="refresh">
            <!-- vue 2.5 use slot-scope -->
            <template slot="top-block" slot-scope="props">
                <div class="top-load-wrapper">
                    <svg class="icon"
                        :class="{
                            'icon-arrow': props.state === 'trigger',
                            'icon-loading': props.state === 'loading'
                        }"
                        aria-hidden="true">
                    <use :xlink:href="iconLink"></use>
                    </svg>
                    {{ props.stateText }}
                </div>
            </template>
            <ul class="show-main">
                <li class="item" v-for="item in dataList">
                    <div class="item-wrap">
                        <div class="goods-img">
                            <img :src="item.img_url">
                        </div>
                        <p class="tit">{{item.goods_title}}</p>
                    </div>                    
                </li>
            </ul>
            <!-- 底部 -->
            <!-- vue 2.5 use slot-scope -->
            <template slot="bottom-block" slot-scope="props">
                <div class="bottom-load-wrapper">
                    <svg class="icon"
                        :class="{
                            'icon-arrow': props.state === 'trigger',
                            'icon-loading': props.state === 'loading'
                        }"
                        aria-hidden="true">
                    <use :xlink:href="iconLink"></use>
                    </svg>
                    {{ props.stateText }}
                </div>
            </template>

        </pull-to>
    </div>
</template>

<script>
import Vue from 'vue';
import PullTo from 'vue-pull-to';

export default {
    components: {
        PullTo
    },
    data() {
        return {
            page: 0,
            hasMore: true,
            pageCount: 0,
            dataList: [],
            iconLink: '',
            TOP_DEFAULT_CONFIG: {
                pullText: '下拉刷新', // The text is displayed when you pull down
                triggerText: '释放更新', // The text that appears when the trigger distance is pulled down
                loadingText: '加载中...', // The text in the load
                doneText: '加载完成', // Load the finished text
                failText: '加载失败', // Load failed text
                loadedStayTime: 400, // Time to stay after loading ms
                stayDistance: 90, // Trigger the distance after the refresh
                triggerDistance: 70 // Pull down the trigger to trigger the distance
            },
            BOTTOM_DEFAULT_CONFIG: {
                pullText: '上拉加载',
                triggerText: '释放加载更多',
                loadingText: '加载中...',
                doneText: '加载完成',
                failText: '加载失败',
                loadedStayTime: 400,
                stayDistance: 90,
                triggerDistance: 70
            }
        };
    },
    async activated() {
        this.resetHeader();
        const res = await this.fetchData(true);
        this.dataList = this.dataList.concat(res.goods_list);
    },
    methods: {
        resetHeader() {
            this.$emit('setHeader', {
                title: '无线滚动'
            });
        },
        async loadmore(loaded) {
            const res = await this.fetchData(false);
            this.dataList = this.dataList.concat(res.goods_list);
            loaded('done');
        },
        bStateChange(state) {
            if (state === 'pull' || state === 'trigger') {
                this.iconLink = '#icon-arrow-bottom';
            } else if (state === 'loading') {
                this.iconLink = '#icon-loading';
            } else if (state === 'loaded-done') {
                this.iconLink = '#icon-finish';
            }
        },
        async refresh(loaded) {
            this.page = 1;
            const res = await this.fetchData(true);
            this.dataList = res.goods_list;
            loaded('done');
        },
        stateChange(state) {
            if (state === 'pull' || state === 'trigger') {
                this.iconLink = '#icon-arrow-bottom';
            } else if (state === 'loading') {
                this.iconLink = '#icon-loading';
            } else if (state === 'loaded-done') {
                this.iconLink = '#icon-finish';
            }
        },
        fetchData(isFresh) {
            if (isFresh) {
                this.page = 1;
            } else {
                this.page++;
            }
            return Vue.$ajax.get('goodsList', {
                page: this.page
            });
        }
    }
};
require('../../assets/styles/icon/iconfont');
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/mixins'
.testPull
    font-size rem(28)
    box-sizing border-box
    overflow hidden
    .show-main
        display flex
        flex-wrap wrap
        padding-left rem(10)
        padding-right rem(10)
        .item
            width 50%
            box-sizing border-box
            padding-left rem(10)
            padding-right rem(10)
            padding-bottom rem(20)
            .item-wrap
                border 1px solid #ccc
                padding-bottom rem(10)
            .goods-img
                position relative
                width 100%
                padding-top 100%
                overflow hidden
                margin-bottom rem(10)
                img
                    display block
                    width 100%
                    position absolute
                    top 0
                    left 0
            .tit
                font-size rem(24)
                height rem(56)
                color #666
                line-height 1.2em
                padding 0 rem(10)
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 2
                -webkit-box-orient vertical
</style>
