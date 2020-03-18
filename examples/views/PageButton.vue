<template>
  <div class="about">
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
    <my-button icon="wifi" size="massive">信号满格</my-button>
    <br />
    <br />

  </div>
</template>
