<template>
<div>
   <abstract-button  class="vui-menu-item-wrapper" :class="{'active': active}"
      :href="href" :target="target" ref="button" :centerRipple="false"
      :to="to" :tag="tag" :activeClass="activeClass" :event="event" :exact="exact" :append="append" :replace="replace"
      :disableFocusRipple="disableFocusRipple" :disabled="disabled" containerElement="div"
      @click="handleClick" @keyboardFocus="handleKeyboardFocus" @hover="handleHover" @hoverExit="handleHoverExit">
      <div class="vui-menu-item" :class="{'have-left-icon': leftIcon || inset}">
        <div class="vui-menu-item-title" :class="titleClass">
          <icon v-if="leftIcon" :icon="leftIcon" :style="{'color': filterColor(leftIconColor)}" class="vui-menu-item-left-icon" :class="leftIconClass"/>
          <slot name="title">
            {{title}}
          </slot>
        </div>
        <div v-if="afterText">
          <span :class="afterTextClass" class="vui-menu-item-after" style="color:#999;">{{afterText}}</span>
          <slot name="after"></slot>
        </div>
        <div v-else-if="rightIcon && afterText">
          <span :class="afterTextClass" style="color:#999;">{{afterText}}</span>
          <slot name="after"></slot>
          <icon :icon="rightIcon" :style="{'color': filterColor(rightIconColor)}" class="vui-menu-item-right-icon" :class="rightIconClass"/>
        </div>
        <div v-else>
          <slot name="after"></slot>
          <icon :icon="rightIcon" :style="{'color': filterColor(rightIconColor)}" class="vui-menu-item-right-icon" :class="rightIconClass"/>
        </div>
     </div>
   </abstract-button>
   <popover :open="openMenu" v-if="$slots && $slots.default && $slots.default.length > 0" :anchorOrigin="{ vertical: 'top', horizontal: 'right'}"
   @close="close" :trigger="trigger">
     <vui-menu v-if="openMenu" :desktop="$parent.desktop" popover
      :class="nestedMenuClass" :listClass="nestedMenuListClass"
      :maxHeight="$parent.maxHeight" :value="nestedMenuValue">
       <slot></slot>
     </vui-menu>
   </popover>
</div>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import routerMixin from '../internal/routerMixin'
import icon from '../icon'
import {getColor, isNotNull} from '../utils'
import popover from '../popover'
import menu from './menu'
export default {
  name: 'vui-menu-item',
  mixins: [routerMixin],
  props: {
    href: {
      type: String
    },
    target: {
      type: String
    },
    title: {
      type: String
    },
    titleClass: {
      type: [String, Object, Array]
    },
    afterText: {
      type: String
    },
    afterTextClass: {
      type: [String, Object, Array]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disableFocusRipple: {
      type: Boolean,
      default: false
    },
    inset: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: String
    },
    leftIconColor: {
      type: String
    },
    leftIconClass: {
      type: [String, Object, Array]
    },
    rightIcon: {
      type: String
    },
    rightIconColor: {
      type: String
    },
    rightIconClass: {
      type: [String, Object, Array]
    },
    nestedMenuClass: {
      type: [String, Object, Array]
    },
    nestedMenuListClass: {
      type: [String, Object, Array]
    },
    value: {},
    nestedMenuValue: {}
  },
  computed: {
    showAfterText () {
      return !this.rightIcon && this.afterText && (!this.$slot || !this.$slot.after || this.$slot.after.length === 0)
    },
    active () {
      return isNotNull(this.$parent.value) && isNotNull(this.value) && (this.$parent.value === this.value || (this.$parent.multiple && this.$parent.value.indexOf(this.value) !== -1))
    }
  },
  data () {
    this._isMenuItem = true
    return {
      openMenu: false,
      trigger: null,
      focusState: 'none' // 'none', 'focused', 'keyboard-focused'
    }
  },
  mounted () {
    this.trigger = this.$el
    this.applyFocusState()
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
      this.$parent.handleClick(this)
      this.open()
      if (isNotNull(this.value)) this.$parent.handleChange(this.value)
    },
    filterColor (color) {
      return getColor(color)
    },
    open () {
      this.openMenu = this.$slots && this.$slots.default && this.$slots.default.length > 0
    },
    close () {
      this.openMenu = false
    },
    handleKeyboardFocus (isFocus) {
      this.$emit('keyboardFocus', isFocus)
      this.$emit('keyboard-focus', isFocus)
    },
    handleHover (event) {
      this.$emit('hover', event)
    },
    handleHoverExit (event) {
      this.$emit('hoverExit', event)
      this.$emit('hover-exit', event)
    },
    applyFocusState () {
      const button = this.$refs.button
      if (button) {
        const buttonEl = button.$el

        switch (this.focusState) {
          case 'none':
            buttonEl.blur()
            break
          case 'focused':
            buttonEl.focus()
            break
          case 'keyboard-focused':
            button.setKeyboardFocus()
            buttonEl.focus()
            break
        }
      }
    }
  },
  watch: {
    focusState () {
      this.applyFocusState()
    }
  },
  components: {
    'abstract-button': abstractButton,
    icon,
    popover,
    'vui-menu': menu
  }
}
</script>

<style lang="less">
@import "../styles/import.less";

.vui-menu-item{
  padding: 0px 14px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-wrapper {
    display: block;
    font-size: 16px;
    height: 48px;
    line-height: 48px;
    transition: all .45s @easeOutFunction;
    color: @textColor;
    position: relative;
    cursor: pointer;
    user-select: none;
    .vui-menu-destop & {
      height: 32px;
      line-height: 32px;
      font-size: 15px;
    }
    &.hover {
      background-color: rgba(0, 0, 0, .1);
    }
    &.active {
      color: @accentColor;
    }
    &.disabled {
      color: @disabledColor;
      cursor: not-allowed;
    }
  }
  .vui-menu-destop & {
    padding: 0 10px;
  }
  &.have-left-icon{
    /* padding-left: 40px; */
  }
  &-after{
    font-size: 14px;
  }
  &-title{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
  &-left-icon{
    /* position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%); */
    /* margin: 0 12px; */
    color: @grey600;
    .vui-menu-destop & {
      /* top: 4px; */
      /* left: 24px;
      margin: 0; */
    }
  }
  &-right-icon{
   /*  position: absolute;
   top: 50%;
   right: 10px;
   transform: translateY(-50%); */
    color: @grey600;
    .vui-menu-destop & {
      /* top: 4px; */
      /* right: 24px;
      margin: 0; */
    }
  }
}



</style>
