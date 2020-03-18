// 引入插件 样式
import 'semantic-ui-css/semantic.css'
// 引入 组件
import Button from './button/button.vue'
// 导出 组件
export default {
  install (Vue) {
    Vue.component('MyButton', Button)
  }
}
