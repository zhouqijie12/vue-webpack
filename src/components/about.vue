<template>
  <div class="about">
    <div @click="abcx()" :class="['abc', {test: ts}]">我是about me {{$route.meta.index}}</div>
    <hr>
    <p v-clipboard:copy="sysAppIds"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError">fdsafdsa</p>
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
      <!-- <input type="text" v-model="message"/> -->
      <br/>
      <br/>
      <br/>
      <!-- <v-distpicker province="广东省" city="广州市" area="海珠区"></v-distpicker> -->
      <br/>
      <br/>
      <br/>
      <router-view />
      <br/>
      <router-view name="slide"/>
    </div>
</template>

<script>

import VDistpicker from 'v-distpicker';

export default {
    data(){
        return{
          sysAppIds: 'xxxxxxxxxxxsx12321',
          message:'afda',
          selected: [],
          selected2: [],
          ts: true,
          abc: 'xxx'
        }
    },
    components:{
      VDistpicker
    },
    beforeCreate(){
      console.log('beforeCreate')
    },
    created(){
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
        abcx(){
          this.message = 'aaaa'
        },
        onCopy(e){
          console.log(e);
        },
        // 复制失败
        onError(e){
          alert("失败");
        },
    },
    mounted () {
      console.log(this.$router)
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

