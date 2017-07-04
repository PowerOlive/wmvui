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

<style lang="less">
@import "../styles/import.less";
.vui-card-header {
  /* padding: 15px; */
  font-weight: 500;
  position: relative;
  white-space: nowrap;
  .vui-avatar {
    margin-right: 10px;
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
    color: fade(@textColor, 87%);
  }
  .vui-card-sub-title{
    font-size: 14px;
    color: fade(@textColor, 57%);
  }
}
</style>
