import Vue from 'vue'
import Router from 'vue-router'

// Views
import Dashboard from '@/views/admin/Dashboard'
import PageOne from '@/views/admin/PageOne'
import PageTwo from '@/views/admin/PageTwo'
import SubPageOne from '@/views/admin/SubPageOne'
import SubPageTwo from '@/views/admin/SubPageTwo'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'admin.dashboard',
            component: Dashboard
        },
        {
            path: '/page-one',
            name: 'admin.page.one',
            component: PageOne
        },
        {
            path: '/page-two',
            name: 'admin.page.two',
            component: PageTwo
        },
        {
            path: '/sub-page-one',
            name: 'admin.subpage.one',
            component: SubPageOne
        },
        {
            path: '/sub-page-two',
            name: 'admin.subpage.two',
            component: SubPageTwo
        },
        { path: '*', redirect: '/' },
    ]
})
