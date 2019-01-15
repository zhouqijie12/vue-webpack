import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let listStore = {
  state: {
    list: []
  },
  mutations: {
    getli (state, res) {
      state.list = res.list
    }
  },
  actions: {
    getList ({ commit, dispatch }) {
      axios.get('https://easy-mock.com/mock/5b2f4afd0e946a3379e72c66/example/').then((res) => {
        let { data: {data: datalist} } = res
        let { list } = datalist
        console.log(JSON.stringify(list, null, 2))
        commit({
          type: 'getli',
          list: list
        })
      })
    }
  }
}
let store = new Vuex.Store({
  state: {
    count: 60,
    list: []
  },
  getters: {
    filterCount (state) {
      return state.count >= 120 ? 120 : state.count
    }
  },
  mutations: {
    add (state, payload) {
      state.count += payload.n
      console.log(state.count)
    },
    reduce (state, payload) {
      state.count -= payload.b
    }
  },
  actions: {
    addAction ({ commit, dispatch }) {
      setTimeout(() => {
        commit('add', { n: 5 })
        dispatch('test', { a: 'test' })
      }, 1000)
    },
    test (context, obj) {
      console.log(obj)
    }
  },
  modules: {
    listStore
  }
})

export default store
