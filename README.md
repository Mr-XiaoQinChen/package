# light-ui-program

## 下载
```
npm install light-ui-program
```

## 使用
```
import UI from 'light-ui-program'
import 'light-ui-program/lib/light-ui-program.css'
Vue.use(UI)
```

## 组件 
### MyButton
```
  <my-button animated="vertical">
    <div slot="hidden">$10000</div>
    <div slot="visible">
      <i class="shop icon"></i>不要错过哈
    </div>
  </my-button>
  <my-button animated="fade">
    <div slot="hidden">$10000</div>
    <div slot="visible">
      <i class="shop icon"></i>不要错过哈
    </div>
  </my-button>
  <my-button>点个赞再走！</my-button>
  <br />
  <br />
  <my-button disabled size="mini">mini小按钮</my-button>
  <br />
  <br />
  <my-button icon="user" size="mini">mini小按钮</my-button>
  <br />
  <br />
  <my-button icon="shop" size="mini">购物车</my-button>
  <br />
  <br />
  <my-button loading size="huge">大按钮</my-button>
  <br />
  <br />
  <my-button size="massive">大按钮</my-button>
  <br />
  <br />
  <!-- @click.native="btnClick" 是原生标签的事件 -->
  <my-button @click="btnClick"  icon="wifi" size="massive">我可以点击哦！</my-button>
  <br />
  <br />   
```
