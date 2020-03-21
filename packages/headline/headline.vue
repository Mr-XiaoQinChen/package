<template>
  <div>
    <h1 class="ui header" :class="size">
      <i v-if="icon" class="icon" :class="icon"></i>
      <div class="content">
        <slot></slot>
        <!-- <slot name="sub"></slot> -->
        <div class="sub header"><slot name="sub"></slot></div>
      </div>
    </h1>
    <!-- <h2 v-if="level===2" class="ui header" :class="size">
      <i v-if="icon" class="icon" :class="icon"></i>
      <div class="content">
        <slot></slot>
        <div class="sub header"><slot name="sub"></slot></div>
      </div>
    </h2> -->
  </div>
</template>

<script>
export default {
  name: 'Myheadline',
  // 定义属性来收集用户的输入
  props: {
    level: {
      type: Number, // h1 h2 h3 ...
      default: 1, // 默认为1
      requried: false
    },
    icon: {
      type: String, // 图标
      default: '', // 默认为空
      requried: false
    },
    size: {
      type: String, // 大小
      default: 'small', // 默认为small
      requried: false
    }
  }
}
</script>
<style scoped lang='less'>
</style>
