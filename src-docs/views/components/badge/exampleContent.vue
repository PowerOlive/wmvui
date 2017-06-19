<template>
<div class="demo-badge-container">
  <vui-badge info circle size="28px" class="demo-badge-content">
    <vui-icon icon="like-fill"/>
    <vui-icon icon="plus" slot="content"/>
  </vui-badge>
  <vui-badge primary circle size="20px" class="demo-badge-content">
    版权信息
    <span style="font-size: 20px;" slot="content">&copy;</span>
  </vui-badge>
</div>
</template>
<style lang="less">
.demo-badge-content {
  padding: 12px;
}
</style>
