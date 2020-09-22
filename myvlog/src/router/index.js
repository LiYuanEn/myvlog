const routes = [
    {
        path:'*',
        redirect: '/home'
    },
    {
        path:'/home',
        name:'Home',
        component: resolve => require(['../pages/Home'],resolve)
    },
    {
        path:'/text',
        name:'Test',
        component: resolve => require(['../pages/Test'],resolve)
    },
    {
        path: '/tags',
        name: 'Tags',
        component: resolve => require(['../pages/Tags'],resolve)
    },
    {
        path: '/sort',
        name: 'Sort',
        component: resolve => require(['../pages/Sort'],resolve)
    },
    {
        path: '/archive',
        name: 'Archive',
        component: resolve => require(['../pages/Archive'],resolve)
    },
    {
        path: '/messageboard',
        name: 'MessageBoard',
        component: resolve => require(['../pages/MessageBoard'],resolve)

    }
]

export default routes;