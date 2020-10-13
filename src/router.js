import Vue from 'vue'
import Router from 'vue-router'

import Login from './pages/Login'
import App from './pages/App'
import Dashboard from './pages/Dashboard'
import Config from './pages/Config'
import Projetos from './pages/Projetos'
import Capacity from './pages/Capacity'
import Calendarizacao from './pages/Calendarizacao'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Login },
        {
            path: '/app', component: App,           
            children: [
                { path: '/dashboard', component: Dashboard },      
                { path: '/config', component: Config},
                { path: '/projetos', component: Projetos},
                { path: '/capacity', component: Capacity},  
                { path: '/calenzarizao', component: Calendarizacao},                          
            ]         
        },
        { path: '*', redirect: '/' }
    ]

})