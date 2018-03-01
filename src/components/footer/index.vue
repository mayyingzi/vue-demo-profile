<!-- 买家 footer页面 -->
<template lang="html">
    <div class="footer componet-footer" v-show="isShow">
        <div class="ft-main">
            <div 
                @click="goPath({item:'/zIndex', path:'/zIndex'})"
                :class="{actived: nowItem === '/zIndex'}"
                class="ft-item">
                <div class="ft-icon goods-icon"></div>
                <p class="tit">商品</p>
            </div>
            <!-- <div 
                 @click="goPath({item:'/cart', path:'/cart'})"
                :class="{actived: nowItem === '/cart'}"
                class="ft-item">
                <div class="ft-icon cart-icon"></div>
                <p class="tit">求购</p>
            </div> -->
            <div
                @click="goPath({item:'/order', path:'/order'})"
                :class="{actived: nowItem === '/order'}" 
                class="ft-item">
                <div class="ft-icon order-icon"></div>
                <p class="tit">订单</p>
            </div>
            <div 
                @click="goPath({item:'/center', path:'/center'})"
                :class="{actived: nowItem === '/center'}"
                class="ft-item">
                <div class="ft-icon center-icon"></div>
                <p class="tit">我的</p>
            </div>
        </div>
    </div>
</template>

<script src="./footer.js" lang="babel"></script>
<style src="./footer.styl" lang="stylus" scoped></style>
