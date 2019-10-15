<template>
  <div class="user">
    {{value}}
    <el-cascader v-model="value" :props="props"></el-cascader>
    我是user +++++ {{ $route.params }}
    <hr>
      <div class="list">
        <router-link :to="'/user/'+ item.level +'/'+ item.id" v-for="(item,index) of userList" tag="a" :key="index">{{item.userName}}</router-link>
      </div>
      <div style="font-size:20px;line-height:1.5" v-if="userInfo.id">
        <p>姓名: {{userInfo.userName}}</p>
        <p>性别: {{userInfo.sex}}</p>
        <p>工作: {{userInfo.job}}</p>
      </div>
  </div>
</template>

<script>
let data = [
    {
        id:1,
        level:'vip',
        userName: 'zqj1',
        sex: '男',
        job: 'coder'
    },
    {
        id:2,
        level:'vip',
        userName: 'zqj2',
        sex: '男',
        job: 'coder2'
    },
    {
        id:3,
        level:'common',
        userName: 'zqj3',
        sex: '男',
        job: 'coder3'
    }
]
let id = 1;
export default {
    data(){
        return {
            value: [2],
            nodess: [],
            userList: data,
            userInfo: {},
            props: {
                lazy: true,
                lazyLoad (node, resolve) {
                    const { level } = node;
                    setTimeout(() => {
                        let nodes = Array.from({ length: level + 1 })
                            .map(item => ({
                                value: ++id,
                                label: `选项${id}`,
                                leaf: level >= 1
                            }));
                        // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                        let nodess = [
                            {
                                label: "aaaaa",
                                leaf: true,
                                value: 2,
                            }
                        ]
                        resolve(nodess);
                        console.log(nodes, 'sssssss')
                    }, 1000);
                }
            }
            
        }
    },
    props:['ts'],
    mounted () {
        
    },
    watch:{
        '$route' (to, from){
            this.getDate();

            //console.log(to,from)
        }
    },
    beforeRouteUpdate (to, from, next) {
        // console.log('to:',to, 'from:',from, 'beforeRouteUpdate')
        next()
    },
    created(){
        this.getDate();
        this.nodess = [
            {
                label: "aaaaa",
                leaf: true,
                value: 2,
            }
        ]
    },
    methods:{
        getDate(){
            console.log(this.ts,'ts')
            let id = this.$route.params.userId;
            console.log(this.$route, '9090909')
            if(id){
                this.userInfo = this.userList.filter( (item) => {
                    return item.id == id;
                })[0]
            }else{
                this.userInfo = {};
            }
        }
    }
}
</script>

<style>

</style>
