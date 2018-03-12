import Vue from 'vue';
// import VuexRouterSync from 'vuex-router-sync';
// 路由缓存处理
import Navigation from 'vue-navigation';
import 'babel-polyfill';
import VueRecyclerviewNew from 'vue-recyclerview';

import App from './App';
import router from './router';
import store from './store';
import ajax from './http/ajax';
import prepare from './components/app/prepare';
// import addStateGL from './utils/weGLStateDom';

prepare(Vue);
Vue.config.productionTip = false;

// VuexRouterSync.sync(store, router);
Vue.use(Navigation, {
    router,
    store,
    moduleName: 'navigation',
    keyName: 'ZXY'
});

Vue.use(VueRecyclerviewNew);

// 注入 router 和 store
Vue.$router = router;
Vue.$store = store;
// 注入 ajax
Vue.$ajax = ajax;

/* eslint-disable no-new */
new Vue({
    components: { App },
    router,
    store,
    template: '<App/>'
}).$mount('#app');

// add state
// addStateGL();
