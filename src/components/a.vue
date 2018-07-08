<template>
  <div class="a">我 a
    <span @click.stop="changColor($event)">fdsafaaaadas12312</span>
  </div>
</template>

<script>
export default {
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
