<template>
  <div class="vuex">
    我是add
    <hr/>
    <input type="button" value="-" @click="reduce({b:10})"/>
    <span>{{num}}</span>
    <input type="button" value="+" @click="add"/>
    <p>{{num2}}</p>
  </div>
</template>

<script>

import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
    data(){
        return {
            numa: 0
        }
    },
    computed:{
        num(){
            return this.$store.state.count
        },
        ...mapGetters({
            num2: 'filterCount'
        }),
        num3(){
            return this.$store.getters.filterCount
        }
    },
    created(){

    },
    methods:{
        /*reduce(){
            this.$store.commit('reduce',{n:20,b:10});

        },
        /*add(){
            //同步操作
            //this.$store.commit('add')
            /*this.$store.commit({
                type: 'add',
                n: 10
            })

            //触发一个异步操作
            this.$store.dispatch('addAction');
        }*/
        ...mapMutations({
            reduce: 'reduce'
        }),
        ...mapActions({
            add: 'addAction'
        })
    }
}

</script>

<style>
    input{
        width:20px;
        height:20px;
    }
</style>
