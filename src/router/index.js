import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/components/home'
import about from '@/components/about'
import documenta from '@/components/document'
import nofound from '@/components/error'
import user from '@/components/user'
import vuex from '@/components/vuex'
import study from '@/components/views/study'
import work from '@/components/views/work'
import speak from '@/components/views/speak'
import slide from '@/components/views/slide'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior (to, from, savePosition) {
    //to 目标对象
    //from 哪里来
    //savePosition 记录滚动条坐标.
    console.log(to,from,savePosition)
    /*if(to.hash){
        return {
            selector: to.hash
        }
    }

    if(savePosition){
        return savePosition
    }else{
        return {
            x: 0,
            y: 0
        }
    }*/
    },
    routes:[
        {
            path: '/',
            name: 'home',
/*            redirect: to => {
                return '/about'
            },*/
            component: home,
            meta:{
                index:0
            }
        },
        {
            path: '/about',
/*            name: 'About',*/
            component: about,
            children: [
                {
                    path: '',//默认子路由
                    name: 'work',
                    components: {
                        default: work,
                        slide
                    },
                    meta:{
                        index:1
                    }
                },
                {
                    path: 'study',
                    name: 'study',
                    component: study
                },
                {
                    path: 'speak',
                    name: 'speak',
                    component: speak
                }
            ]
        },
        {
            path: '/document',
            name: 'document',
            component: documenta,
            meta:{
                index:2
            }

        },
        {
            path: '/user/:level?/:userId*',
            name: 'user',
            component: user,
/*            beforeRouteUpdate(to, from, next){
                console.log(to, from, next)
            },*/
            meta:{
                index:3
            }
        },
       {
            path: '/vuex',
            name: 'vuex',
            component: vuex,
            meta:{
                index:4
            }
        },
        {
            path: '*',
            //component: error
            //redirect: '/home'
            //redirect: {path: '/home'}
            //redirect: { name: 'About'}
            redirect: (to) => {  //动态设置重定向目标

                //console.log(to)
                if(to.path == '/123'){
                    return '/about'
                }else{
                    return '/'
                }
            }
        }
    ]

})

export default router;
