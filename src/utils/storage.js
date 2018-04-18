/**
 * storage 管理
 */

const recordNav = 'VUE_NAVIGATION';
const amapInfo = 'AMAP_INFO_ADDR';

/**
 * 页面访问历史记录信息，从sessionStorage中获取
 */
export const getNavSession = () => {
    try {
        const result = JSON.parse(sessionStorage.getItem(recordNav));
        return result || [];
    } catch (err) {
        return [];
    }
};
export const setNavSession = () => {};
/**
 * 存储用为当前定位信息
 * @param {object} data
 * {
 *  addressComponent:{},
 *  position:{},
 *  formattedAddress: ''
 * }
 */
export const setPosiAddr = (data) => {
    localStorage.setItem(amapInfo, JSON.stringify(data));
};

export const getPosiAddr = () => {
    const addStr = localStorage.getItem(amapInfo);
    let result = null;
    if (addStr) {
        result = JSON.parse(addStr);
    }
    return result;
};
