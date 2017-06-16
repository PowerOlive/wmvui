<template>
  <div flex :style="itemStyle" :class="itemClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vui-flexbox-item',
  props: {
    order: {
      type: [Number, String],
      default: 0
    },
    // grow: {
    //   type: [Number, String],
    //   default: 1
    // },
    // shrink: {
    //   type: [Number, String],
    //   default: 1
    // },
    // basis: {
    //   type: [Number, String],
    //   default: 1
    // },
    auto: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    itemStyle () {
      let styles = {}
      let marginName = this.$parent.vertical ? 'marginTop' : 'marginLeft'
      styles[marginName] = `${this.$parent.gutter}px`
      // styles['flex'] = `${this.grow} ${this.shrink} ${this.basis}`
      styles['order'] = this.order
      return styles
    },
    itemClass () {
      return {
        'vui-flex-item': this.auto
      }
    }
  }
}
</script>
