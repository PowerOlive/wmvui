<template>
  <hr class="vui-divider" :data-title="title" :style="dividerStyle" :class="dividerClass" />
</template>

<script>
export default {
  name: 'vui-divider',
  props: {
    top: String,
    right: String,
    bottom: String,
    left: String,
    padding: Array,
    title: String,
    dotted: Boolean
  },
  computed: {
    dividerStyle () {
      return {
        'padding': this.padding ? this.padding.join(' ') : '',
        'margin-top': this.top ? this.top : '',
        'margin-right': this.right ? this.right : '',
        'margin-bottom': this.bottom ? this.bottom : '',
        'margin-left': this.left ? this.left : ''
      }
    },
    dividerClass () {
      return {
        'vui-divider-title': this.title,
        'vui-divider-dotted': this.dotted
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
  &-dotted{
    &:after{
      height:0;
      border-top:1px dotted @borderColor;
      background:none;
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
