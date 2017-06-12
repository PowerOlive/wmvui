<template>
<transition name="mu-toast">
  <div class="mu-toast"  v-show="show" :class="toastClass" :style="{'z-index': zIndex}">
    <svg-icon :icon="svgIcon"  />
    {{message}}
  </div>
</transition>
</template>

<script>
import {getZIndex} from '../internal/popup/utils'
import svgIcon from '../svgIcon'
export default {
  components: {
    svgIcon
  },
  name: 'mu-toast',
  props: {
    value: Boolean,
    message: {
      type: String
    },
    svgIcon: {
      type: String
    },
    position: String,
    time: {
      type: Number,
      default: 2000
    },
    isShowMask: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: false,
      zIndex: getZIndex()
    }
  },
  created () {
    if (this.value) {
      this.show = true
    }
  },
  computed: {
    toastClass () {
      return {
        'vux-toast-top': this.position === 'top',
        'vux-toast-bottom': this.position === 'bottom'
      }
    }
  },
  watch: {
    show (val) {
      if (val) {
        this.$emit('input', true)
        this.$emit('on-show')
        // this.fixSafariOverflowScrolling('auto')
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.show = false
          this.$emit('input', false)
          this.$emit('on-hide')
          // this.fixSafariOverflowScrolling('touch')
        }, this.time)
      }
    },
    value (val) {
      this.show = val
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-toast {
  padding:10px 24px;
  background-color: @textColor;
  color: @alternateTextColor;
  border-radius: 24px;
  .ellipsis();
  position: fixed;
  .vui-svg-icon{
    display: block;
    margin: 0 auto 10px;
  }
}

.mu-toast-enter-active,.mu-toast-leave-active{
  transition: transform .4s @easeOutFunction, opacity .4s @easeOutFunction;
  backface-visibility: hidden;
}

.mu-toast-enter,
.mu-toast-leave-active{
  transform: translate3d(0, 100%, 0);
  opacity: 0;
}

</style>
<style lang="scss">
.mu-toast{
  &,
  &.vux-toast-middle{
    top:50%;
    left:50%;
    transform: translate3D(-50%,-50%,0);
  }
  &.vux-toast-top {
    top:5%;
  }
  &.vux-toast-bottom {
    top: auto;
    bottom:5%;
  }
}

</style>
