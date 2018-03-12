import pageTitle from '@/lang/pageTitle';

// 使用此法动态引入文件，达不到，拆分文件的效果
// const view = (name) => (resolve) => {
//     require([`@/views/${name}/index.vue`], resolve); // eslint-disable-line
// };

// 使用定义加载，这样打包到一个单独的文件,拆分，按需加载
const loginView = (resolve) => {
    require([`../views/loginView/index.vue`], resolve); // eslint-disable-line
};
const zIndexView = (resolve) => {
    require([`../views/zIndex/index.vue`], resolve); // eslint-disable-line
};
const zmapView = (resolve) => {
    require([`../views/zmap/index.vue`], resolve); // eslint-disable-line
};
const zpricingListView = (resolve) => {
    require([`../views/zpricingList/index.vue`], resolve); // eslint-disable-line
};
const testPullView = (resolve) => {
    require([`../views/testPull/index.vue`], resolve); // eslint-disable-line
};
const testPageView = (resolve) => {
    require([`../views/testPage/index.vue`], resolve); // eslint-disable-line
};
const testEchartsView = (resolve) => {
    require([`../views/testEcharts/index.vue`], resolve); // eslint-disable-line
};
const vueCodeView = (resolve) => {
    require([`../views/vueCode/index.vue`], resolve); // eslint-disable-line
};
const pageNotFoundView = (resolve) => {
    require([`../views/pageNotFound/index.vue`], resolve); // eslint-disable-line
};

const title = (page) => ({
    title: pageTitle[page]
});
// 无需访问权限要求页面
const constanRoutes = [
    // {
    //     path: '/login',
    //     name: 'loginView',
    //     meta: {
    //         title: title('loginView')
    //     },
    //     // component: view('loginView')
    //     component: loginView
    // },
    {
        path: '/',
        name: 'testPage',
        meta: {
            title: title('testPage')
        },
        // component: view('testPage')
        component: testPageView
    },
    {
        path: '/test-pull',
        name: 'testPull',
        meta: {
            title: title('testPull')
        },
        // component: view('testPull')
        component: testPullView
    },
    {
        path: '/test-echarts',
        name: 'testEcharts',
        meta: {
            title: title('testEcharts')
        },
        // component: view('testEcharts')
        component: testEchartsView
    },
    {
        path: '/vue-code',
        name: 'vueCode',
        meta: title('vueCode'),
        // component: view('vueCode')
        component: vueCodeView
    },
    // ------【八戒通】s
    {
        path: '/zIndex',
        name: 'zIndex',
        meta: {
            title: title('zIndex')
        },
        // component: view('zIndex')
        component: zIndexView
    },

    {
        path: '/zmap',
        name: 'zmapView',
        meta: {
            title: title('zmap')
        },
        // component: view('zIndex')
        component: zmapView
    },
    {
        path: '/zpricing-list',
        name: 'zpricingListView',
        meta: {
            title: title('zpricingList')
        },
        // component: view('zpricingList')
        component: zpricingListView
    },
    // ------【八戒通】e
    {
        // 404 正则匹配(最好写在最后)
        path: '*',
        name: 'pageNotFound',
        meta: {
            title: title('pageNotFound')
        },
        // component: view('pageNotFound')
        component: pageNotFoundView
    }
];

// 按照权限访问
const asyncRoutes = [
    {
        path: '/login',
        name: 'loginView',
        meta: {
            title: title('loginView'),
            permission: ['buyer', 'saller']
        },
        // component: view('loginView')
        component: loginView
    }
];
export { constanRoutes, asyncRoutes };
