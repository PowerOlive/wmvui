<template>
  <div>
    <abstract-button @click="handleClick"  containerElement="div"
      :href="href" :disabled="disabled" :disableFocusRipple="disableRipple"  :disableTouchRipple="disableRipple" :target="target"
      :to="to" :tag="tag" 
      :append="append" 
      :replace="replace"
      :activeClass="activeClass" 
      :event="event" 
      :exact="exact" 
      class="vui-item-wrapper" :wrapperStyle="itemStyle" :centerRipple="false">
      <!-- 
      @keyboardFocus="handleKeyboardFocus" 
      @hover="handleHover" 
      @hoverExit="handleHoverExit" -->
      <div :class="itemClass">
        <div class="vui-item-left" v-if="showLeft">
          <slot name="left"></slot>
        </div>

        <div class="vui-item-content">
          <div class="vui-item-title-row" v-if="showTitleRow">
            <div class="vui-item-title">
                <template v-if="title">{{title}}</template>
                <slot name="title"></slot>
            </div>
            <!-- <div class="vui-item-after">
                <slot name="after">
                  {{afterText}}
                </slot>
            </div> -->
          </div>
          <div class="vui-item-text" :style="textStyle" v-if="showDescribe">
            <slot name="describe"></slot>
          </div>
          <slot></slot>
        </div>

        <div class="vui-item-right" v-if="showRight">
          <vui-button @click.stop="handleToggleNested" @mousedown.native="stop" @touchstart.native="stop"  v-if="toggleNested">
            <svg v-if="nestedOpen" class="vui-item-svg-icon" viewBox="0 0 24 24">
              <path d="M6 15L12 9L18 15"/>
            </svg>
            <svg v-if="!nestedOpen" class="vui-item-svg-icon"viewBox="0 0 24 24">
              <path d="M6 9L12 15L18 9"/>
            </svg>
          </vui-button>
          <slot name="right"></slot>
        </div>
      </div>
    </abstract-button>
    <expand-transition>
      <vui-list v-if="showNested" :nestedLevel="nestedLevel" @change="handleNestedChange" :value="nestedSelectValue">
        <slot name="nested"></slot>
      </vui-list>
    </expand-transition>
  </div>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import routerMixin from '../internal/routerMixin'
