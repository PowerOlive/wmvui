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
    inset: String,
    fontSize: String,
    color: String
  },
  computed: {
    dividerStyle () {
      return {
        'margin-left': this.inset ? this.inset : '',
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
  color: @secondaryTextColor;
  font-size: 14px;
  line-height: 48px;
  padding-left: 16px;
  width: 100%;
}
</style>
