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
<style lang="scss">
@import "../styles/import.scss";
.vui-card {
  background-color: $dialogBackgroundColor;
  position: relative;
  border-radius: vw(4);
  // .depth(1);
  box-shadow: rgba(0, 0, 0, 0.117647) 0 1px 6px, rgba(0, 0, 0, 0.117647) 0 1px 4px;
}
</style>
