<template>
    <div class="zIndezPage">
        <!-- 广告位 -->
        <div class="ad-posi">
            <div class="ad-main">
                <swiper 
                    ref="adSwiper"
                    :options="adSwiperOptions">
                    <swiper-slide
                        v-for="item in adList" 
                        :key="item.tit">
                        <img 
                            @click="clickAd(item.url)"
                        :src="item.img">
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
            </div>
        </div>
        <!-- 推荐 tab -->
        <div class="remTab">
            <div 
                v-for="(tab, index) in tabList"
                :key ="index"
                @click="clickTab(tab.moduleName)"
                class="tabItem">
                <p class="tit">{{tab.title}}</p>
                <p class="desc">{{tab.desc}}</p>
            </div>
        </div>
        <!-- 推荐猪源 -->
        <p class="recommend-tit">推荐猪源</p>
        <div class="recommend-tab">
            <div 
                @click="clickRecommend(0)"
                :class="{'cur': curRecomment === 0}"
                class="tab-item"><span class="text">离我最近</span></div>
            <div 
                @click="clickRecommend(1)"                
                :class="{'cur': curRecomment === 1}"
                class="tab-item"><span class="text">价格最低</span></div>
        </div>
        <swiper 
            ref="recommendSwiper"
            :options="recommendSwiper"
            class="recommened-main">
            <!-- 距离最近 -->
            <swiper-slide class="goods-list">
                <div 
                    v-if="distanceGoods.length"
                    v-for="(item, index) in distanceGoods"
                    :key="index"
                    class="list-item">
                    <div class="item-msg">
                        <!-- flag -->
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
                                <span class="price">{{item.price}}</span>
                                <span class="unit">{{item.unit}}</span>
                                <span class="aweight">(预估均重{{item.averageWeight}}kg)</span>
                            </div>
                            <div class="goods-flag">定价买</div>                        
                        </div>
                    </div>                    
                    <div class="posi-main">
                        <p class="posi">{{item.mapAddress}}</p>
                        <p class="far">{{item.kilometers}}km</p>
                    </div>                   
                </div>
                <goods-empty 
                    msg="暂无数据"
                    bgkey="bgBig"
                    v-if="!distanceGoods.length">
                </goods-empty>
            </swiper-slide>
            <!-- 价格最低 -->
            <swiper-slide>
                <div 
                    v-for="(item, index) in priceGoods"
                    :key="index"
                    class="list-item">
                    <div class="item-msg">
                        <!-- flag -->
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
                                <span class="price">{{item.price}}</span>
                                <span class="unit">{{item.unit}}</span>
                                <span class="aweight">(预估均重{{item.averageWeight}}kg)</span>
                            </div>
                            <div class="goods-flag">定价买</div>                        
                        </div>
                    </div>                    
                    <div class="posi-main">
                        <p class="posi">{{item.mapAddress}}</p>
                        <p class="far">{{item.kilometers}}km</p>
                    </div>                   
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script src="./zIndex.js" lang="babel"></script>
<style src="./zIndex.styl" lang="stylus"></style>

