<template>
<div class="vui-loading" :class="loadingClass">
  <template v-if="type === 'line'">
    <div class="vui-loading-wrap" :style="{'width': size + 'px', 'height': size + 'px'}">
      <template v-for="item in 5">
        <span class="vui-loading-line" :style="loadingStyle"></span>
      </template>
    </div>
    <p v-if="showText" class="vui-loading-text">{{text}}</p>
  </template>
  <template v-else>
    <circular :size="size" :color="color" :borderWidth="width" />
    <p v-if="showText" class="vui-loading-text">{{text}}</p>
  </template>
</div>
</template>

<script>
import circular from '../internal/circular'
import {getColor} from '../utils'
export default {
  name: 'vui-loading',
  props: {
    type: {
      type: String,
      default: 'circle'
    },
    success: Boolean,
    info: Boolean,
    warn: Boolean,
    danger: Boolean,
    color: String,
    size: {
      type: Number,
      default: 28
    },
    width: {
      type: Number,
      default: 3
    },
    showText: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: '加载中'
    }
  },
  computed: {
    loadingClass () {
      return {
        'vui-loading-success': this.success,
        'vui-loading-info': this.info,
        'vui-loading-warn': this.warn,
        'vui-loading-danger': this.danger
      }
    },
    loadingStyle () {
      return {
        'background-color': getColor(this.color)
      }
    }
  },
  components: {
    circular
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-loading{
  &,&-wrap{
    text-align: center;
    display: inline-block;
    vertical-align: middle;
  }
  &-text{
    margin:10px 0 0;
  }
  &-line{
    height:100%;
    background-color:@primaryColor;
    display: inline-block;
    width:calc((100% - 40px) / 8);
    animation-fill-mode: both;
    margin:0 2px;
    &:nth-child(1){ 
      margin-left:0;
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
      margin-right:0;
      animation:line-scale 1s .5s infinite cubic-bezier(0.4, 0, 0.2, 1)
    }
  }
  &-success{
    .vui-loading-line{background-color: @successColor}
    .vui-circle{border-color: @successColor}
  }
  &-info{
    .vui-loading-line{background-color: @infoColor}
    .vui-circle{border-color: @infoColor}
  }
  &-warn{
    .vui-loading-line{background-color: @warnColor}
    .vui-circle{border-color: @warnColor}
  }
  &-danger{
    .vui-loading-line{background-color: @dangerColor}
    .vui-circle{border-color: @dangerColor}
  }

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
