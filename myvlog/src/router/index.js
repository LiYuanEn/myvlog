const routes = [
    {
        path:"*",
        name:'Home',
        component: resolve => require(['../pages/Home'],resolve),
    },
    {
        path:"/home",
        name:'Home',
        component: resolve => require(['../pages/Home'],resolve)
    },
    {
        path:"/text",
        name:'Test',
        component: resolve => require(['../pages/Test'],resolve)
    },
    {
        path: "/tags",
        name: 'Tags',
        component: resolve => require(['../pages/Tags'],resolve)
    },
    {
        path: "/sort",
        name: 'Sort',
        component: resolve => require(['../pages/Sort'],resolve)
    }
]

export default routes;