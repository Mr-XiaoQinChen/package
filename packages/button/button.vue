<template>
  <div>
    <button class="ui button" :class="size">
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
    }
  },
  data () {
    return {
      // size: this.size
    }
  },
  computed: {
    cSize () {
      return this.size
    }
  }
}
</script>
