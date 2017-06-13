<template>
  <div class="vui-flexbox" :class="{'vui-flex-col': orient === 'vertical', 'vui-flex-row': orient === 'horizontal'}" :style="styles">
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
    orient: {
      type: String,
      default: 'horizontal'
    },
    justify: String,
    align: String,
    wrap: String
  },
  computed: {
    styles () {
      return {
        'justify-content': this.justify,
        'align-items': this.align,
        'flex-wrap': this.wrap
      }
    }
  }
}
</script>

<style lang="less">
.vui-flexbox{
  width: 100%;
  text-align: left;
  display: flex;
  box-align: center;
  align-items: center;
}
.vui-flexbox .vui-flexbox-item {
  flex: 1;
  min-width: 20px;
  width: 0%;
}
.vui-flexbox-item > .vui-flexbox {
  width: 100%;
}
.vui-flexbox .vui-flexbox-item:first-child{
  margin-left: 0!important;
  margin-top: 0!important;
}
.vui-flex-col {
  box-orient: vertical;
  flex-direction: column;
}

.vui-flex-col > .vui-flexbox-item {
  width: 100%;
}

.vui-flex-row {
  box-direction: row;
  box-orient: horizontal;
  flex-direction: row;
}
</style>
