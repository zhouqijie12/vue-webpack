<template>
  <div>
    {{ ax }}
    <d
      @change="change"
      @afn="change"
      :titlea.sync="titlex"
      @bfn="change"
      title="这是标题"
      width="80"
      height="80"
      imgUrl="imgUrl"
    >
      <template v-slot:default>
        覆盖slot 默认值
      </template>
      <template v-slot:todo>
        覆盖slot 名字为tod
      </template>

      <template v-slot:scopxe="slotProps">
        {{ slotProps.user.firstName }}
      </template>
    </d>
  </div>
</template>
<script>
import D from './d.vue'
export default {
  mounted () {
    // 可以拿到 一级子组件的属性和方法
    console.log(this.$children)
    console.log(this.$eventBus)
    this.$eventBus.$emit('ac', '这是eventTarget传过来的值')
    console.log('走着走着走着走着幸')
  },
  provide: {
    zhou: 'mfk',
    zhou1: 'ssse',
    zhouFn: () => {
      console.log('zhouFn')
    }
  },
  computed: {
    ax () {
      return this.titlex
    }
  },
  data () {
    return {
      titlex: 'titlex'
    }
  },
  components: {
    D
  },
  methods: {
    change () {
      console.log('change test')
    }
  }
}
</script>
