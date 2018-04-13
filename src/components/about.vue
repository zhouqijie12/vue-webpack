<template>
  <div class="about">
    <div @click="abc()">我是about me {{$route.meta.index}}</div>
    <hr>
    <ul>
        <li>
          <router-link to="/about" tag="a" exact>work</router-link>
        </li>
        <li>
          <router-link :to="{name:'study'}" tag="a">study</router-link>
        </li>
        <li>
          <router-link to="/about/speak" tag="a">speak</router-link>
        </li>
      </ul>
      <input type="text" v-model="message"/>
      <router-view />
      <router-view name="slide"/>
    </div>
</template>

<script>

import VDistpicker from 'v-distpicker';

export default {
    data(){
        return{
          message:'afda',
          selected: [],
          selected2: []
        }
    },
    components:{
      VDistpicker
    },
    beforeCreate(){
      console.log('beforeCreate')
    },
    create(){
      console.log('create')
    },
    beforeMounted(){
      console.log('beforeMounted')
    },
    mounted(){
      console.log('mounted')
    },
    beforeUpdate(){
      console.log('beforeUpdate')
    },
    update(){
      console.log('update')
    },
    beforeDestroy(){
      console.log('beforeDestroy')
    },
    destroyed(){
      console.log('destroyed')
    },
    methods:{
        abc(){
          this.message = 'aaaa'
        }
    },
    mounted () {
      console.log(this.$route)
    },
    filters:{
      capitalize: function(value) {

        if (!value) {
          return '';
        }

        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
    },
    directives:{
      demoDirective:{
        bind(el, binding){
          el.style.color = binding.arg;
        },
        inserted(el, binding, vnode, oldVnode){
          el.focus();
          console.log(el)
          console.log(JSON.stringify(binding,null,4))
        },
        update(el, binding, vnode, oldVnode){
          console.log('update')
          console.log(el)
          console.log(JSON.stringify(binding,null,4))

          console.log(Object.keys(vnode).join(', '))
        },
        componentUpdated(){
          console.log('componentUpdated')
        },
        unbind(){
          console.log('unbind=')
        }
      }
    }
}
</script>

<style>

</style>
