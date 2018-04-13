import VueLazyload from 'vue-lazyload';
// 路由缓存处理
import Navigation from 'vue-navigation';
import VueRecyclerviewNew from 'vue-recyclerview';

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
    Vue.use(Navigation, {
        router,
        store,
        moduleName: 'navigation',
        keyName: 'ZXY'
    });
    Vue.use(VueRecyclerviewNew);
}

export default usePlugins;
