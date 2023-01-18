import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    // 包養
    {
        path: '/index',
        name: 'index',
        component: () => import('../view/baoyang/views/Index.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../view/baoyang/components/Login.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../view/baoyang/views/Home.vue')
      },
    // 後台
    {
        path: '/adminLogin',
        name: 'adminLogin',
        meta: {
            title: '後台登入'
        },
        component: () => import('../view/admin/views/Login.vue')
    },
    {
        path: '/adminHome',
        name: '後台主頁',
        meta: {
            title: '後台主頁'
        },
        component: () => import('../view/admin/views/Home.vue'),
        redirect: '/adminIndex',
        children: [
            {
                path: '/adminIndex',
                meta: {
                    title: '後台首頁'
                },
                component: () => import('../view/admin/components/Welcome.vue')
            },
            {
                path: '/user/list',
                meta: {
                    title: '用戶管理'
                },
                component: () => import('../view/admin/views/user/Index.vue'),
            },
            {
                path: '/user/detail',
                meta: {
                    title: '用戶詳情'
                },
                component: () => import('../view/admin/views/user/Detail.vue'),
            }
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.path === '/index') {
        return next()
    }
    if (to.path === '/adminLogin') {
        return next()
    }
    const token = sessionStorage.getItem('token')
    if (!token) {
        return next('/index')
    } 
    return next()
})

export default router