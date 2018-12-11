<template>
  <div class="user">
    我是user +++++ {{ $route.params }}
    <hr>
      <div class="list">
        <router-link :to="'/user/'+ item.level +'/'+ item.id" v-for="(item,index) of userList" tag="a" >{{item.userName}}</router-link>
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
export default {
    data(){
        return {
            userList: data,
            userInfo: {}
        }
    },
    watch:{
        '$route' (to, from){
            //console.log(to, from)
            this.getDate();
            //console.log(to,from)
        }
    },
    beforeRouteUpdate (to, from, next) {
        console.log(to, from, 'beforeRouteUpdate')
        next()
    },
    created(){
        this.getDate();
    },
    methods:{
        getDate(){
            let id = this.$route.params.userId;

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
