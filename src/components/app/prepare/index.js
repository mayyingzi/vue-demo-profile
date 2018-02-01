/**
 * vue初始化之前，注入各种plugin
 * filter register
 * router use
 */

import filter from '../../../vue/filters';

export default (Vue) => {
    filter(Vue);
};
