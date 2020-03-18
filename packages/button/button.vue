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
    size: {
      type: String,
      required: false,
      default: 'small',
      validator (val) {
        return ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'].includes(val)
      }
    },
    icon: {
      type: String,
      required: false
    },
    disabled: {
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
      if (this.disabled) {
        return this.size + ' disabled'
      } else {
        return this.size
      }
    }
  }
}
</script>
