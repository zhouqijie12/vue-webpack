<template>
  <div class="b">【动态组件1】<C><span slot="aaa">fdsafdsafdsa</span></C></div>
</template>

<script>
import C from '@/components/c'
export default {
  mounted() {
    console.log('BBBBB')
  },
  components: {
    C
  }
}
</script>

<style>

</style>
