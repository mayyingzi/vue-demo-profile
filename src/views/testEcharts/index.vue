<template lang="html">
    <div class="testEcharts">
        <div class="per-part">
            <div class="item-tit">
                bar
            </div>
            <div class="item-main bar-main">
                <chart
                    :options="bar"
                    ref="bar"
                    auto-resize
                />
            </div>
        </div>

        <div class="per-part">
            <div class="item-tit">
                pie
            </div>
            <div class="item-main bar-main">
                <chart
                    :options="pie"
                    ref="pie"
                    auto-resize
                />
            </div>
        </div>

        <div class="per-part">
            <div class="item-tit">
                line
            </div>
            <div class="item-main bar-main">
                <chart
                    :options="line"
                    ref="pie"
                    auto-resize
                />
            </div>
        </div>

    </div>
</template>

<script src="./echarts.js" lang="babel"></script>
<style src="./echarts.styl" lang="stylus" scoped></style>

