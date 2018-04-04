// import Vue from 'vue';
import { asyncRoutes } from '../routes';

let hasPermission = false;

export default (router) => {
    router.onReady(() => {
        console.log('测试 路由已经准备好了');
         // 根据权限动态添加路由
        if (!hasPermission) {
            router.addRoutes(asyncRoutes);
            hasPermission = true;
        }
    });
};
