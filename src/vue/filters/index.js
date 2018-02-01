/**
 * vue 过滤器：格式化信息统计，大于99显示‘...’
 * @param {number|string} value
 * @returns {number|string}
 */
export const parseNumPoint = (value) => {
    const pNum = Number(value);
    if (!pNum) {
        return pNum;
    }
    let result = `${pNum || 0}`;
    if (pNum > 99) {
        result = '...';
    }
    return result;
};
/**
 * vue 过滤器：格式化信息统计，大于99显示‘99+’
 * @param {string|number} value
 * @returns {number|string}
 */
const parseNum = (value) => {
    const pNum = Number(value);
    if (!pNum) {
        return pNum;
    }
    let result = `${pNum || 0}`;
    if (pNum > 99) {
        result = '99+';
    }
    return result;
};

/**
 * 注册过滤器 *
 * @param {Vue} Vue
 */
const registFilter = (Vue) => {
    Vue.filter('parseNumPoint', parseNumPoint);
    Vue.filter('parseNum', parseNum);
};

export default registFilter;
