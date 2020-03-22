<template>
<!--semantic-ui中约定的： 如果有active类，则会显示 -->
  <div class="ui dimmer modals page" :class="{'active':isShow}">
    <div class="ui standard modal" :class="{'active':isShow}" style="top: 60px;">
      <i class="close icon" @click="hClose"></i>
      <div class="header">
            头部
      </div>
      <div class="content">
        <div class="description">
          内容
        </div>
      </div>
      <div class="actions">
        <div class="ui black button">Nope</div>
        <div class="ui positive right labeled icon button">
          Yep, that's me
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
export default {
  name: 'MyDialog',
  props: {
    // 通过父组件中v-model传入
    value: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      // 由于后期要修改显示/隐藏，我们不能直接在prop中修改，所以这里添加一个数据项 isSHow
      isShow: this.value
    }
  },
  methods: {
    hClose () {
      // 关闭
      this.isShow = false
      // 修改父组件中v-model的值
      this.$emit('input', this.isShow)
    }
  },
  watch: {
    // 监视属性的变化
    // 父级组件中的v-model="abc"，如果abc的变化了，在子组父内部如何得知？
    value () {
      console.log('v-model的值变化了', this.value)
      // 更新子组件内部的状态
      this.isShow = this.value
    }
  }
}
</script>
