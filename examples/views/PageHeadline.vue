<template>
  <div>
    <h1>测试my-headline组件</h1>
    <my-headline :level="1" icon="user" size="Huge">
      标题
      <div slot="sub">
        子标题子标题子标题子标题
      </div>
    </my-headline>
    <br>
    <my-headline :level="2" icon="settings" size="small">
      <div slot="sub">
        123456
      </div>
    </my-headline>
    <br>
  </div>
</template>

<script>
export default {
  name: 'page-headline'
}
</script>
<style scoped lang='less'>
</style>
