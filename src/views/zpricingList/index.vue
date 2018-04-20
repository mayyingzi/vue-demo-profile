<template>
    <div class="pricingList" id ="imescroll">
        <!-- tab bar -->
        <list-tab-bar
            class="inFixed"
            :listBarData="listBarData"
        ></list-tab-bar>
        <!-- main -->
        <div class="main-list">
            <me-scroll
                ref="imescroll"
                :id="'imescroll'"
                :opt-up="{
                    isBounce: false,
                    page: {
                        num: 1,
                        size: 10
                    }
                }"
                :opt-down="{
                    auto: false
                }"
                :callback="allScrollBack"
                :up-callback="upCallBack"
                :down-callback="downCallBack"
                >
                <!-- listItme -->
                <item-temp
                    v-for ="(item, ind) in listPricing"
                    :item = "item"
                    :key ="ind"
                ></item-temp>
            </me-scroll>
        </div>

    </div>
</template>

<script src="./zpricingList.js" lang=""babel></script>
<style  src="./zpricingList.styl" lang="stylus" scoped></style>

