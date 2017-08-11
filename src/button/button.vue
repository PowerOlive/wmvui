<template>
  <!-- @keyboardFocus="handleKeyboardFocus" 
  @hover="handleHover" 
  @hoverExit="handleHoverExit"
    -->
<abstract-button
  @click="handleClick" 
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
  :rippleColor="activeColor"
  :rippleOpacity="activeOpacity"
  :keyboardFocused="keyboardFocused" 
  :centerRipple="false"
  :class="buttonClass" 
  class="vui-btn"
  wrapperClass="vui-btn-wrapper"
  >
  
  <template v-if="label && iconRight">
    <span 
    class="vui-btn-label">
      {{label}}
    </span>
    <icon v-if="icon" :icon="icon" :size="iconSize"></icon>
    <slot></slot>
  </template>
  <template v-else>
    <icon v-if="icon" :icon="icon" :size="iconSize"></icon>
    <slot></slot>
    <span 
    v-if="label"
    class="vui-btn-label">
      {{label}}
    </span>
  </template>




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
    label: String,
    icon: [Boolean, String],
    iconSize: Number,
    iconRight: Boolean,
    circle: [Boolean, Number],
    round: Boolean,
    text: Boolean,
    invert: Boolean,
    primary: Boolean,
    success: Boolean,
    info: Boolean,
    warn: Boolean,
    danger: Boolean,
    padding: Array,
    disabled: {
      type: Boolean,
      default: false
    },
    type: String,
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
    // hoverColor: {
    //   type: String,
    //   default: ''
    // },
    activeColor: {
      type: String
    },
    activeOpacity: {
      type: Number
    },
    fill: {
      type: Boolean,
      default: false
    },
    keyboardFocused: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
    // handleKeyboardFocus (isFocus) {
    //   this.$emit('keyboardFocus', isFocus)
    //   this.$emit('keyboard-focus', isFocus)  // 兼容 html 里的用法
    // },
    // handleHover (event) {
    //   this.$emit('hover', event)
    // },
    // handleHoverExit (event) {
    //   this.$emit('hoverExit', event)
    //   this.$emit('hover-exit', event)  // 兼容 html 里的用法
    // }
  },
  computed: {
    buttonStyle () {
      return {
        'background-color': this.hover ? getColor(this.hoverColor) : getColor(this.backgroundColor),
        'color': getColor(this.color),
        'width': this.circle ? this.circle + 'px' : '',
        'height': this.circle ? this.circle + 'px' : '',
        'padding': this.padding ? (this.padding[0] + ' ' + this.padding[1]) : ''
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
        'vui-btn-invert': this.invert,
        'vui-btn-invert-primary': this.invert && this.primary,
        'vui-btn-invert-success': this.invert && this.success,
        'vui-btn-invert-info': this.invert && this.info,
        'vui-btn-invert-warn': this.invert && this.warn,
        'vui-btn-invert-danger': this.invert && this.danger,
        'vui-label-right': this.iconRight,
        'vui-btn-circle': this.circle,
        'vui-btn-round': this.round,
        'vui-btn-fill': this.fill
      }
    }
  },
  components: {
    'abstract-button': abstractButton,
    icon
  }
}
</script>

<style lang="scss">
@import "../styles/import.scss";
.vui-btn {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  border-radius: 2px;
  transition-duration: 300ms;
  transition-timing-function: $easeOutFunction;
  transform: translate3d(0, 0, 0);
  text-decoration: none;
  text-transform: uppercase;
  border:none;
  /* border:2px solid transparent; */
  appearance: none;
  background: none;
  color: $textColor;
  // .flex-shrink(0);
  margin: 0;
  outline: 0;
  padding:5px 22px;
  cursor: pointer;
  /* &.hover {
    background-color: lighten($textColor, 50%);
  } */
/*   &.vui-btn-icon.hover{
  background-color:transparent
} */
  &.disabled,
  &[disabled]{
    cursor: not-allowed;
    opacity:.5;
  }
  .vui-icon{
    vertical-align: middle;
    margin-right:6px;
  }
  &.vui-label-right {
    .vui-icon{
      margin-left:6px;
      margin-right:0;
    }
  }
  &-circle{
    overflow:hidden;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    border:none;
    padding:0;
    .vui-icon{
      margin-right: 0;
    }
  /*   &:hover{
    background:transparent
  } */
  }
  &-round{
    border-radius: 1000px;
    overflow: hidden;
  }
  &-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  &-fill{
    width: 100%;
    display: block;
  }
  &-primary{
    color:#fff;
    background-color: $primaryColor;
    /* &.hover{
      background-color: lighten($primaryColor, 10%);
    } */
  }
  &-success{
    color:#fff;
    background-color: $successColor;
    /* &.hover{
      background-color: lighten($successColor, 10%);
    } */
  }
  &-info{
    color:#fff;
    background-color: $infoColor;
    /* &.hover{
      background-color: lighten($infoColor, 10%);
    } */
  }
  &-warn{
    color:#fff;
    background-color: $warnColor;
    /* &.hover{
      background-color: lighten($warnColor, 10%);
    } */
  }
  &-danger{
    color:#fff;
    background-color: $dangerColor;
    /* &.hover{
      background-color: lighten($dangerColor, 6%);
    } */
  }
  &-invert{
    background:transparent;
    border:2px solid $borderColor;
    padding: 3px 22px;
    /* &-primary,
    &-success,
    &-info,
    &-warn,
    &-danger{
      &.hover{
        color:#fff;
        border-color:transparent;
      }
    } */
    &-primary{
      color:$primaryColor;
      border-color:$primaryColor;
    }
    &-success{
      color:$successColor;
      border-color:$successColor;
    }
    &-info{
      color:$infoColor;
      border-color:$infoColor;
    }
    &-warn{
      color:$warnColor;
      border-color:$warnColor;
    }
    &-danger{
      color:$dangerColor;
      border-color:$dangerColor;
    }
  }
  &-text{
    background:transparent;
    /* &.hover{
      background-color: lighten($textColor, 50%);
    } */
    &-primary{ color: $primaryColor }
    &-success{ color: $successColor }
    &-info{ color: $infoColor }
    &-warn{ color: $warnColor }
    &-danger{ color: $dangerColor }
  }
  &-label{
    vertical-align: middle;
    font-size: 14px;
  }
}



</style>
