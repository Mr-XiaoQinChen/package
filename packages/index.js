// 引入插件 样式
import 'semantic-ui-css/semantic.css'
// 引入 组件
import MyButton from './button/button.vue'
import MyDivider from './divider/divider.vue'
import MySlider from './slider/slider.vue'
import MyHeadline from './headline/headline.vue'
import MyDialog from './dialog/dialog.vue'
// 导出 组件
export default {
  install (Vue) {
    Vue.component('MyButton', MyButton)
    Vue.component('MyDivider', MyDivider)
    Vue.component('MySlider', MySlider)
    Vue.component('MyHeadline', MyHeadline)
    Vue.component('MyDialog', MyDialog)
  }
}
