import Vue from 'vue';

import 'babel-polyfill';

import App from './App';
import router from './router';
import store from './store';
import prepare from './components/app/prepare';
// import addStateGL from './utils/weGLStateDom';
// add console
// import loadScript from './utils/loadScript';

// loadScript(
//     '//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/3.0.0/vconsole.min.js',
//     () => {
//         // eslint-disable-next-line
//         new VConsole();
//     }
// );

prepare(Vue);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    components: { App },
    router,
    store,
    template: '<App/>'
}).$mount('#app');

// add state
// addStateGL();
