<template>
    <div 
        :class="bgkey"
        class="goodsEmpty">
        <div class="text" v-html="msg"></div>
    </div>
</template>

<script>
export default {
    name: 'goodsEmpty',
    props: ['msg', 'bgkey']
};
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/mixins.styl'

.goodsEmpty
    background url('../../assets/images/icon_sleep.png') no-repeat center rem(40)
    background-size rem(121) rem(108)
    width 100
    box-sizing border-box
    padding-top rem(180)
    padding-bottom rem(20)
    color #5F514F
    font-size rem(26)
    &.bgBig
        background-image url('../../assets/images/icon_sleep_bigger.png')
        background-size rem(272) rem(228)
        padding-top rem(360)
    .text
        text-align center
</style>
