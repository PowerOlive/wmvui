<template>
<div class="vui-linear-progress" :style="{'height': size + 'px', 'border-radius': (size ? size / 2 : '') + 'px'}">
  <div v-if="showValue" class="vui-linear-number">{{value}}%</div>
  <div class="vui-linear-inner" :style="linearStyle" :class="linearClass"></div>
</div>
<!-- <div class="progress">
    <span class="inner bg-teal" style="width:10%;height: 10px;"></span>
</div> -->
</template>

<script>
import {getColor} from '../utils'
export default {
  name: 'vui-linear-progress',
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
    value: {
      type: Number,
      default: 0
    },
    color: {
      type: String
    },
    success: Boolean,
    info: Boolean,
    warn: Boolean,
    danger: Boolean,
    size: {
      type: Number
    },
    showValue: Boolean
  },
  computed: {
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
        'vui-linear-progress-determinate': mode === 'determinate',
        'vui-linear-progress-indeterminate': mode === 'indeterminate',
        'vui-linear-progress-success': success,
        'vui-linear-progress-info': info,
        'vui-linear-progress-warn': warn,
        'vui-linear-progress-danger': danger
      }
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-linear-progress{
  position: relative;
  height: 4px;
  display: block;
  width: 100%;
  background-color: @lighterPrimaryColor;
  border-radius: 2px;
  margin: 0px;
  text-align: center;
  overflow:hidden;
  &-indeterminate,
  &-determinate{
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: @primaryColor;
    border-radius: 2px;
  }
  &-indeterminate{
    width: 40%;
    animation: vui-linear-progress-animate 840ms @easeInOutFunction;
    animation-iteration-count: infinite;
  }
  &-determinate{
    left: 0;
    transition: width .3s linear;
  }
  &-success{background-color: @successColor}
  &-info{background-color: @infoColor}
  &-warn{background-color: @warnColor}
  &-danger{background-color: @dangerColor}
}


@keyframes vui-linear-progress-animate {
  0% {
    left: -40%;
  }
  100% {
    left: 100%;
  }
}

.vui-linear-inner{
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
    animation:progress-active 2s @easeInOutFunction infinite
  }
}
.vui-linear-number{
  position: absolute;
  top:50%;
  width:100%;
  z-index:9;
  font-size: 12px;
  transform: translate3d(0,-50%,0);
  color:#fff;
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
