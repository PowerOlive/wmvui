<template>
<div class="vui-loading" :style="{'width': size + 'px', 'height': size + 'px'}" :class="loadingClass">
  <template v-if="type === 'line'">
    <span class="vui-loading-line"></span>
    <span class="vui-loading-line"></span>
    <span class="vui-loading-line"></span>
    <span class="vui-loading-line"></span>
    <span class="vui-loading-line"></span>
  </template>
  <template v-else>
    <circular :size="size" :color="color" :borderWidth="width" />
  </template>
</div>
</template>

<script>
import circular from '../internal/circular'
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
      default: 24
    },
    width: {
      type: Number,
      default: 3
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
  display: inline-block;
  &-line{
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
