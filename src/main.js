// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Admin from './templates/Admin'
import router from './router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import store from './store'

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuex)

Vue.use(Vuetify, {
    theme: {
        primary: '#222f3e'
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<Admin />',
    components: { Admin }
})
