<template>
<mu-paper class="demo-menu">
  <mu-menu desktop :multiple="true">
    <mu-menu-item title="黄忠" inset/>
    <mu-menu-item title="太阳" inset/>
    <mu-menu-item title="敌人杰" inset/>
    <mu-menu-item title="小李飞刀" rightIcon="right" leftIcon="like-fill">
      <mu-menu-item title="飞刀无敌" rightIcon="right">
        <mu-menu-item title="又见飞刀" />
        <mu-menu-item title="一刀" leftIcon="like-fill" />
        <mu-menu-item title="二刀" inset/>
      </mu-menu-item>
      <mu-menu-item title=" bu bu bu~" leftIcon="like-fill" />
    </mu-menu-item>
    <mu-divider />
    <mu-menu-item title="我不是你记忆中的精柯" />
    <mu-menu-item title="但致使的程度没两样" />
    <mu-divider />
    <mu-menu-item title="小伙子开黑不……" />
  </mu-menu>
</mu-paper>
</template>
<style lang="css">
.demo-menu {
  display: inline-block;
  margin: 16px 32px 16px 0;
}
</style>
