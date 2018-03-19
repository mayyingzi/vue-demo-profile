<template>
    <div class="pricingList">
        <!-- tab bar -->
        <list-tab-bar
            :listBarData="listBarData"
        ></list-tab-bar>
        <div class="">
            list data detail
            <p>测试倒计时</p>
            <count-down 
                v-on:start_callback="countDownS_cb(1)" 
                v-on:end_callback="countDownE_cb(1)" 
                :currentTime="1481450106" 
                :startTime="1481450110" 
                :endTime="1481450116" 
                :tipText="'距离开始文字'" 
                :tipTextEnd="'距离结束文字'" 
                :endText="'活动结束'" 
                :dayTxt="'天'" 
                :hourTxt="'小时'" 
                :minutesTxt="'分钟'" 
                :secondsTxt="'秒'"></count-down>
        </div>
    </div>
</template>

<script src="./zpricingList.js" lang=""babel></script>
<style  src="./zpricingList.styl" lang="stylus" scoped></style>

