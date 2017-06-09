<template>
<div class="demo-badge-container">
  <mu-badge class="demo-badge-content">
    <mu-icon value="like-fill"/>
    <mu-icon value="plus" slot="content"/>
  </mu-badge>
  <mu-badge  class="demo-badge-content">
    版权信息
    <span style="font-size: 20px;" slot="content">&copy;</span>
  </mu-badge>
</div>
</template>
<style lang="less">
.demo-badge-content {
  padding: 12px;
  .mu-badge{
    background-color: inherit;
    color: inherit;
  }
}
</style>
