<template>
    <div 
        @click="goDerict(item.shelvesId)">
        <div class="item-msg">
            <img
                v-if="item.picUrl"
                :src="item.picUrl" 
                class="item-img">
            <div
                v-else                        
                class="item-default-img">
            </div>
            <div class="item-right">
                <p class="goods-name">{{item.goodsName}}</p>
                <div class="desc">
                    <span v-if="!isTabItem">成交价</span>
                    <span class="price">{{item.price?item.price:'议价'}}</span>
                    <span class="unit">{{item.unit}}</span>
                    <span class="aweight">(预估均重{{item.averageWeight}}kg)</span>
                </div>
                <div 
                    v-if="item.modelCode==='TRADEMODEL000001'"
                    class="goods-flag">定价买</div>
                <div 
                    v-else-if="item.modelCode==='TRADEMODEL000002'"
                    class="goods-flag flag-02">竞价买</div>
                <div 
                    v-else
                    class="goods-flag flag-03">求购</div>                          
            </div>
        </div>                    
        <div class="posi-main" v-if="isTabItem">
            <p class="posi">{{item.mapAddress}}</p>
            <p class="far">{{item.kilometers}}km</p>
        </div>
        <div class="time-msg" v-else>
            <p class="saller-name">卖家：{{item.salerName}}</p>
            <p class="time">结束时间：{{item.endTime,'hh:ms:mm' | parseTime}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'itemTemp',
    props: ['isTabItem', 'item'],
    methods: {
        goDerict(config) {
            console.log(config);
        }
    }
};
</script>
<style lang="stylus" scoped>
@import '../../assets/styles/mixins.styl'

.item-msg
    display flex
    width 100%
.item-img, .item-default-img
    width rem(88)
    height rem(88)
.item-default-img
    display block
    background #fff url('../../assets/images/goods_defaults.png') no-repeat center center
    background-size 100%
.item-right
    flex 1
    padding-left rem(20)
    position relative
.goods-name
    font-size rem(34)
    color #000
    padding-right rem(110)
    line-height 1.2em
.desc
    font-size rem(24)
    color #2a2a2a
    line-height 1.6em
    .price
        color #f60
        font-size rem(42)
    .unit
        color #666
    .aweight
        padding-left rem(10)
.goods-flag
    position absolute
    right rem(-30)
    top 0
    font-size rem(22)
    line-height rem(40)
    background #fff url('../../assets/images/order-type_djm.png') no-repeat center center
    background-size 100%
    height rem(40)
    width rem(146)
    box-sizing border-box
    padding-left rem(56)
    color #fff
    text-align left
    &.flag-02
        background-image url('../../assets/images/order-type_jjm.png')
    &.flag-03
        background-image url('../../assets/images/order-type_qg.png')
.posi-main,.time-msg
    display flex
    padding-top rem(16)
    font-size rem(26)
    color #999
    .posi
        padding-left rem(35)
        background url('../../assets/images/icon_position.png') no-repeat left center
        background-size rem(21) rem(25)
        box-sizing border-box
        width rem(485)
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        margin-right rem(20)
    .far,.time
        flex 1
        text-align right
.time-msg
    margin-top rem(16)
    padding-top rem(20)
    border-top rem(1) dashed #e5e5ee
    color #6d6d72
</style>

