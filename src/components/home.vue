<template>
  <div class="home" @click="abc">我是首页 home{{$route.meta.index}} +++++ {{ $route.params.id }}
  <ul>
    <li v-for="(item,index) in datalist" :key="index">{{item.name}}</li>
    </ul>
    <span v-for="(item,index) in 3" :key="index" @click.stop="importComponent(index)">动态加载组件{{index}}</span>
    <keep-alive>
        <component :is="showComponent"></component>
    </keep-alive>
  </div>

</template>

<script>
import A from '@/components/a'
import B from '@/components/b'
import C from '@/components/c'
//模式 foo, 变量 baz

function example(){
    return {
        x: '1aaaa',
        y: '2aa'
    }
}

let {x, y} = example();


//console.log(x,y)

export default {
    data(){
        return{
            fdsa:'test',
            showComponent: A
        }
    },
    computed:{
        datalist(){
            return this.$store.state.listStore.list;
        }
    },
    components: {
        A,
        B,
        C
    },
    watch: {
        '$route' (to,from){
            console.log(to,from,'a')
        }
    },
    created(){
        this.$store.dispatch('getList');

    },
    mounted (){
        console.log(this)
    },
    methods:{
        importComponent(index){
            console.log(index)
            if (index === 0){
                this.showComponent = A;
            } else if (index ==1){
                this.showComponent = B;
            } else if (index === 2){
                this.showComponent = C;
            }
        },
        abc(){

            console.log(this.$router)
            console.log(this.$route)

            this.$router.push({
                path: '/about',
                query: {
                    orderId: this.fdsa
                }
            })
            //this.$router.push('about')
            //console.log('aaa')
        }
    }
}

</script>

<style>

</style>
