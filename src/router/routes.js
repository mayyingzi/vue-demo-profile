import pageTitle from '@/lang/pageTitle';

const view = (name) => (resolve) => {
    require([`@/views/${name}/index.vue`], resolve); // eslint-disable-line
};

const title = (page) => ({
    title: pageTitle[page]
});

export default [
    {
        path: '*',
        name: 'pageNotFound',
        meta: title('pageNotFound'),
        component: view('pageNotFound')
    },
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
    }
];
