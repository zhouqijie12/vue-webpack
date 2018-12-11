<template>
  <div class="a">
    <span @click.stop="changColor($event)">【动态组件0】</span>
    <ul>
      <slot name="aa" v-for="(item) in bo" :books="item.name">朝秦暮楚朝秦暮楚 </slot>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bo: this.books
    }
  },
  props:{
    books: {
      type: Array,
      default (){
        return []
      }
    }
  },
  methods:{
    changColor(e){
      e.target.style.background = 'red'
      console.log(this,e);
    }
  }

}
</script>

<style>

</style>
