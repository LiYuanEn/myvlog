const routes = [
    {
        path:"/",
        name:'Home',
        component: resolve => require(['../pages/Home'],resolve)
    },
    {
        path:"/text",
        name:'Test',
        component: resolve => require(['../pages/Test'],resolve)
    }
]

export default routes;