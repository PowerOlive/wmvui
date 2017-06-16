<template>
  <div class="vui-flex" :class="itemClass" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vui-flexbox',
  props: {
    gutter: {
      type: Number,
      default: 8
    },
    vertical: {
      type: Boolean,
      default: false
    },
    level: {
      type: Boolean,
      default: true
    },
    // justify: String,
    // align: String,
    wrap: {
      type: Boolean,
      default: false
    },
    start: {
      type: Boolean,
      default: true
    },
    end: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    middle: {
      type: Boolean,
      default: false
    },
    between: {
      type: Boolean,
      default: false
    },
    around: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    styles () {
      return {
        // 'justify-content': this.justify,
        // 'align-items': this.align,
        'flex-wrap': this.wrap ? 'wrap' : 'nowrap'
      }
    },
    itemClass () {
      return {
        'vui-flex-vertical': this.vertical,
        'vui-flex-start': this.start,
        'vui-flex-end': this.end,
        'vui-flex-center': this.center,
        'vui-flex-top': this.top,
        'vui-flex-bottom': this.bottom,
        'vui-flex-middle': this.middle,
        'vui-flex-between': this.between,
        'vui-flex-around': this.around
      }
    }
  }
}
</script>

<style lang="less">
.vui-flex{
  display: flex;
}
.vui-flex-ver {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.vui-flex-start{
  justify-content:flex-start;
}
.vui-flex-end{
  justify-content:flex-end
}
.vui-flex-center{
  justify-content: center;
}
.vui-flex-top{
  align-items:flex-start
}
.vui-flex-bottom{
  align-items:flex-end
}
.vui-flex-middle{
  align-items: center;
}
.vui-flex-between{
  justify-content: space-between;
}
.vui-flex-around{
  justify-content: space-around;
}
.vui-flex-item {
  flex: 1;
  /* width: 0%; */
}
.vui-flex-item > .vui-flex {
  width: 100%;
}
.vui-flex div[flex]:first-child{
  margin-left: 0!important;
  margin-top: 0!important;
}
.vui-flex-vertical {
  box-orient: vertical;
  flex-direction: column;
}

.vui-flex-vertical > .vui-flex-item {
  width: 100%;
}

.vui-flex-horizontal {
  /* box-direction: row;
  box-orient: horizontal;
  flex-direction: row; */
}

</style>
