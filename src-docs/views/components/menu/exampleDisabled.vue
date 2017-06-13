<template>
<div>
  <vui-paper class="demo-menu">
    <vui-menu desktop>
      <vui-menu-item title="返回"/>
      <vui-menu-item disabled title="前进"/>
      <vui-divider />
      <vui-menu-item disabled title="关闭"/>
      <vui-menu-item disabled title="切换"/>
      <vui-menu-item title="菜单"/>
    </vui-menu>
  </vui-paper>
  <vui-paper class="demo-menu">
    <vui-menu desktop>
      <vui-menu-item title="剪切"/>
      <vui-menu-item disabled title="复制"/>
      <vui-divider />
      <vui-menu-item title="粘贴"/>
      <vui-menu-item title="全选"/>
      <vui-menu-item title="取消"/>
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
