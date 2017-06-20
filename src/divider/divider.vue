<template>
  <hr class="vui-divider" :data-title="title" :style="dividerStyle" :class="dividerClass" />
</template>

<script>
export default {
  name: 'vui-divider',
  props: {
    inset: String,
    title: String
  },
  computed: {
    dividerStyle () {
      return {
        'margin-left': this.inset ? this.inset : ''
      }
    },
    dividerClass () {
      return {
        'vui-divider-title': this.title
      }
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-divider {
  margin: 0;
  border: none;
  position: relative;
  &:after,
  &:before{
    position: absolute;
    top:50%;
    left:0;
    right: 0;
    bottom: 0;
  }
  &:after{
    content:'';
    height: 1px;
    background-color: @borderColor;
    transform: translate3d(0, 0, 0);
  }
  &-title{
    &:before{
      content: attr(data-title);
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      text-align: center;
      background: #fff;
      z-index: 1;
      max-width: 30%;
      height:100%;
    }

  }
/*   &.inset{
  margin-left: 72px;
}
&.shallow-inset{
  margin-left: 16px;
} */
  html.pixel-ratio-2 & {
    /* .transform(scaleY(0.5)) */;
  }
  html.pixel-ratio-3 & {
    /* .transform(scaleY(0.33)) */;
  }
}
</style>
