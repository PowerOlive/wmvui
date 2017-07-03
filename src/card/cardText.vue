<template>
<div class="vui-card-text">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'vui-card-text'
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-card-text{
  /* padding: 15px; */
  font-size: 14px;
  color: @textColor;
}
</style>
