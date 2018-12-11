export default{
    install(Vue,options,options2){
        console.log(options,'options')
        console.log(options2, 'options2')
        Vue.prototype.$toUpperCase = function(val){
            return val.toUpperCase()
        };
        Vue.prototype.num =  1;
        Vue.mixin({
            created () {
                console.log('组件开始加载')
            },
            methods:{
                abc(){
                    alert('fdasfads')
                }
            }
        })
    }
}