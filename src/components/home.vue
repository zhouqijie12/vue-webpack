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

console.log(x,y)

export default {
    data(){
        return{
            fdsa:'test'
        }
    },
    methods:{
        abc(){
            console.log(this.$router);

            /*this.$router.push({
                path: '/about',
                query: {
                    orderId: this.fdsa
                }
            })*/
            //console.log('aaa')
        }
    }
}

</script>

<style>

</style>
