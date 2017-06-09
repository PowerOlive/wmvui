<template>
  <mu-appbar>
    <mu-icon-button icon="menu" :size="22" slot="left"/>
    <mu-flat-button label="按钮" slot="right"/>
    <mu-flat-button to="/" label="链接" slot="right"/>
    <mu-icon-menu icon="more" slot="right">
      <mu-menu-item title="菜单 1"/>
      <mu-menu-item title="菜单 2"/>
      <mu-menu-item title="菜单 3"/>
    </mu-icon-menu>
  </mu-appbar>
</template>
