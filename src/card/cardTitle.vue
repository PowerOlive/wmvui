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

<style lang="less">
@import "../styles/import.less";
.vui-card-title-container{
  position: relative;
  .vui-card-title{
    color: @textColor;
  }
  .vui-card-sub-title{
    font-size: 14px;
    color: @lightBlack;
    display: block;
  }
}
</style>
