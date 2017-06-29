<template>
<div>
  <vui-paper class="demo-menu">
    <vui-menu>
      <vui-menu-item title="李白" leftIcon="like-fill" rightIcon="right" />
      <vui-menu-item title="王玿珺"/>
      <vui-menu-item title="墨子" leftIcon="code"/>
      <vui-divider />
      <vui-menu-item title="阿柯" leftIcon="code"/>
      <vui-menu-item title="亚瑟" leftIcon="code"/>
      <vui-menu-item title="典韦" leftIcon="code"/>
    </vui-menu>
  </vui-paper>
  <vui-paper class="demo-menu">
    <vui-menu>
      <vui-menu-item title="姜子牙" rightIcon="right">
        <vui-badge content="11" circle slot="after" />
      </vui-menu-item>
      <vui-menu-item title="李白" leftIcon="like-fill" rightIcon="right">
        <vui-badge content="骚贱浪" slot="after"/>
        <vui-icon icon="like-fill" color="red" slot="after" style="margin-left:10px"/>
      </vui-menu-item>
      <vui-menu-item title="敌人节" rightIcon="right"/>
      <vui-menu-item title="蔡文鸡" rightIcon="right" rightIconColor="#559"/>
      <vui-menu-item title="刘备" rightIcon="right"/>
      <vui-menu-item title="张飞（小飞飞）" rightIcon="right"/>
    </vui-menu>
  </vui-paper>
</div>
</template>


<style lang="css">
.demo-menu {
  display: inline-block;
  margin: 16px 32px 16px 0;
}

</style>
