import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// --------------------------------------------------------------

// State
const state = {
    user: {
        name: 'Odirlei Borgert',
        email: 'odirleiborgert@gmail.com'
    },
    auth: {
    	token: null
    }
}

// --------------------------------------------------------------

// Mutations
const mutations = {

}

// --------------------------------------------------------------

// Actions
const actions = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
