<template>
  <div class="vui-flex" :class="{'vui-flex-col': orient === 'vertical', 'vui-flex-row': orient === 'horizontal'}" :style="styles">
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
  justify-content:flex-start
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
.vui-flex .vui-flex-item:first-child{
  margin-left: 0!important;
  margin-top: 0!important;
}
.vui-flex-col {
  box-orient: vertical;
  flex-direction: column;
}

.vui-flex-col > .vui-flex-item {
  width: 100%;
}

.vui-flex-row {
  box-direction: row;
  box-orient: horizontal;
  flex-direction: row;
}

</style>
