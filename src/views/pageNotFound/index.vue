<template lang="html">
    <div class="pageNotFound">
        <p class="tip">请求的路由为：{{ routePath }}</p>
        <p class="tip">没有找到对应的页面，请检查</p>
    </div>
</template>

<script>
export default {
    computed: {
        routePath() {
            return this.$route.fullPath;
        }
    },
    activated() {
        this.resetHeader();
    },
    methods: {
        resetHeader() {
            this.$emit('setHeader', {
                title: '抱歉，该页面正在玩命修复中。。。。',
                headerLeftBtn: null
            });
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/mixins'
.pageNotFound
    font-size rem(18)
    color $fcGrey
    text-align center
    padding-top 50%
    .tip
        margin rem(10)
</style>
