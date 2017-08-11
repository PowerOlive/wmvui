<template>
<div class="vui-progress" :style="{'display': type === 'circle' ? 'inline-block' : 'block'}">
  <template v-if="type === 'circle'">
    <div class="vui-progress-circle" :style="{'width': size + 'px', 'height': size + 'px'}">
      <circular v-if="mode === 'indeterminate'" :size="size" :state="getState" :color="color" :borderWidth="width" />
      <svg class="vui-progress-circle-determinate"
        :viewBox="'0 0 ' + size + ' ' + size" :style="circularSvgStyle"
        v-if="mode === 'determinate'">
        <circle 
          class="vui-progress-circle-determinate-path"
          :class="circleClass"
          :r="radius" :cx="size / 2" :cy="size / 2" fill="none"
          stroke-miterlimit="20" :stroke-width="width"
          :style="circularPathStyle"
        ></circle>
        <text v-if="showValue" x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="16">{{value}}%</text>
      </svg>
    </div>
  </template>
  <template v-else>
    <div class="vui-progress-line" :style="{'height': size + 'px', 'border-radius': (size ? size / 2 : '') + 'px'}">
      <div v-if="showValue" class="vui-progress-line-number">{{value}}%</div>
      <div class="vui-progress-line-inner" :style="linearStyle" :class="linearClass"></div>
    </div>
  </template>
</div>
</template>

<script>
import circular from '../internal/circular'
import {getColor} from '../utils'
export default {
  name: 'vui-progress',
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
      type: String,
      default: 'circle'
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
      default: 3
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
        'vui-progress-circle-success': success,
        'vui-progress-circle-info': info,
        'vui-progress-circle-warn': warn,
        'vui-progress-circle-danger': danger
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
    },
    percent () {
      return (this.value - this.min) / (this.max - this.min) * 100
    },
    linearStyle () {
      const {size, color, mode, percent} = this
      return {
        height: size + 'px',
        'background-color': getColor(color),
        'border-radius': (size ? size / 2 : '') + 'px',
        width: mode === 'determinate' ? percent + '%' : ''
      }
    },
    linearClass () {
      const {mode, success, info, warn, danger} = this
      return {
        'vui-progress-line-determinate': mode === 'determinate',
        'vui-progress-line-indeterminate': mode === 'indeterminate',
        'vui-progress-line-success': success,
        'vui-progress-line-info': info,
        'vui-progress-line-warn': warn,
        'vui-progress-line-danger': danger
      }
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

<style lang="scss">
@import "../styles/import.scss";
.vui-progress{
  /* 圆形 */
  &-circle{
    display: inline-block;
    position: relative;
    overflow: hidden;
    &-determinate{
      position: relative;
      &-path{
        stroke: $primaryColor;
        stroke-linecap: round;
        transition: all 0.3s linear;
      }
    }
    &-success{stroke: $successColor}
    &-info{stroke: $infoColor}
    &-warn{stroke: $warnColor}
    &-danger{stroke: $dangerColor}
  }
  /* 条形 */
  &-line{
    position: relative;
    height: 4px;
    display: block;
    width: 100%;
    background-color: lighten($primaryColor, 20%);
    border-radius: 2px;
    margin: 0px;
    text-align: center;
    overflow:hidden;
    &-indeterminate,
    &-determinate{
      position: absolute;
      top: 0;
      bottom: 0;
      background-color: $primaryColor;
      border-radius: 2px;
    }
    &-indeterminate{
      width: 40%;
      animation: vui-progress-line-animate 840ms $easeInOutFunction;
      animation-iteration-count: infinite;
    }
    &-determinate{
      left: 0;
      transition: width .3s linear;
    }
    &-success{background-color: $successColor}
    &-info{background-color: $infoColor}
    &-warn{background-color: $warnColor}
    &-danger{background-color: $dangerColor}
    &-inner{
        border-radius:1000px;
      &:before{
        content: "";
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left: 0;
        opacity:0;
        background:#fff;
        animation:progress-active 2s $easeInOutFunction infinite
      }
    }
    &-number{
      position: absolute;
      top:50%;
      width:100%;
      z-index:9;
      font-size: 12px;
      transform: translate3d(0,-50%,0);
      color:#fff;
    }
  }
}



@keyframes vui-progress-line-animate {
  0% {
    left: -40%;
  }
  100% {
    left: 100%;
  }
}

@keyframes progress-active{
    0%{
        opacity:.4;
        width:0;
    }
    100%{
        opacity:0;
        width:100%;
    }
}
</style>
