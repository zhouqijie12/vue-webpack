import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

let listStore = {
    namespaced: true,
    state: {
        cs: 900,
        list: []
    },
    mutations: {
        getli(state, res) {
            state.list = res.list
        }
    },
    actions: {
        getList({ commit, dispatch }) {
            axios.get('https://easy-mock.com/mock/5b2f4afd0e946a3379e72c66/example/').then((res) => {
                let { data: { data: datalist } } = res
                let { list } = datalist
                console.log(JSON.stringify(list, null, 2))
                commit({
                    type: 'getli',
                    list
                })
            })
        }
    }
}

let buyStore = {
    namespaced: true,
    state: {
        count: 60,
        list: []
    },
    getters: {
        filterCount(state, getters, rootState) {
            return state.count >= 120 ? 120 : rootState.leon
        },
        test(state) {
            return state.count - 10
        }
    },
    mutations: {
        add(state, payload) {
            state.count += payload.n
            console.log(state.count)
        },
        reduce(state, payload) {
            state.count -= payload.b
        }
    },
    actions: {
        addAction({ commit, dispatch }, payload) {
            setTimeout(() => {
                commit('add', payload)
                dispatch('test', { a: 'test' })
            }, 1000)
        },
        test(context, obj) {
            console.log(obj)
        }
    }
}
let store = new Vuex.Store({
    state: {
        leon: 14
    },
    modules: {
        listStore,
        buyStore
    }
})

export default store
