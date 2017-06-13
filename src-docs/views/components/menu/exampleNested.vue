<template>
<vui-paper class="demo-menu">
  <vui-menu desktop :multiple="true">
    <vui-menu-item title="黄忠" inset/>
    <vui-menu-item title="太阳" inset/>
    <vui-menu-item title="敌人杰" inset/>
    <vui-menu-item title="小李飞刀" rightIcon="right" leftIcon="like-fill">
      <vui-menu-item title="飞刀无敌" rightIcon="right">
        <vui-menu-item title="又见飞刀" />
        <vui-menu-item title="一刀" leftIcon="like-fill" />
        <vui-menu-item title="二刀" inset/>
      </vui-menu-item>
      <vui-menu-item title=" bu bu bu~" leftIcon="like-fill" />
    </vui-menu-item>
    <vui-divider />
    <vui-menu-item title="我不是你记忆中的精柯" />
    <vui-menu-item title="但致使的程度没两样" />
    <vui-divider />
    <vui-menu-item title="小伙子开黑不……" />
  </vui-menu>
</vui-paper>
</template>
<style lang="css">
.demo-menu {
  display: inline-block;
  margin: 16px 32px 16px 0;
}
</style>
