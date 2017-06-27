<template>
<span>
  <transition :name="transition" @after-enter="show()" @after-leave="hide()">
    <div class="vui-popup" ref="popup" v-if="open" :class="popupCss" :style="{'z-index': zIndex}">
      <loading v-if="loading" :type="loading.type" :showText="loading.showText" :color="loading.color" :size="loading.size"  />
      <icon v-if="icon" :icon="icon" />
      <svg-icon v-if="svgIcon" :icon="svgIcon"  />
      <slot></slot>
      <template v-if="data && value">
        <div class="vui-picker-hd">
          <vui-flex center>
            <vui-flex-item :auto="false">
              <vui-button label="取消" danger @click.native="cancel" />
            </vui-flex-item>
            <vui-flex-item>
              {{title}}
            </vui-flex-item>
            <vui-flex-item :auto="false">
              <vui-button label="确定" primary @click.native="ok"  />
            </vui-flex-item>
          </vui-flex>
        </div>
        <picker :data="data" v-model="value" :columns="columns" @on-change="pickerChange" />
      </template>
    </div>
  </transition>
</span>
</template>

<script>
import Popup from '../internal/popup'
import loading from '../loading'
import picker from '../picker'
import flexbox from '../flexbox/flexbox'
import flexboxItem from '../flexbox/flexboxItem'
import {convertClass} from '../utils'
import svgIcon from '../svgIcon'
import icon from '../icon'
export default {
  name: 'vui-popup',
  mixins: [Popup],
  components: {
    svgIcon,
    icon,
    loading,
    picker,
    'vui-flex': flexbox,
    'vui-flex-item': flexboxItem
  },
  props: {
    data: [Array, Object],
    value: Array,
    title: {
      type: String,
      default: '请选择'
    },
    columns: Number,
    popupClass: {
      type: [String, Object, Array]
    },
    toast: {
      type: [Boolean, Object]
    },
    loading: {
      type: [Boolean, Object]
    },
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
    },
    fill: Boolean
  },
  data () {
    return {
      popupShow: false,
      transition: this.popupTransition,
      pickerVal: [],
      pickerName: []
    }
  },
  created () {
    if (!this.popupTransition) {
      this.transition = `popup-slide-${this.position}`
    }
  },
  computed: {
    popupCss () {
      const {position, popupClass, toast, loading, fill} = this
      let classNames = []
      if (position) classNames.push('vui-popup-' + position)
      if (fill) classNames.push('vui-popup-fill')
      if (toast) {
        classNames.push('vui-popup-toast')
        if (toast.type === 'error') {
          classNames.push('vui-popup-toast-error')
        } else if (toast.type === 'success') {
          classNames.push('vui-popup-toast-success')
        } else if (toast.type === 'info') {
          classNames.push('vui-popup-toast-info')
        } else if (toast.type === 'warn') {
          classNames.push('vui-popup-toast-warn')
        } else {
          classNames.push('vui-popup-toast-text')
        }
      }
      if (loading) classNames.push('vui-popup-loading')
      return classNames.concat(convertClass(popupClass))
    }
  },
  methods: {
    show () {
      this.$emit('show')
    },
    hide () {
      this.$emit('hide')
    },
    cancel () {
      this.$emit('cancel')
    },
    ok () {
      this.$emit('ok', this.pickerName, this.pickerVal)
    },
    pickerChange (name, val) {
      this.pickerVal = val
      this.pickerName = name
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
.vui-popup {
  position: fixed;
  background-color: @dialogBackgroundColor;
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
  .vui-picker-hd{
    padding:10px;
    text-align: center;
    font-size: 16px;

  }
  &-toast,
  &-loading{
    background-color:rgba(0,0,0,.8);
    border-radius: 20px;
  }
  &-toast{
    color:#fff;
    padding:10px 20px;
  }
  &-loading{
    padding:24px;
    color:#fff;
  }
  &-toast-error{
    color: @dangerColor
  }
  &-toast-success{
    color: @successColor
  }
  &-toast-info{
    color: @infoColor
  }
  &-toast-warn{
    color: @warnColor
  }
  &-toast-text{
    color: #fff
  }
  &-top {
    top: 0;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }

  &-right {
    top: 50%;
    right: 0;
    bottom: auto;
    left: auto;
    transform: translate3d(0, -50%, 0);
  }
  &-bottom {
    top: auto;
    right: auto;
    bottom: 0;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }

  &-left {
    top: 50%;
    right: auto;
    bottom: auto;
    left: 0;
    transform: translate3d(0, -50%, 0);
  }
  &-center {
    top: 50%;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
  }
  &-fill{
    width:100%;
  }
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
