<template>
  <div class="home" @click="abc">我是首页 home{{$route.meta.index}} +++++ {{ $route.params.id }}</div>
</template>

<script>

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
            fdsa:'test'
        }
    },
    watch: {
        '$route' (to,from){
            console.log(to,from,'a')
        }
    },
    mounted (){
        console.log(this)
    },
    methods:{
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
