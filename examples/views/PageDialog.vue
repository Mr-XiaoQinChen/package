<template>
  <div>

    <h1>测试my-dialog</h1>
    <button type="primary" @click="isShow = !isShow">切换显示</button>
    <my-dialog v-model="isShow">

    </my-dialog>
  </div>
</template>

<script>
export default {
  name: 'PageDialog',
  data () {
    return {
      isShow: false
    }
  }
}
</script>

<style lang="" scoped>

</style>
