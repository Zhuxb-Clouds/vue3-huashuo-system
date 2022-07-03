import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/cardtable',
            name: 'cardtable',
            component: () => import('../page/CardCURD.vue'),
            beforeEnter: (to, from) => {
                console.log('to', to)
                console.log('from', from)
                if (!localStorage.getItem("token")) {
                    router.push({ name: 'Login' });
                    return false
                }
            },
        }, {
            path: '/Login',
            name: 'Login',
            component: () => import('../page/SystemLogin.vue')
        },
        { path: '/', redirect: '/Login' }
    ]
})


export default router