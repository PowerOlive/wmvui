<template>
  <span class="vui-magic-sum" :class="magicClass" :style="magicStyle">{{startNum}}</span>
</template>

<script>
import Countup from 'countup'
export default {
  name: 'vui-magic-sum',
  mounted () {
    this.$nextTick(() => {
      this._countup = new Countup(this.$el, this.startNum, this.endNum, this.decimals, this.time, this.options)
      if (this.start) {
        this._countup.start()
      }
    })
  },
  props: {
    start: {
      type: Boolean,
      default: true
    },
    startNum: {
      type: Number,
      default: 0
    },
    endNum: {
      type: Number,
      required: true
    },
    // number of decimal places in number
    decimals: {
      type: Number,
      default: 0
    },
    // time in seconds
    time: {
      type: Number,
      default: 2
    },
    success: Boolean,
    info: Boolean,
    warn: Boolean,
    danger: Boolean,
    size: {
      type: Number,
      default: 32
    },
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    magicStyle () {
      return {
        'font-size': this.size + 'px'
      }
    },
    magicClass () {
      const {success, info, warn, danger} = this
      return {
        'vui-magic-sum-success': success,
        'vui-magic-sum-info': info,
        'vui-magic-sum-warn': warn,
        'vui-magic-sum-danger': danger
      }
    }
  },
  watch: {
    start (val) {
      if (val) {
        this._countup.start()
      }
    },
    endNum (val) {
      this._countup.update(val)
    }
  }
}
</script>
<style lang="less">
  @import "../styles/import.less";
  .vui-magic-sum{color: @primaryColor}
  .vui-magic-sum-success{color: @successColor}
  .vui-magic-sum-info{color: @infoColor}
  .vui-magic-sum-warn{color: @warnColor}
  .vui-magic-sum-danger{color: @dangerColor}
</style>
