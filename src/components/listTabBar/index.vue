<template>
    <div class="barMain">
        <div class="bar">
            <div class="item" 
                v-for="(value, index) in ['1', '2', '3']"
                :class="{'actived':index===0}"
                :key="value">
                <p class="text">所有店铺</p>
            </div>
        </div>
        <div class="bgCover"></div>
    </div>
</template>

<script src="./listTabBar.js" lang="babel"></script>
<style src="./listTabBar.styl" lang="stylus" scoped></style>
