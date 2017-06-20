<template>
<div class="vui-circle-progress" :style="{'width': size + 'px', 'height': size + 'px'}">
  <circular v-if="mode === 'indeterminate'" :type="type" :size="size" :state="getState" :color="color" :borderWidth="width" />
  <svg class="vui-circle-progress-determinate"
    :viewBox="'0 0 ' + size + ' ' + size" :style="circularSvgStyle"
    v-if="mode === 'determinate'">
    <circle 
      class="vui-circle-progress-determinate-path"
      :class="circleClass"
      :r="radius" :cx="size / 2" :cy="size / 2" fill="none"
      stroke-miterlimit="20" :stroke-width="width"
      :style="circularPathStyle"
    ></circle>
    <text v-if="showValue" x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="16">{{value}}%</text>
  </svg>
</div>
</template>

<script>
import circular from '../internal/circular'
import {getColor} from '../utils'
export default {
  name: 'vui-circular-progress',
  props: {
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: 'indeterminate',
      validator (val) {
        return ['indeterminate', 'determinate'].indexOf(val) !== -1
      }
    },
    type: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    },
    success: Boolean,
    info: Boolean,
    warn: Boolean,
    danger: Boolean,
    color: String,
    size: {
      type: Number,
      default: 24
    },
    showValue: Boolean,
    width: {
      type: Number,
      default: 3
    }
  },
  computed: {
    radius () {
      return (this.size - this.width) / 2
    },
    circularSvgStyle () {
      return {
        width: this.size,
        height: this.size
      }
    },
    circularPathStyle () {
      const relVal = this.getRelativeValue()
      return {
        stroke: getColor(this.color),
        'stroke-dasharray': `${this.getArcLength(relVal)}, ${this.getArcLength(1)}`
      }
    },
    circleClass () {
      const {success, info, warn, danger} = this
      return {
        'vui-circle-progress-success': success,
        'vui-circle-progress-info': info,
        'vui-circle-progress-warn': warn,
        'vui-circle-progress-danger': danger
      }
    },
    getState () {
      var s = ''
      const {success, info, warn, danger} = this
      if (success) {
        s = 'success'
      } else if (info) {
        s = 'info'
      } else if (warn) {
        s = 'warn'
      } else if (danger) {
        s = 'danger'
      } else {
        s = 'primary'
      }
      return s
    }
  },
  methods: {
    // material ui 两个计算方法
    getArcLength (fraction) {
      return fraction * Math.PI * (this.size - this.width)
    },
    getRelativeValue () {
      const {value, min, max} = this
      const clampedValue = Math.min(Math.max(min, value), max)
      return clampedValue / (max - min)
    }
  },
  components: {
    circular
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-circle-progress{
  display: inline-block;
  position: relative;
  overflow: hidden;

  &-determinate{
    position: relative;
    &-path{
      stroke: @primaryColor;
      stroke-linecap: round;
      transition: all 0.3s linear;
    }
  }

  &-success{stroke: @successColor}
  &-info{stroke: @infoColor}
  &-warn{stroke: @warnColor}
  &-danger{stroke: @dangerColor}
}
</style>
