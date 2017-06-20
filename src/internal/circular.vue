<template>
  <div class="vui-loading">
    <template v-if="type === 0">
      <div class="vui-circle-wrapper active" :style="{'width': size + 'px', 'height': size + 'px'}">
        <div class="vui-circle-spinner active" :class="circleClass" :style="spinnerStyle">
            <div class="vui-circle-clipper left">
                <div class="vui-circle" :style="{'border-width': borderWidth + 'px'}"></div>
            </div>
            <div class="vui-circle-gap-patch">
                <div class="vui-circle"></div>
            </div>
            <div class="vui-circle-clipper right">
                <div class="vui-circle" :style="{'border-width': borderWidth + 'px'}"></div>
            </div>
        </div>
      </div>
    </template>
    <template v-else-if="type === 1">
      <span class="line" :class="lineClass"></span>
      <span class="line" :class="lineClass"></span>
      <span class="line" :class="lineClass"></span>
      <span class="line" :class="lineClass"></span>
      <span class="line" :class="lineClass"></span>
    </template>
  </div>
</template>

<script>
import {getColor} from '../utils'
export default {
  name: 'circle',
  props: {
    size: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: ''
    },
    type: {
      type: Number,
      default: 0
    },
    borderWidth: {
      type: Number,
      default: 3
    },
    state: ''
  },
  computed: {
    spinnerStyle () {
      return {
        'border-color': getColor(this.color)
      }
    },
    circleClass () {
      const {state} = this
      return {
        'vui-circle-success': state === 'success',
        'vui-circle-info': state === 'info',
        'vui-circle-warn': state === 'warn',
        'vui-circle-danger': state === 'danger'
      }
    },
    lineClass () {
      const {state} = this
      return {
        'vui-line-success': state === 'success',
        'vui-line-info': state === 'info',
        'vui-line-warn': state === 'warn',
        'vui-line-danger': state === 'danger'
      }
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-circle-wrapper {
  display: inline-block;
  position: relative;
  width: 48px;
  height: 48px;
  &.active{
    -webkit-animation: container-rotate 1568ms linear infinite;
    animation: container-rotate 1568ms linear infinite;
  }
  .vui-circle {
    border-radius: 50%;
  }
  .left {
    float: left !important;
  }
  .right {
    float: right !important;
  }

}
.vui-circle-spinner {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-color: @primaryColor;
  opacity: 1;
  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.vui-circle-success{border-color: @successColor}
.vui-circle-info{border-color: @infoColor}
.vui-circle-warn{border-color: @warnColor}
.vui-circle-danger{border-color: @dangerColor}
.vui-circle-clipper {
  display: inline-block;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
  border-color: inherit;
  .vui-circle {
    width: 200%;
    height: 100%;
    border-width: 3px;
    border-style: solid;
    border-color: inherit;
    border-bottom-color: transparent !important;
    border-radius: 50%;
    -webkit-animation: none;
    animation: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
  }
}

.vui-circle-gap-patch {
  position: absolute;
  top: 0;
  left: 45%;
  width: 10%;
  height: 100%;
  overflow: hidden;
  border-color: inherit;
  .vui-circle {
    width: 1000%;
    left: -450%;
  }
}


.vui-circle-spinner.active .vui-circle-clipper.left .vui-circle {
  -webkit-animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.vui-circle-spinner.active .vui-circle-clipper.right .vui-circle {
    -webkit-animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
    animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.vui-circle-clipper.left .vui-circle {
  left: 0;
  border-right-color: transparent !important;
  -webkit-transform: rotate(129deg);
  transform: rotate(129deg);
}

.vui-circle-clipper.right .vui-circle {
    left: -100%;
    border-left-color: transparent !important;
    -webkit-transform: rotate(-129deg);
    transform: rotate(-129deg);
}

@keyframes fill-unfill-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  to {
    transform: rotate(1080deg);
  }
}

@keyframes left-spin {
  from {
    transform: rotate(130deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  to {
    transform: rotate(130deg);
  }
}

@keyframes right-spin {
    from {
        transform: rotate(-130deg)
    }
    50% {
        transform: rotate(5deg)
    }
    to {
        transform: rotate(-130deg)
    }
}

@keyframes container-rotate {
  to {
    transform: rotate(360deg);
  }
}

.vui-loading{
  height:100%;
  .line{
    height:100%;
    background-color:@primaryColor;
    display: inline-block;
    width:calc(100 / 10%);
    animation-fill-mode: both;
    &:nth-child(1){ 
      animation:line-scale 1s .1s infinite cubic-bezier(0.4, 0, 0.2, 1)
    }
    &:nth-child(2){
      animation:line-scale 1s .2s infinite cubic-bezier(0.4, 0, 0.2, 1)
    }
    &:nth-child(3){ 
      animation:line-scale 1s .3s infinite cubic-bezier(0.4, 0, 0.2, 1)
    }
    &:nth-child(4){
      animation:line-scale 1s .4s infinite cubic-bezier(0.4, 0, 0.2, 1)
    }
    &:nth-child(5){
      animation:line-scale 1s .5s infinite cubic-bezier(0.4, 0, 0.2, 1)
    }
  }
  .vui-line-success{background-color: @successColor}
  .vui-line-info{background-color: @infoColor}
  .vui-line-warn{background-color: @warnColor}
  .vui-line-danger{background-color: @dangerColor}
}
@keyframes line-scale {
  0%{
    transform: scaley(1)
  }
  50% {
    transform: scaley(.4)
  }
  100% {
    transform: scaley(1)
  }
}


</style>
