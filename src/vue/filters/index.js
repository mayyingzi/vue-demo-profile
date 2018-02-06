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
export const parseNum = (value) => {
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
 * 数字单位换算
 *
 * @param {string|number} value
 * @returns {string}
 */
const parseNumUnit = (value) => {
    value = parseFloat(value);
    if (!value) {
        return '0';
    }
    const unitPer = 10000;
    const sizes = ['', '万', '亿', '兆', '京', '垓'];
    const _value = Math.log(value);
    const _unitPer = Math.log(unitPer);
    const powL = Math.floor(_value / _unitPer);
    const power = unitPer ** powL;
    // return `${(value / Math.pow(unitPer, powL)).toPrecision(4)}${sizes[powL]}`;
    return `${(value / power).toPrecision(4)}${sizes[powL]}`;
};
/**
 * 数字转换为金额
 * @param {string|number} value
 * @param {boolean} abs
 * @returns {string}
 */
const parseMoney = (value, abs) => {
    value = parseFloat(value);
    if (isNaN(value)) {
        return '0.00';
    }
    value = value.toString().replace(/\$|,/g, '');
    if (!value) {
        return '0.00';
    }
    let sign = value === (value = Math.abs(value));
    const regPert = /\B(?=(\d{3})+\b)/g;
    sign = abs ? true : sign;
    const _value = value * 100;
    value = Math.floor(_value + 0.50000000001);
    let cents = value % 100;

    value = Math.floor(value / 100).toString();
    if (cents < 10) {
        cents = `0${cents}`;
    }
    value = value.replace(regPert, ',');
    return `${sign ? '' : '-'}${value}.${cents}`;
};
/**
 * 注册过滤器 *
 * @param {Vue} Vue
 */
const registFilter = (Vue) => {
    Vue.filter('parseNumPoint', parseNumPoint);
    Vue.filter('parseNum', parseNum);
    Vue.filter('parseMoney', parseMoney);
    Vue.filter('parseNumUnit', parseNumUnit);
};

export default registFilter;
