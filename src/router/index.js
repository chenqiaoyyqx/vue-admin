import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/index.vue'
import Register from '../views/register/index.vue'

Vue.use(Router)

export default new Router ({
    routes : [
        {
            path:'/',
            redirect: Login
        },        
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        }        
    ]
})