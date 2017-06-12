<template>
<div>
  <mu-paper class="demo-menu">
    <mu-menu desktop>
      <mu-menu-item title="返回"/>
      <mu-menu-item disabled title="前进"/>
      <mu-divider />
      <mu-menu-item disabled title="关闭"/>
      <mu-menu-item disabled title="切换"/>
      <mu-menu-item title="菜单"/>
    </mu-menu>
  </mu-paper>
  <mu-paper class="demo-menu">
    <mu-menu desktop>
      <mu-menu-item title="剪切"/>
      <mu-menu-item disabled title="复制"/>
      <mu-divider />
      <mu-menu-item title="粘贴"/>
      <mu-menu-item title="全选"/>
      <mu-menu-item title="取消"/>
    </mu-menu>
  </mu-paper>
</div>
</template>


<style lang="css">
.demo-menu {
  display: inline-block;
  margin: 16px 32px 16px 0;
}
</style>
