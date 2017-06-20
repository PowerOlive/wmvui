<template>
<div class="vui-paper" :class="paperClass" :style="paperStyle">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'vui-paper',
  props: {
    circle: Boolean,
    round: Boolean,
    size: String,
    small: Boolean,
    min: Boolean,
    max: Boolean,
    level: {
      type: Number,
      default: 1
    }
  },
  computed: {
    paperClass () {
      var arr = []
      if (this.circle) arr.push('vui-paper-circle')
      if (this.round) arr.push('vui-paper-round')
      arr.push('vui-paper-' + this.level)
      return arr
    },
    paperStyle () {
      return {
        'width': this.size,
        'height': this.size
      }
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-paper {
  transition: all .45s @easeOutFunction;
  color: @textColor;
  background-color: @dialogBackgroundColor;
  &-round {
    border-radius: 10px;
  }

  &-circle {
    border-radius: 50%;
  }

  &-1 {
    .depth(1);
  }

  &-2 {
    .depth(2);
  }

  &-3 {
    .depth(4);
  }

  &-4 {
    .depth(4);
  }

  &-5 {
    .depth(5);
  }
}

</style>
