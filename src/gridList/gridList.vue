<template>
<div class="vui-grid-list" :style="gridListStyle">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'vui-grid-list',
  props: {
    cellHeight: {
      type: Number,
      default: 180
    },
    cols: {
      type: Number,
      default: 2
    },
    padding: {
      type: Number,
      default: 4
    }
  },
  computed: {
    gridListStyle () {
      return {
        margin: -this.padding / this.cols + 'px'
      }
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-grid-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
