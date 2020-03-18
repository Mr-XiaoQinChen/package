<template>
  <div>
    <button class="ui button" :class="cClass">
      <i v-if="icon" class="user icon" :class="icon"></i>
      <slot>我是一个按钮</slot>
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
        return ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'].includes(val)
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
    }
  },
  data () {
    return {
      // size: this.size
    }
  },
  computed: {
    cClass () {
      if (this.loading) {
        return this.size + ' loading'
      }
      // 如果有禁用 就返回按钮的大小和禁用配置
      if (this.disabled) {
        return this.size + ' disabled'
      }
      return this.size
    }
  }
}
</script>
