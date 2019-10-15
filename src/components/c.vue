<template>
  <div class="c">【动态组件2】
    <slot name="aaa"></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('CCCCC')
    console.log(this.$slots.aaa || 'aa')
  }
}
</script>

<style>

</style>
