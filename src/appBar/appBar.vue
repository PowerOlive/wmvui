<template>
<div class="vui-appbar" :class="['vui-paper-' + zDepth ]">
  <div class="left">
    <slot name="left"></slot>
  </div>
  <div class="vui-appbar-title" :class="titleClass">
    <slot>
      <span>{{title}}</span>
    </slot>
  </div>
  <div class="right">
    <slot name="right"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'vui-appbar',
  props: {
    title: {
      type: String,
      default: ''
    },
    titleClass: {
      type: [String, Array, Object]
    },
    zDepth: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-appbar {
  display: flex;
  align-self: flex-start;
  justify-content: flex-start;
  align-items: center;
  color: @alternateTextColor;
  background-color: @primaryColor;
  height: 56px;
  padding: 0 8px;
  width: 100%;
  .flex-shrink(0);
  z-index: 100;
  > .left,
  > .right{
    .flex-shrink(0);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
  }
  .vui-icon-button {
    color: inherit;
  }
  .vui-flat-button {
    color: inherit;
    height: 100%;
    line-height: 100%;
    min-width: auto;
  }
}

.vui-appbar-title {
  flex: 1;
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 20px;
  font-weight: 400;
  /* line-height: 56px; */
}

@media (min-width: 480px) {
  .vui-appbar-title {
    /* line-height: 64px; */
  }
  .vui-appbar {
    height: 64px;
  }
  .vui-appbar-title {
    font-size: 24px;
  }
}
</style>
