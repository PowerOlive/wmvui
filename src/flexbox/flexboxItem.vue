<template>
  <div flex :style="itemStyle" :class="itemClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vui-flex-item',
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
      if (this.$parent.vertical) {
        styles['marginTop'] = `${this.$parent.gutter}px`
      } else if (this.$parent.wrap) {
        styles['marginBottom'] = `${this.$parent.gutter}px`
        styles['marginRight'] = `${this.$parent.gutter}px`
      } else {
        styles['marginLeft'] = `${this.$parent.gutter}px`
      }
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
