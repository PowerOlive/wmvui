<template>
<div>
  <vui-paper class="demo-menu">
    <vui-menu>
      <vui-menu-item title="程咬金"/>
      <vui-menu-item title="亚瑟"/>
      <vui-menu-item title="墨子"/>
      <vui-menu-item title="孙膑"/>
    </vui-menu>
  </vui-paper>
  <vui-paper class="demo-menu">
    <vui-menu>
      <vui-menu-item title="返回"/>
      <vui-menu-item disabled title="前进"/>
      <vui-divider />
      <vui-menu-item disabled title="切换"/>
      <vui-menu-item title="菜单"/>
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
