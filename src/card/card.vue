<template>
<div class="vui-card">
  <slot></slot>
</div>
</template>
<script>
export default {
  name: 'vui-card'
}
</script>
<style lang="less">
@import "../styles/import.less";
.vui-card {
  background-color: @dialogBackgroundColor;
  position: relative;
  border-radius: 2px;
  .depth(1);
}
</style>
