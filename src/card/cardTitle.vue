<template>
<div class="vui-card-title-container">
  <div class="vui-card-title">
    <slot name="title"></slot>
  </div>
  <div class="vui-card-sub-title">
    <slot name="subTitle"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'vui-card-title',
  props: {
  }
}
</script>

<style lang="scss">
@import "../styles/import.scss";
.vui-card-title-container{
  position: relative;
  .vui-card-title{
    color: $textColor;
  }
  .vui-card-sub-title{
    font-size: vw(28);
    color: $lightBlack;
    display: block;
  }
}
</style>
