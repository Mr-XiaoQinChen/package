<template>
  <div>
    <button class="ui button" :class="cClass" @click="hEmitClick">
      <template v-if="animated">
        <div v-if="$slots.hidden" class="hidden content">
          <slot name="hidden" />
        </div>
        <div v-if="$slots.visible" class="visible content">
          <slot name="visible" />
        </div>
      </template>
      <!-- 不带动画效果 -->
      <template v-else>
        <i v-if="icon" class="user icon" :class="icon"></i>
        <slot>我是一个按钮</slot>
      </template>
    </button>
  </div>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    // 按钮大小
    size: {
      type: String,
      required: false,
      default: 'small',
      validator (val) {
        return [
          'mini',
          'tiny',
          'small',
          'medium',
          'large',
          'big',
          'huge',
          'massive'
        ].includes(val)
      }
    },
    // 图标
    icon: {
      type: String,
      required: false
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      default: false
    },
    // loading 加载状态
    loading: {
      type: Boolean,
      default: false
    },
    // 动画效果
    animated: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // size: this.size
    }
  },
  computed: {
    cClass () {
      // 1. 用数组收集类名
      var classArr = [this.size]
      // 收集到属性值，并分析一下
      this.animated && classArr.push(`animated ${this.animated}`)
      this.loading && classArr.push('loading')

      this.disabled && classArr.push('disabled')

      return classArr.join(' ')
    }
    // cClass () {
    //   // 1. 用数组收集类名
    //   var classArr = [this.size]
    //   // 收集到属性值，并分析一下
    //   if (this.loading) {
    //     classArr.push('loading')
    //   }
    //   if (this.disabled) {
    //     classArr.push('disabled')
    //   }
    //   return classArr.join(' ')
    //   // if (this.loading) {
    //   //   return this.size + ' loading'
    //   // }
    //   // // 如果有禁用 就返回按钮的大小和禁用配置
    //   // if (this.disabled) {
    //   //   return this.size + ' disabled'
    //   // }
    //   // return this.size
    // }
  },
  methods: {
    hEmitClick () {
      this.$emit('click')
    }
  }
}
</script>
