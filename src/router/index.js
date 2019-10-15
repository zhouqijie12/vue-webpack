import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/components/home'
// import about from '@/components/about'
import documenta from '@/components/document'
import nofound from '@/components/error'
import user from '@/components/user'
import vuex from '@/components/vuex'
import elementui from '@/components/elementui'
import study from '@/components/views/study'
import work from '@/components/views/work'
import speak from '@/components/views/speak'
import slide from '@/components/views/slide'
import iview from '@/components/iview'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior (to, from, savePosition) {
    console.log(to, 'scrollBehavior', savePosition)
    // to 目标对象
    // from 哪里来
    // savePosition 记录滚动条坐标.
    // console.log(to,from,savePosition)
    /* if(to.hash){
        return {
            selector: to.hash
        }
    }
*/
    if (savePosition) {
      return savePosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      // redirect: to => {
      //     return '/about'
      // },
      // redirect: '/about',
      // redirect: '{name: About}',
      component: home,
      meta: {
        index: 0
      }
    },
    {
      path: '/iview',
      component: iview,
      name: 'iview',
      meta: {
        index: 6
      }
    },
    {
      path: '/about',
      // name: 'about',
      alias: '/document',
      component: () => import(/* webpackChunkName: "about" */'@/components/about'),
      children: [
        {
          path: '', // 默认子路由
          name: 'work',
          components: {
            default: work,
            slide
          },
          meta: {
            index: 1
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
      meta: {
        index: 2
      }
    },
    {
      path: '/user/:level?/:userId*',
      name: 'user',
      component: user,
      props: () => {
        return {
          ts: 'ts4'
        }
      },
      beforeRouteUpdate (to, from, next) {
        console.log(to, from, next)
      },
      meta: {
        index: 3
      }
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: vuex,
      meta: {
        index: 4
      }
    },
    {
      path: '/elementui',
      name: 'elementui',
      component: elementui,
      meta: {
        index: 5
      }
    },
    {
      path: '*',
      // component: error
      // redirect: '/home'
      // redirect: {path: '/home'}
      // redirect: { name: 'About'}
      redirect: (to) => {  // 动态设置重定向目标
        console.log(to, '90909')
        if (to.path === '/123') {
          return '/about'
        } else {
          return '/'
        }
      }
    }
  ]
})
export default router
