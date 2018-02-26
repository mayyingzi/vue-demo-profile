import pageTitle from '@/lang/pageTitle';

const view = (name) => (resolve) => {
    require([`@/views/${name}/index.vue`], resolve); // eslint-disable-line
};

const title = (page) => ({
    title: pageTitle[page]
});

export default [
    {
        path: '/login',
        name: 'loginView',
        meta: title('loginView'),
        component: view('loginView')
    },
    {
        path: '/',
        name: 'testPage',
        meta: title('testPage'),
        component: view('testPage')
    },
    {
        path: '/test-pull',
        name: 'testPull',
        meta: title('testPull'),
        component: view('testPull')
    },
    {
        path: '/test-echarts',
        name: 'testEcharts',
        meta: title('testEcharts'),
        component: view('testEcharts')
    },
    {
        path: '/vue-code',
        name: 'vueCode',
        meta: title('vueCode'),
        component: view('vueCode')
    },
    {
        // 404 正则匹配(最好写在最后)
        path: '*',
        name: 'pageNotFound',
        meta: title('pageNotFound'),
        component: view('pageNotFound')
    }
];
