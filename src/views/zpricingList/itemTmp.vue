<template>
    <div class="wrap">
        <div class="info">
            <img v-lazy="item.imageUrl" class="goods-img">
            <div class="message">
                <p class="tit">{{item.goodsName}}</p>
                <div class="de-price">
                    <p class="price">{{item.price}}<span class="unit">{{item.unit}}</span></p>
                    <p class="far-way"><span class="flag-or">控料</span>
                        <span v-if="Number(item.kilometers)>0 && Number(item.kilometers)< 100" class="flag-gra">100公里以内</span>
                        <span v-else-if="Number(item.kilometers>99) && Number(item.kilometers)< 150" class="flag-gra">150公里以内</span>
                        <span v-else-if="Number(item.kilometers>149) && Number(item.kilometers)< 200" class="flag-gra">200公里以内</span>
                        <span v-else class="flag-gra">200公里以上</span>
                    </p>
                </div>
                <p class="average-weight">预估均重：{{item.averageWeight}}kg</p>

            </div>
            <span class="follow-icon">关注</span>
        </div>
        <p :class="['firm', item.shopType === 'ENTERPRISE' ? 'enterprise': '']">{{item.shopName}}</p>       
        <p class="addr">{{item.mapAddress}}</p>
        <p class="goods-count">店铺累计售出：{{item.saledNumber}}<span class="less-num">剩余：{{item.surplusNumber}}头</span></p>
        <div class="count-msg">
            <div class="msg-lf" v-if="item.status==='BEFORE_AUCTION'">
                <span v-if="item.startTime>(new Date().getTime()+(2*86400000))">开拍时间：{{item.startTime | parseTime}}</span>
                <div class="msg-lf" v-else>距开始：
                    <count-down class="count-box"
                        :startTime="new Date().getTime()" 
                        :endTime="new Date().getTime() + item.countDownTime" 
                        @end_callback = "endCountTimeFn"
                        :noDay = true                        
                        :hourTxt="'：'" 
                        :minutesTxt="'：'" 
                        :secondsTxt="''"></count-down>
                </div> 
            </div>
            <div class="msg-lf" v-else-if="item.status==='COMPLETE'">结束时间：{{item.endTime |  parseTime}}</div>
            <div class="msg-lf" v-else>距结束：
                <count-down class="count-box"
                    :startTime="new Date().getTime()" 
                    :endTime="new Date().getTime() + item.countDownTime"
                    @end_callback = "endCountTimeFn"
                    :noDay = true
                    :hourTxt="':'" 
                    :minutesTxt="':'" 
                    :secondsTxt="''"></count-down>
            </div>
            
            <div class="msg-rt">
                <div
                    v-if="item.status=='IN_TRADING' && item.canOrder && item.surplusNumber > 0"
                     class="btn orange">立即抢猪</div>
                <div 
                    v-else
                    class="btn disabled">{{item.status=="BEFORE_AUCTION" ? "未开拍" :(item.status=="COMPLETE"?(item.surplusNumber==0?"已抢完":"已结束"):(item.surplusNumber==0?"已抢完":"立即抢购"))}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import countDown from '../../components/countDown';

export default {
    name: 'itemTmp',
    props: ['item'],
    components: {
        countDown
    },
    methods: {
        goDetial(config) {
            console.log(`点击进入详情${config}`);
        },
        endCountTimeFn() {
            // console.log('倒计时结束');
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
    font-size rem(24)
    color #999
    line-height 1.5em
    .info
        display flex
        padding-bottom rem(20)
        .follow-icon
            position absolute
            top 0
            right 0
            padding-top rem(30)
            padding-right rem(30)
            padding-left rem(32)
            font-size rem(24)
            color #888
            background url('../../assets/images/icon_follow_normal.png') no-repeat left bottom
            background-size rem(24) auto
            transition all 0.3s
            line-height 1.0em
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
            .de-price
                display flex
                flex-wrap wrap
                padding-top rem(8)
                .price
                    flex 1
                    font-size rem(42) 
                    color #f60                   
                    .unit
                        font-size rem(26)
                        color #666
                        padding-left rem(5)
                .far-way
                    flex 1
                    min-width rem(240)
                    padding-left rem(10)
                    text-align right 
                    font-size rem(22)
                    color #FAAC01
                    .flag-or,.flag-gra
                        border rem(1) solid #FAB704
                        border-radius rem(4)
                        display inline-block
                        padding 0 rem(6)
                        margin-left rem(6)
                        line-height 1.1em
                    .flag-gra
                        color #989A9C
                        border-color #B4BAC1
            .average-weight
                padding-top rem(4)
    .firm
        &.enterprise
            padding-left rem(38)
            background url('../../assets/images/company.png') no-repeat left center
            background-size rem(34) auto
    .less-num
        color #FA4848
        padding-left rem(30)
        display inline-block
    .count-msg
        border-top rem(1) dashed #CFCFCF
        padding-top rem(20)
        margin-top rem(16)
        display flex
        .msg-lf
            flex 1
        .msg-rt
            min-width rem(250)
            text-align left
    .msg-lf
        display flex
        color #FA4848
        height rem(56)
        line-height rem(56)
    .msg-rt
        .btn
            height rem(52)
            width rem(242)
            display block
            text-align center
            box-sizing border-box
            border-radius rem(10)
            line-height rem(52)
            font-size rem(26)
            color #fff
            &.disabled
                background-color #ccc
            &.orange
                background-image: linear-gradient(90deg,#FF9000 0,#FF5000 98%);
                
</style>

<style lang="stylus">
@import '../../assets/styles/mixins.styl'

.count-box
    color #CB917F
    font-size rem(32) 
    i
        font-style: normal;           
    span
        height rem(52)
        width rem(52)
        margin rem(4)
        text-align center
        color #fff
        background-color #CB917F
        border-radius rem(8)
        display inline-block
</style>

