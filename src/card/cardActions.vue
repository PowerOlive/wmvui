<template>
<div class="vui-card-actions">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'vui-card-actions'
}
</script>

<style lang="scss">
@import "../styles/import.scss";
.vui-card-actions {
  /* padding: 15px; */
  position: relative;
}
</style>
