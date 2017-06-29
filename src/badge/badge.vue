<template>
  <div class="vui-badge-container">
    <slot></slot>
    <em class="vui-badge" :style="badgeStyle" :class="badgeInternalClass">
      <slot name="content">
        {{content}}
      </slot>
    </em>
  </div>
</template>

<script>
import {getColor, convertClass} from '../utils'
export default {
  name: 'vui-badge',
  props: {
    content: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    primary: Boolean,
    success: Boolean,
    info: Boolean,
    warn: Boolean,
    danger: Boolean,
    round: Boolean,
    circle: {
      type: Boolean,
      default: false
    },
    size: Number,
    badgeClass: {
      type: [String, Object, Array]
    }
  },
  computed: {
    badgeStyle () {
      return {
        'background-color': getColor(this.color),
        'width': this.size ? this.size + 'px' : '',
        'height': this.size ? this.size + 'px' : ''
      }
    },
    badgeInternalClass () {
      const {circle, round, primary, success, info, warn, danger, badgeClass} = this
      const isFloat = this.$slots && this.$slots.default && this.$slots.default.length > 0
      const classNames = []
      if (circle) classNames.push('vui-badge-circle')
      if (round) classNames.push('vui-badge-round')
      if (primary) classNames.push('vui-badge-primary')
      if (success) classNames.push('vui-badge-success')
      if (info) classNames.push('vui-badge-info')
      if (warn) classNames.push('vui-badge-warn')
      if (danger) classNames.push('vui-badge-danger')
      if (isFloat) classNames.push('vui-badge-float')
      return classNames.concat(convertClass(badgeClass))
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-badge{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 6px;
  line-height: 1.5;
  font-size: 12px;
  font-style: normal;
  background-color: @lighterPrimaryColor;
  color: @alternateTextColor;
  border-radius: 4px;
  overflow: hidden;
  &-container{
    display: inline-block;
    position: relative;
  }
  &-float {
    position: absolute;
    top: -5px;
    right: -5px;
  }
  &-round{
    border-radius:10000px;
  }
  &-circle {
    border-radius: 50%;
    padding: 0;
    width: 24px;
    height: 24px;
    overflow: hidden;
  }
  &-primary {background-color: @primaryColor;}
  &-success {background-color: @successColor;}
  &-info {background-color: @infoColor;}
  &-warn {background-color: @warnColor;}
  &-danger {background-color: @dangerColor;}
}


</style>
