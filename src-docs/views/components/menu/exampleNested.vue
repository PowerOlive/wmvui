<template>
<vui-paper class="demo-menu">
  <vui-menu :multiple="true">
    <vui-menu-item>
      <vui-icon icon="like-fill" slot="left" />
      <template slot="title">黄忠</template>
    </vui-menu-item>
    <vui-menu-item>
      <vui-icon icon="like-fill" slot="left" />
      <template slot="title">太阳</template>
    </vui-menu-item>
    <vui-menu-item>
      <vui-icon icon="like-fill" slot="left" />
      <template slot="title">小李飞刀</template>
      <vui-icon icon="right" slot="right" />
      <vui-menu-item>
        <template slot="title">飞刀无敌</template>
        <vui-icon icon="right" slot="right" />
        <vui-menu-item title="又见飞刀" />
        <vui-menu-item title="一刀">
          <vui-icon icon="like-fill" slot="left" />
        </vui-menu-item>
        <vui-menu-item title="二刀" />
      </vui-menu-item>
      <vui-menu-item title=" bu bu bu~" leftIcon="like-fill" />
    </vui-menu-item>
    <vui-divider />
    <vui-menu-item>
      <template slot="title">我不是你记忆中的精柯</template>
    </vui-menu-item>
    <vui-divider />
    <vui-menu-item title="但致使的程度没两样">
      <template slot="title">小伙子开黑不……</template>
    </vui-menu-item>
    <vui-divider />
    <vui-menu-item>
      <template slot="title">小伙子开黑不……</template>
    </vui-menu-item>
  </vui-menu>
</vui-paper>
</template>
<style lang="css">
.demo-menu {
  display: inline-block;
  margin: 16px 32px 16px 0;
}
</style>
