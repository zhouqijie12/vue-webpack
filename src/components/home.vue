<template>
  <div class="home" @click="abc">我是首页 home{{$route.meta.index}} +++++ {{ $route.params.id }}
    <ul>
      <li v-for="(item,index) in datalist" :key="index">{{item.name}}</li>
    </ul>
    <span class="component" v-for="(item,index) in 3" :key="index" @click.stop="importComponent(index)">动态加载组件{{index}}</span>
    <keep-alive>
        <component :is="showComponent"></component>
    </keep-alive>
    <A :books="books">
        <template slot="aa" slot-scope="{abc}">
            <li>{{abc}}</li>
        </template>
    </A>
    <div style="height: 500px; width: 500px; border: 1px solid red; position: relative;">
        <vue-draggable-resizable :w="100" :h="100" @dragging="onDrag" @resizing="onResize" :parent="true">
            <p>Hello! X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>
        </vue-draggable-resizable>
    </div>
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


class Animal {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name, 'fdsa')
    }
}
class Duck extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    sayColor() {
        console.log(this.color);
    }
    sayName() {
        // 调用父级同名方法
        super.sayName();
        console.log('duck sayname')
    }
}

let abc = new Duck('xxx', 'red');
abc.sayColor()
abc.sayName()
//console.log(x,y)

export default {
    data(){
        return{
            width: 0,
            height: 0,
            x: 0,
            y: 0,
            fdsa:'test',
            showComponent: A,
            num: 'AAAA',
            books: [
                {name: 'vue.js'},
                {name: 'js高级程序设计'},
                {name: 'node.js入门实践'}
            ]
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
        this.$store.dispatch('listStore/getList');
        console.log(this.$toUpperCase('rewqreqw'))
        console.log(this.num + 'aaa')
    },
    mounted (){
        // console.log(this)
        // console.log(this.$route, 'ZZZZZZ99')
        // this.$router.push('about')
        // this.$router.push({path: '/about'})
        // this.$router.push({name:'user', params:{vip:'222'}})
        // this.$router.push({
        //     path: '/user',
        //     query: {
        //         abc:'aaa'
        //     }
        // },function(){
        //     console.log('success')
        // })
        console.log('home')
    },
    methods:{
        onResize: function (x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        },
        onDrag: function (x, y) {
        this.x = x
        this.y = y
        },
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
            // console.log(this.$router)
            // console.log(this.$route)
            // this.$router.push({
            //     path: '/about',
            //     query: {
            //         orderId: this.fdsa
            //     }
            // })
            //this.$router.push('about')
            //console.log('aaa')
        }
    }
}

</script>

<style>
span.component{
    color: red;
    display: block;
    line-height: 40x;
    margin: 10px 0 0;
}
</style>
