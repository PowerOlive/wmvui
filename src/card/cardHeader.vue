<template>
<div class="vui-card-header">
  <slot name="avatar"></slot>
  <div class="vui-card-header-title" v-if="title || subTitle">
    <div class="vui-card-title" :class="titleClass">
      {{title}}
    </div>
    <div class="vui-card-sub-title" :class="subTitleClass">
      {{subTitle}}
    </div>
  </div>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'vui-card-header',
  props: {
    title: {
      type: String
    },
    titleClass: {
      type: [String, Array, Object]
    },
    subTitle: {
      type: String
    },
    subTitleClass: {
      type: [String, Array, Object]
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-card-header {
  padding: 16px;
  font-weight: 500;
  position: relative;
  white-space: nowrap;
  .vui-avatar {
    margin-right: 16px;
  }
}

.vui-card-header-title{
  display: inline-block;
  vertical-align: top;
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
