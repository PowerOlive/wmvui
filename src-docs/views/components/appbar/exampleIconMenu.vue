<template>
  <div>
    <vui-appbar :theme="{'background':'#fff','color':'#333'}">
      <vui-button :circle="36" :iconSize="16" icon="menu" slot="left"/>
      <vui-button label="按钮" slot="right" />
      <vui-button to="/" label="链接" slot="right"/>
      <vui-icon-menu icon="more" slot="right">
        <vui-menu-item title="菜单 1"/>
        <vui-menu-item title="菜单 2"/>
        <vui-menu-item title="菜单 3"/>
      </vui-icon-menu>
    </vui-appbar>
    <br>
    <vui-appbar :theme="{'background':'#673ab7','color':'#fff'}">
      <vui-button :circle="36" :iconSize="16" icon="menu" slot="left"/>
      <vui-button label="按钮" slot="right" />
      <vui-button to="/" label="链接" slot="right"/>
      <vui-icon-menu icon="more" slot="right">
        <vui-menu-item title="菜单 1"/>
        <vui-menu-item title="菜单 2"/>
        <vui-menu-item title="菜单 3"/>
      </vui-icon-menu>
    </vui-appbar>
  </div>
</template>
