import VueLazyload from 'vue-lazyload';
// 路由缓存处理
import Navigation from 'vue-navigation';
import VueRecyclerviewNew from 'vue-recyclerview';
import VueAMap from 'vue-amap';

import ajax from '../../../http/ajax';
import router from '../../../router';
import store from '../../../store';
import errorImage from '../../../assets/images/goods_defaults.png';
import loadingImage from '../../../assets/images/error_img.png';

function usePlugins(Vue) {
    // 注入 router 和 store
    Vue.$router = router;
    Vue.$store = store;
    // 注入 ajax
    Vue.$ajax = ajax;
    Vue.use(VueLazyload, {
        preLoad: 1.3,
        error: errorImage,
        loading: loadingImage,
        attempt: 1
    });
    // 历史记录url
    Vue.use(Navigation, {
        router,
        store,
        moduleName: 'navigation',
        keyName: 'ZXY'
    });
    // recycle
    Vue.use(VueRecyclerviewNew);

    // amap 高徳地图初始化
    VueAMap.initAMapApiLoader({
        // key:'608d75903d29ad471362f8c58c550daf',
        key: '1aecff0a40860fe8d83848e1cc7e5b7f',
        // 这里要加载定位插件
        plugin: [
            'AMap.Autocomplete',
            'AMap.PlaceSearch',
            'AMap.Scale',
            'AMap.OverView',
            'AMap.ToolBar',
            'AMap.MapType',
            'AMap.PolyEditor',
            'AMap.CircleEditor',
            'AMap.Geolocation'
        ],
        // 默认高德 sdk 版本为 1.4.4
        v: '1.4.4'
    });
}

export default usePlugins;
