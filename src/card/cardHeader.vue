<template>
<div class="vui-card-header">
  <slot name="avatar"></slot>
  <div class="vui-card-header-title">
    <div class="vui-card-title">
      <slot name="title"></slot>
    </div>
    <div class="vui-card-sub-title">
      <slot name="subTitle"></slot>
    </div>
  </div>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'vui-card-header',
  props: {
  }
}
</script>

<style lang="scss">
@import "../styles/import.scss";
.vui-card-header {
  /* padding: 15px; */
  position: relative;
  white-space: nowrap;
  .vui-avatar {
    margin-right: vw(20);
    vertical-align: middle;
  }
}

.vui-card-header-title{
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  padding-right: 90px;
  .vui-card-title{
    font-size: 15px;
    color: $textColor;
  }
  .vui-card-sub-title{
    font-size: 14px;
    color: lighten($textColor, 30%);
  }
}
</style>
