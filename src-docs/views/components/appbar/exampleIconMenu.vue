<template>
  <vui-appbar>
    <vui-button icon="menu" :size="22" slot="left"/>
    <vui-button label="按钮" slot="right"/>
    <vui-button to="/" label="链接" slot="right"/>
    <vui-icon-menu icon="more" slot="right">
      <vui-menu-item title="菜单 1"/>
      <vui-menu-item title="菜单 2"/>
      <vui-menu-item title="菜单 3"/>
    </vui-icon-menu>
  </vui-appbar>
</template>
