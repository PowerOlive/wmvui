<template>
<abstract-button
  @click="handleClick" 
  @keyboardFocus="handleKeyboardFocus" 
  @hover="handleHover" 
  @hoverExit="handleHoverExit"
  :disabled="disabled" 
  :type="type" 
  :href="href" 
  :target="target" 
  :style="buttonStyle" 
  :to="to" 
  :tag="tag" 
  :activeClass="activeClass" 
  :event="event" 
  :exact="exact" 
  :append="append" 
  :replace="replace"
  :rippleColor="rippleColor"
  :rippleOpacity="rippleOpacity"
  :keyboardFocused="keyboardFocused" 
  :centerRipple="false"
  :class="buttonClass" 
  class="vui-btn"
  wrapperClass="vui-btn-wrapper"
  >

  <span 
  class="vui-btn-label" 
  :class="labelClass" v-if="label && labelPosition === 'before'">
    {{label}}
  </span>

  <icon :icon="icon" :size="iconSize" :class="iconClass"></icon>
  <slot></slot>

  <span 
  class="vui-btn-label" 
  :class="labelClass" v-if="label && labelPosition === 'after'">
    {{label}}
  </span>

</abstract-button>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import routerMixin from '../internal/routerMixin'
import icon from '../icon'
import {getColor} from '../utils'
export default {
  name: 'vui-button',
  mixins: [routerMixin],
  props: {
    icon: {
      type: String
    },
    iconSize: {
      type: Number
    },
    iconClass: {
      type: [String, Array, Object]
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    type: {
      type: String
    },
    text: Boolean,
    label: {
      type: String
    },
    labelPosition: {
      type: String,
      default: 'after'
    },
    labelClass: {
      type: [String, Array, Object],
      default: ''
    },
    primary: Boolean,
    success: Boolean,
    info: Boolean,
    warn: Boolean,
    danger: Boolean,
    secondary: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    keyboardFocused: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    },
    target: {
      type: String
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    hoverColor: {
      type: String,
      default: ''
    },
    rippleColor: {
      type: String
    },
    rippleOpacity: {
      type: Number
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    },
    handleKeyboardFocus (isFocus) {
      this.$emit('keyboardFocus', isFocus)
      this.$emit('keyboard-focus', isFocus)  // 兼容 html 里的用法
    },
    handleHover (event) {
      this.$emit('hover', event)
    },
    handleHoverExit (event) {
      this.$emit('hoverExit', event)
      this.$emit('hover-exit', event)  // 兼容 html 里的用法
    }
  },
  computed: {
    buttonStyle () {
      return {
        'background-color': this.hover ? getColor(this.hoverColor) : getColor(this.backgroundColor),
        'color': getColor(this.color)
      }
    },
    buttonClass () {
      return {
        'vui-btn-text': this.text,
        'vui-btn-text-primary': this.text && this.primary,
        'vui-btn-text-success': this.text && this.success,
        'vui-btn-text-info': this.text && this.info,
        'vui-btn-text-warn': this.text && this.warn,
        'vui-btn-text-danger': this.text && this.danger,
        'vui-btn-primary': this.primary,
        'vui-btn-success': this.success,
        'vui-btn-info': this.info,
        'vui-btn-warn': this.warn,
        'vui-btn-danger': this.danger,
        'label-before': this.labelPosition === 'before',
        'vui-btn-full': this.fullWidth,
        'no-label': !this.label
      }
    }
  },
  components: {
    'abstract-button': abstractButton,
    icon
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-btn {
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
  height: 36px;
  line-height: 36px;
  min-width: 88px;
  transition-duration: 300ms;
  transition-timing-function: @easeOutFunction;
  transform: translate3d(0, 0, 0);
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  appearance: none;
  background: none;
  color: @textColor;
  .flex-shrink(0);
  margin: 0;
  outline: 0;
  padding: 0;
  cursor: pointer;
  &.hover {
    background-color: fade(@textColor, 10%);
  }
  &.disabled{
    color: @disabledColor;
    cursor: not-allowed;
    background: none;
  }
  .vui-icon{
    vertical-align: middle;
    margin-left: 8px;
    margin-right: 0;
    + .vui-btn-label {
      padding-left: 8px;
    }

  }
  &.no-label .vui-icon{
    margin-left: 0;
  }
  .vui-circle-ripple{
    color: @textColor;
  }
  &.label-before {
    padding-right: 8px;
    .vui-icon{
      margin-right: 4px;
      margin-left: 0;
    }
    .vui-btn-label {
      padding-right: 8px;
    }
  }
}
.vui-btn-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.vui-btn-full{
  width: 100%;
  display: block;
}

.vui-btn{
  &-primary{
    color:#fff;
    background-color: @primaryColor;
    &:hover{
      background-color: lighten(@primaryColor, 10%);
    }
  }
  &-success{
    color:#fff;
    background-color: @successColor;
    &:hover{
      background-color: lighten(@successColor, 10%);
    }
  }
  &-info{
    color:#fff;
    background-color: @infoColor;
    &:hover{
      background-color: lighten(@infoColor, 10%);
    }
  }
  &-warn{
    color:#fff;
    background-color: @warnColor;
    &:hover{
      background-color: lighten(@warnColor, 10%);
    }
  }
  &-danger{
    color:#fff;
    background-color: @dangerColor;
    &:hover{
      background-color: lighten(@dangerColor, 6%);
    }
  }
}
.vui-btn-text{
  background:transparent;
  &:hover{
    background-color: fade(@textColor, 10%);
  }
  &-primary{ color: @primaryColor }
  &-success{ color: @successColor }
  &-info{ color: @infoColor }
  &-warn{ color: @warnColor }
  &-danger{ color: @dangerColor }
}
.vui-btn-label{
  vertical-align: middle;
  padding-right: 16px;
  padding-left: 16px;
  font-size: 14px;
}

</style>
