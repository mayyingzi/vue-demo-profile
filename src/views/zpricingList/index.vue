<template>
    <div class="pricingList">
        <!-- tab bar -->
        <list-tab-bar
            class="inFixed"
            :listBarData="listBarData"
        ></list-tab-bar>
        <!-- main -->
        <div class="main-list">
            <!-- listItme -->
            <item-temp
                v-for ="(item, ind) in listPricing"
                :item = "item"
                :key ="ind"
            ></item-temp>
        </div>
    </div>
</template>

<script src="./zpricingList.js" lang=""babel></script>
<style  src="./zpricingList.styl" lang="stylus" scoped></style>