import button from '../button'
import list from './list'
import expandTransition from '../internal/expandTransition'
import {isNotNull} from '../utils'
export default {
  name: 'vui-list-item',
  mixins: [routerMixin],
  props: {
    href: {
      type: String
    },
    target: {
      type: String
    },
    title: {
      type: String,
      default: ''
    },
    describeLine: {
      type: Number,
      default: 1
    },
    open: {
      type: Boolean,
      default: true
    },
    toggleNested: {
      type: Boolean,
      default: false
    },
    // toggleIconClass: {
    //   type: [String, Object, Array]
    // },
    disabled: {
      type: Boolean,
      default: false
    },
    disableRipple: {
      type: Boolean,
      default: false
    },
    value: {}
  },
  data () {
    return {
      nestedOpen: this.open
    }
  },
  computed: {
    nestedLevel () {
      return this.$parent.nestedLevel + 1
    },
    showLeft () {
      return this.$slots && (this.$slots.left && this.$slots.left.length > 0)
    },
    showRight () {
      return this.toggleNested || (this.$slots && (this.$slots.right && this.$slots.right.length > 0))
    },
    showTitleRow () {
      return (this.$slots && this.$slots.title && this.$slots.title.length > 0) || (this.$slots && this.$slots.after && this.$slots.after.length > 0)
    },
    showDescribe () {
      return this.$slots && this.$slots.describe && this.$slots.describe.length > 0
    },
    itemClass () {
      var arr = ['vui-item']
      // if (this.showLeft || this.inset) arr.push('show-left')
      // if (this.showRight) arr.push('show-right')
      // if (this.hasAvatar) arr.push('has-avatar')
      // if (this.hasImg) arr.push('has-img')
      if (this.selected) arr.push('selected')
      return arr.join(' ')
    },
    itemStyle () {
      return {
        'margin-left': (18 * (this.nestedLevel - 1)) + 'px'
      }
    },
    textStyle () {
      return {
        'max-height': (18 * this.describeLine) + 'px',
        '-webkit-line-clamp': this.describeLine
      }
    },
    showNested () {
      return this.nestedOpen && this.$slots && this.$slots.nested && this.$slots.nested.length > 0
    },
    selected () {
      return isNotNull(this.$parent.value) && isNotNull(this.value) && this.$parent.value === this.value
    },
    nestedSelectValue () {
      return this.$parent.value
    }
  },
  methods: {
    handleToggleNested () {
      this.nestedOpen = !this.nestedOpen
      this.$emit('toggleNested', this.nestedOpen)
      this.$emit('toggle-nested', this.nestedOpen) // 兼容 html 里的用法
    },
    handleClick (e) {
      this.$emit('click', e)
      if (this.$parent.handleItemClick) this.$parent.handleItemClick(this)
      if (isNotNull(this.value)) this.$parent.handleChange(this.value)
      if (this.toggleNested) this.handleToggleNested()
    },
    // handleKeyboardFocus (isFocus) {
    //   this.$emit('keyboardFocus', isFocus)
    //   this.$emit('keyboard-focus', isFocus)
    // },
    // handleHover (event) {
    //   this.$emit('hover', event)
    // },
    // handleHoverExit (event) {
    //   this.$emit('hoverExit', event)
    //   this.$emit('hover-exit', event)  // 兼容 html 里的用法
    // },
    handleNestedChange (value) {
      this.$parent.handleChange(value)
    },
    stop (e) {
      e.stopPropagation()
    }
  },
  watch: {
    open (val, oldVal) {
      if (val === oldVal) return
      this.nestedOpen = val
    }
  },
  components: {
    'abstract-button': abstractButton,
    'vui-list': list,
    'vui-button': button,
    'expand-transition': expandTransition
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-item-wrapper {
  display: block;
  color: inherit;
  position: relative;
  outline: none;
  cursor: pointer;
  &.hover {
    background-color: fade(@textColor, 10%);
  }
  &.disabled{
    cursor: default;
  }
}

.vui-item {
  padding: 8px;
  min-height: 48px;
  display: flex;
  color: @textColor;
  position: relative;
  &.show-left{
    /* padding-left: 15px; */
  }
  &.show-right{
    /* padding-right: 4px; */
  }
  &.has-avatar {
    /* min-height: 56px; */
    /* padding: 5px */
  }
  &.has-img{
    /* padding:5px; */
  }
  &.selected {
    color: @primaryColor;
  }
  .vui-item-content{
    padding-left:4px;
  }
}

.vui-item-toggle-button {
  position: absolute;
  color: @textColor;
  position: absolute;
  right: 4px;
  top: 0;
}

.vui-item-right,
.vui-item-left{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* width: 40px; */
  color: @grey600;
  .vui-icon{
    display: block;
    margin: 0 auto;
  }
}

.vui-item-left{
  .vui-item.selected &{
    color: @primaryColor;
  }
  >.vui-icon{
    margin-left:5px;
  }
}

.vui-item-right{
  justify-content: center;
  > .vui-icon-button {
    align-self: flex-start;
  }
  > .vui-icon-menu {
    align-self: flex-start;
  }
  .vui-btn{
    padding-left:10px;
    padding-right:10px;
  }
}

.vui-item-content{
  width: 100%;
  align-self: center;
  flex:1;
}

.vui-item-title-row{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  line-height: 1;
}

.vui-item-title{
  flex: 1;
  display: block;
  font-size: 16px;
  max-width: 100%;
}

.vui-item-sub-title {
  line-height: 1;
  margin-top: 4px;
}
.vui-item-after{
  margin-left: auto;
  color: @primaryTextColor;
  display: flex;
  align-items: center;
}

.vui-item-text{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  position: relative;
  overflow: hidden;
  font-size: 14px;
  line-height: 18px;
  margin-top: 4px;
  max-height: 40px;
  max-width: 100%;
  text-overflow: ellipsis;
  word-break: break-all;
  color: @primaryTextColor;
}

.vui-item-svg-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  stroke-width: 2;
  fill: none;
  stroke: currentColor;
  user-select: none;
}

</style>
