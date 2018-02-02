<template lang="html">
    <div class="loginView">
        登录页面
        <div class="go-third" @click="goThird">
            进入第三层页面，处理缓存机制
        </div>
        <div class="demo-ajax" @click ="testClickA">测试接口数据请求</div>
        <div class="demo-ajax" @click ="testPutM">测试put接口</div>
        <div class="demo-ajax" @click ="testPostM">测试post接口</div>
        <!-- 帮助文档 -->
        <alert :message="alertOpts.message"
            :buttons="alertOpts.buttons"
            :left-btn="alertOpts.leftBtn"
            :right-btn="alertOpts.rightBtn"
            :single-btn="alertOpts.singleBtn" />
    </div> 
    </div>
</template>
<script src='./login.js' lang='babel'></script>
<style src='./login.styl' lang='stylus' scoped></style>

