import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Welcome from '../views/Welcome'
import Exam from '../views/Exam'
import Finished from '../views/Finished'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: Welcome,
        meta: {
            authRequired: true,
        },
    },
    {
        path: '/exam',
        name: 'Exam',
        component: Exam,
        meta: {
            authRequired: true,
        },
    },
    {
        path: '/finished',
        name: 'Finished',
        component: Finished,
        meta: {
            authRequired: true,
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
