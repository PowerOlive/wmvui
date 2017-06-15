<template>
<div class="vui-paper" :class="paperClass">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'vui-paper',
  props: {
    circle: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: true
    },
    zDepth: {
      type: Number,
      default: 1
    }
  },
  computed: {
    paperClass () {
      var arr = []
      if (this.circle) arr.push('vui-paper-circle')
      if (this.rounded) arr.push('vui-paper-round')
      arr.push('vui-paper-' + this.zDepth)
      return arr
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-paper {
  padding-bottom:1px;
  transition: all .45s @easeOutFunction;
  color: @textColor;
  background-color: @dialogBackgroundColor;
  .depth(1);
}

.vui-paper-round {
  border-radius: 2px;
}

.vui-paper-circle {
  border-radius: 50%;
}

.vui-paper-1 {
  .depth(1);
}

.vui-paper-2 {
  .depth(2);
}

.vui-paper-3 {
  .depth(4);
}

.vui-paper-4 {
  .depth(4);
}

.vui-paper-5 {
  .depth(5);
}
</style>
