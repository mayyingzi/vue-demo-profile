<template>
    <div class="wrap">
        <div class="info">
            <img v-lazy="item.imageUrl" class="goods-img">
            <div class="message">
                <p class="tit">{{item.goodsName}}</p>
                <div class="detail">

                </div>
            </div>
            <span class="follow-icon">关注</span>
        </div>        
    </div>
</template>

<script>
export default {
    name: 'itemTmp',
    props: ['item'],
    methods: {
        goDetial(config) {
            console.log(`点击进入详情${config}`);
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/mixins.styl'

.wrap
    display flex
    position relative
    box-sizing border-box
    padding rem(30)
    border-bottom rem(1) solid #d3d3d3
    flex-direction column
    .info
        display flex
        .follow-icon
            position absolute
            top 0
            right 0
            padding-top rem(30)
            padding-right rem(30)
            padding-left rem(32)
            font-size rem(24)
            color #888
            background url(../../assets/images/icon_follow_normal.png) no-repeat left bottom 
            background-size rem(24) auto
            transition all .3s
        .goods-img
            display block
            width rem(140)
            height rem(140)
        .message
            flex 1
            box-sizing border-box
            padding-left rem(20)
            .tit
                padding-right rem(120)
                padding-bottom rem(5)
                font-size rem(30)
                color #000
                line-height 1.2em
            .detail
                display flex
            
</style>
