<template>
  <div class="vui-badge" :class="bdageClass">
    <span class="vui-badge-sub" v-if="showSub">
      <slot name="sub">
      </slot>
    </span>
    <span class="vui-badge-sup" :style="badgeStyle">
      <slot name="text">
        {{text}}
      </slot>
    </span>
  </div>
</template>

<script>
import {convertClass} from '../utils'
export default {
  name: 'vui-badge',
  props: {
    text: {
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
    dot: Boolean,
    size: Number
  },
  computed: {
    showSub () {
      return this.$slots && this.$slots.sub && this.$slots.sub.length > 0
    },
    badgeStyle () {
      return {
        'background-color': this.color,
        'width': this.size ? this.size + 'px' : '',
        'height': this.size ? this.size + 'px' : '',
        'line-height': this.size ? this.size + 'px' : ''
      }
    },
    bdageClass () {
      const {circle, round, primary, success, info, warn, danger, badgeClass, dot} = this
      const isFloat = this.$slots && this.$slots.sub && this.$slots.sub.length > 0
      const classNames = []
      if (circle) classNames.push('vui-badge-circle')
      if (round) classNames.push('vui-badge-round')
      if (primary) classNames.push('vui-badge-primary')
      if (success) classNames.push('vui-badge-success')
      if (info) classNames.push('vui-badge-info')
      if (warn) classNames.push('vui-badge-warn')
      if (danger) classNames.push('vui-badge-danger')
      if (isFloat) classNames.push('vui-badge-float')
      if (dot) classNames.push('vui-badge-dot')
      return classNames.concat(convertClass(badgeClass))
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-badge{
  position: relative;
  &,&-sup,&-sub{
    display: inline-block;
    vertical-align: middle;
  }
  &-sup{
    border-radius: 4px;
    padding: 0 6px;
    line-height: 1.5;
    font-size: 12px;
    background-color: @lighterPrimaryColor;
    color: @alternateTextColor;
    text-align: center;
  }
  &-float {
    .vui-badge-sup{
      position: absolute;
      top: -2px;
      right: -2px;
    }
  }
  &-round{
    .vui-badge-sup{
      border-radius:10000px;
    }
  }
  &-circle {
    .vui-badge-sup{
      border-radius: 50%;
      padding: 0;
      width: 16px;
      height: 16px;
      line-height:16px;
      overflow: hidden;
    }
  }
  &-dot{
    .vui-badge-sup{
      padding:0;
      border-radius:10000px;
    }
  }
  &-primary {
    .vui-badge-sup{
      background-color: @primaryColor;
    }
  }
  &-success {
    .vui-badge-sup{
      background-color: @successColor;
    }
  }
  &-info {
    .vui-badge-sup{
      background-color: @infoColor;
    }
  }
  &-warn {
    .vui-badge-sup{
      background-color: @warnColor;
    }
  }
  &-danger {
    .vui-badge-sup{
      background-color: @dangerColor;
    }
  }
}



</style>
