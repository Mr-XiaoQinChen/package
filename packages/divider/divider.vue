<template>
  <div class="ui divider horizontal header">
    <i v-if="icon" class="icon" :class="icon"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MyDivider',
  props: {
    icon: {
      type: String,
      default: '',
      required: false
    }
  }
}

</script>
<style scoped lang='less'>
</style>
