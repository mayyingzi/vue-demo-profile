<template>
    <div class="zmapPage">
        <div class="curPosi">
            当前选择的位置：{{address}} 
        </div>
        <baidu-map
            class="map-con"
            ak="g1542o1SimgGE7GDuQvsx12nNU7MagD1"
            :center="position"
            :zoom="zoom"
            @ready="mapHandler"
        >
            <!-- 地图view视图 -->
            <bm-view class="map-view"></bm-view>
            <!-- 当前位置marker -->
            <bm-marker
                :position="position"
                :draggable="false"
            ></bm-marker>
        </baidu-map>
    </div>
</template>

<script>
import { BaiduMap, BmView, BmMarker } from 'vue-baidu-map';

export default {
    name: 'zmapView',
    components: {
        BaiduMap,
        BmView,
        BmMarker
    },
    data() {
        return {
            title: '测试地图组件',
            //  地图核心类
            BMap: null,
            // 地图实例
            map: null,
            // 地图search实例
            Geocoder: null,
            position: {
                lng: 116.404,
                lat: 39.915
            },
            address: '',
            zoom: 16
        };
    },
    methods: {
        mapHandler({ BMap, map }) {
            this.map = map;
            this.BMap = BMap;
            this.Geocoder = new BMap.Geocoder();
            const curAddr = new BMap.LocalCity();
            // const curGeo = new BMap.Geolocation();
            curAddr.get((result) => {
                this.position = result.center;
                this.map.centerAndZoom(
                    new this.BMap.Point(this.position.lng, this.position.lat),
                    this.zoom
                );
                // 根据地址经纬度，获取地址
                this.Geocoder.getLocation(this.position, (addrStr) => {
                    this.address = addrStr.address;
                });
            });
            // 初始化中心点
            this.map.centerAndZoom(
                new this.BMap.Point(this.position.lng, this.position.lat),
                this.zoom
            );
            // // 浏览器获取当前定位信息
            // curGeo.getCurrentPosition((geoOpts) => {
            //     console.log(geoOpts);
            // });
        }
    }
};
</script>

<style lang="stylus">
@import '../../assets/styles/mixins'
.zmapPage
    font-size rem(28)
    .curPosi
        width 80%
        margin rem(20) auto
        border 1px solid #f60
        color #f60
        padding rem(30) rem(10)
    .map-con
        position relative
        width 100%
        padding-top 130%
    .map-view
        width 100%
        height 100%
        position absolute
        left 0
        top 0
.anchorBL
    display none
</style>

