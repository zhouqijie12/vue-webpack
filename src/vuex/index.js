import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        count: 60
    },
    getters:{
        filterCount(state){
            return state.count>=120 ? 120 : state.count
        }
    },
    mutations:{
        add(state, payload){
            state.count += payload.n;
            console.log(state.count)
        },
        reduce(state, payload){
            state.count -= payload.b;
        }
    },
    actions:{
        addAction({commit,dispatch}){
            setTimeout( () =>{
                commit('add', {n:5});
                dispatch('test', {a:'test'})
            },1000)
        },
        test(context, obj){
            console.log(obj)
        }
    }
})

export default store;


