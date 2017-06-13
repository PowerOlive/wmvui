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
    primary: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    badgeClass: {
      type: [String, Object, Array]
    }
  },
  computed: {
    badgeStyle () {
      return {
        'background-color': getColor(this.color)
      }
    },
    badgeInternalClass () {
      const {circle, primary, secondary, badgeClass} = this
      const isFloat = this.$slots && this.$slots.default && this.$slots.default.length > 0
      const classNames = []
      if (circle) classNames.push('vui-badge-circle')
      if (primary) classNames.push('vui-badge-primary')
      if (secondary) classNames.push('vui-badge-secondary')
      if (isFloat) classNames.push('vui-badge-float')
      return classNames.concat(convertClass(badgeClass))
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-badge-container{
  display: inline-block;
  position: relative;
}
.vui-badge{
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 6px;
  line-height: 1.5;
  font-size: 12px;
  font-style: normal;
  background-color: @lighterPrimaryColor;
  color: @alternateTextColor;
  border-radius: 3px;
  overflow: hidden;
}

.vui-badge-float {
  position: absolute;
  top: -12px;
  right: -12px;
}
.vui-badge-circle {
  border-radius: 50%;
  padding: 0;
  width: 24px;
  height: 24px;
  overflow: hidden;
}
.vui-badge-primary {
  background-color: @primaryColor;
}

.vui-badge-secondary {
  background-color: @accentColor;
}

</style>
