<template>
<span>
  <transition :name="transition" @after-enter="show()" @after-leave="hide()">
    <div class="mu-popup" ref="popup" v-if="open" :class="popupCss" :style="{'z-index': zIndex}">
      <circular v-if="loading" :size="loading.size" :color="loading.color" :strokeWidth="loading.strokeWidth"  />
      <icon v-if="icon" :icon="icon" />
      <svg-icon v-if="svgIcon" :icon="svgIcon"  />
      <slot></slot>
    </div>
  </transition>
</span>
</template>

<script>
import Popup from '../internal/popup'
import circular from '../internal/circular'
import {convertClass} from '../utils'
import svgIcon from '../svgIcon'
import icon from '../icon'
export default {
  name: 'mu-popup',
  mixins: [Popup],
  components: {
    svgIcon,
    icon,
    circular
  },
  props: {
    popupClass: {
      type: [String, Object, Array]
    },
    toast: {
      type: [Boolean, Object]
    },
    loading: Object,
    icon: String,
    svgIcon: {
      type: [String, Boolean]
    },
    popupTransition: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      popupShow: false,
      transition: this.popupTransition
    }
  },
  created () {
    if (!this.popupTransition) {
      this.transition = `popup-slide-${this.position}`
    }
  },
  computed: {
    popupCss () {
      const {position, popupClass, toast, loading} = this
      let classNames = []
      if (position) classNames.push('mu-popup-' + position)
      if (toast) {
        classNames.push('mu-popup-toast')
        if (toast.type === 'error') {
          classNames.push('mu-popup-toast-error')
        } else if (toast.type === 'success') {
          classNames.push('mu-popup-toast-success')
        } else if (toast.type === 'info') {
          classNames.push('mu-popup-toast-info')
        } else if (toast.type === 'warn') {
          classNames.push('mu-popup-toast-warn')
        } else {
          classNames.push('mu-popup-toast-text')
        }
      }
      if (loading) classNames.push('mu-popup-loading')
      return classNames.concat(convertClass(popupClass))
    }
  },
  methods: {
    show () {
      this.$emit('show')
    },
    hide () {
      this.$emit('hide')
    }
  },
  watch: {
    popupTransition (val, oldVal) {
      if (val === oldVal) return
      this.transition = val
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-popup {
  position: fixed;
  background-color: @textColor;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
  .vui-svg-icon{
    display: block;
    margin: 0 auto 10px;
  }
  .vui-icon{
    display: block;
    text-align: center;
    line-height:1;
    margin-bottom:5px;
    &:before{
      font-size: 50px;
    }
  }
  &.mu-popup-toast,
  &.mu-popup-loading{
    background-color:rgba(0,0,0,.8);
    border-radius: 20px;
  }
  &.mu-popup-toast{
    color:#fff;
    padding:10px 20px;
  }
  &.mu-popup-loading{
    padding:24px;
  }
  &.mu-popup-toast-error{
    color: @red
  }
  &.mu-popup-toast-success{
    color: @lightGreenA700
  }
  &.mu-popup-toast-info{
    color: @blue500
  }
  &.mu-popup-toast-warn{
    color: @deepOrange500
  }
  &.mu-popup-toast-text{
    color: #fff
  }
}
.mu-popup-top {
  top: 0;
  right: auto;
  bottom: auto;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
}

.mu-popup-right {
  top: 50%;
  right: 0;
  bottom: auto;
  left: auto;
  transform: translate3d(0, -50%, 0);
}
.mu-popup-bottom {
  top: auto;
  right: auto;
  bottom: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
}

.mu-popup-left {
  top: 50%;
  right: auto;
  bottom: auto;
  left: 0;
  transform: translate3d(0, -50%, 0);
}
.mu-popup-center {
  top: 50%;
  right: auto;
  bottom: auto;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
}

.popup-slide-top-enter-active,
.popup-slide-top-leave-active,
.popup-slide-right-enter-active,
.popup-slide-right-leave-active,
.popup-slide-bottom-enter-active,
.popup-slide-bottom-leave-active,
.popup-slide-left-enter-active,
.popup-slide-left-leave-active {
  transition: transform .3s ease;
}

.popup-slide-top-enter,
.popup-slide-top-leave-active {
  transform: translate3d(-50%, -100%, 0);
}

.popup-slide-right-enter,
.popup-slide-right-leave-active {
  transform: translate3d(100%, -50%, 0);
}

.popup-slide-bottom-enter,
.popup-slide-bottom-leave-active {
  transform: translate3d(-50%, 100%, 0);
}

.popup-slide-left-enter,
.popup-slide-left-leave-active {
  transform: translate3d(-100%, -50%, 0);
}

.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: opacity .3s;
}

.popup-fade-enter,
.popup-fade-leave-active {
  opacity: 0;
}
</style>
