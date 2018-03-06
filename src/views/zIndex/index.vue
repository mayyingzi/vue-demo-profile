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
            <!-- 距离最近、最低价格 -->
            <swiper-slide class="goods-list" v-for="value in ['distanceGoods', 'priceGoods']" :key="value">
                <item-temp class="list-item"
                    v-if="goodsList[value].trading && goodsList[value].trading.length"
                    v-for="(item, index) in goodsList[value].trading"
                    :key="index"
                    :item="item" 
                    :isTabItem="true"></item-temp>
                
                <goods-empty 
                    msg="暂无最近距离的数据"
                    bgkey="bgBig"
                    v-if="(goodsList[value].trading &&!goodsList[value].trading.length) || !goodsList[value].trading">
                </goods-empty>
            </swiper-slide>            
        </swiper>
        <div class="goods-finished" v-if="curFinishedGoods">
            <p class="recommend-tit">近期完成交易</p>
            <item-temp class="list-item"                
                v-for="(item, index) in curFinishedGoods"
                :key="index"
                :item="item" 
                :isTabItem="false"></item-temp>
        </div>
    </div>
</template>

<script src="./zIndex.js" lang="babel"></script>
<style src="./zIndex.styl" lang="stylus" scoped></style>

