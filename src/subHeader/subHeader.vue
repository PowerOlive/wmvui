<template>
  <div class="vui-sub-header" :style="dividerStyle">
    <slot></slot>
  </div>
</template>

<script>
import {getColor} from '../utils'
export default {
  name: 'vui-sub-header',
  props: {
    padding: Array,
    top: String,
    right: String,
    bottom: String,
    left: String,
    fontSize: String,
    color: String
  },
  computed: {
    dividerStyle () {
      return {
        'padding': this.padding ? this.padding.join(' ') : '',
        'margin-top': this.top ? this.top : '',
        'margin-right': this.right ? this.right : '',
        'margin-bottom': this.bottom ? this.bottom : '',
        'margin-left': this.left ? this.left : '',
        'font-size': this.fontSize ? this.fontSize : '',
        'color': getColor(this.color)
      }
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-sub-header {
  color: @primaryTextColor;
  font-size: 14px;
  line-height: 48px;
  /* padding-left: 16px; */
  width: 100%;
}
</style>
