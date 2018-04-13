/**
 * vue初始化之前，注入各种plugin
 * filter register
 * router use
 */

// import BaiduMap from 'vue-baidu-map';
import filter from '../../../vue/filters';
import directives from '../../../vue/directives';
import usePlugins from './usePlugin';


export default (Vue) => {
    filter(Vue);
    directives(Vue);
    usePlugins(Vue);
    // 百度地图
    // Vue.use(BaiduMap, {
    //     ak: 'g1542o1SimgGE7GDuQvsx12nNU7MagD1'
    // });
};
