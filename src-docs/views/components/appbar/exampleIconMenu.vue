<template>
  <vui-appbar>
  <vui-button :circle="36" color="#fff" :iconSize="16" icon="menu" slot="left"/>
    <vui-button label="按钮" slot="right" color="#fff" />
    <vui-button to="/" label="链接"  color="#fff" slot="right"/>
    <vui-icon-menu icon="more" color="#fff" slot="right">
      <vui-menu-item title="菜单 1"/>
      <vui-menu-item title="菜单 2"/>
      <vui-menu-item title="菜单 3"/>
    </vui-icon-menu>
  </vui-appbar>
</template>
