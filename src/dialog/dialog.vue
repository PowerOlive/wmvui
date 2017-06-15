<template>
  <span>
    <transition name="vui-dialog-slide" @after-enter="show()" @after-leave="hide()">
      <div class="vui-dialog-wrapper" @click="handleWrapperClick" v-if="open" ref="popup" :style="{'z-index': zIndex}">
        <div class="vui-dialog" ref="dialog" :class="dialogClass">
          <h3 class="vui-dialog-title" v-if="showTitle" ref="title" :class="headerClass">
            <slot name="title">
              {{title}}
            </slot>
          </h3>
          <div class="vui-dialog-body " :style="bodyStyle" :class="bodyClass" ref="elBody">
            <slot></slot>
          </div>
          <div class="vui-dialog-actions" v-if="showFooter" ref="footer" :class="footerClass">
            <slot name="actions"></slot>
          </div>
        </div>
      </div>
    </transition>
  </span>
</template>

<script>
import Popup from '../internal/popup'
import PopupManager from '../internal/popup/manager'
import {convertClass} from '../utils'
export default {
  mixins: [Popup],
  name: 'vui-dialog',
  props: {
    dialogClass: {
      type: [String, Array, Object]
    },
    title: {
      type: String
    },
    titleClass: {
      type: [String, Array, Object]
    },
    bodyClass: {
      type: [String, Array, Object]
    },
    actionsContainerClass: {
      type: [String, Array, Object]
    },
    scrollable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    bodyStyle () {
      return {
        'overflow-x': 'hidden',
        'overflow-y': this.scrollable ? 'auto' : 'hidden',
        '-webkit-overflow-scrolling': 'touch'
      }
    },
    showTitle () {
      return this.title || (this.$slots && this.$slots.title && this.$slots.title.length > 0)
    },
    showFooter () {
      return this.$slots && this.$slots.actions && this.$slots.actions.length > 0
    },
    headerClass () {
      const {scrollable} = this
      const classNames = []
      if (scrollable) classNames.push('scrollable')
      return classNames.concat(convertClass(this.titleClass))
    },
    footerClass () {
      const {scrollable} = this
      const classNames = []
      if (scrollable) classNames.push('scrollable')
      return classNames.concat(convertClass(this.actionsContainerClass))
    }
  },
  mounted () {
    this.setMaxDialogContentHeight()
  },
  updated () {
    this.$nextTick(() => {
      this.setMaxDialogContentHeight()
    })
  },
  methods: {
    handleWrapperClick (e) {
      const wrapperEl = this.$refs.popup
      if (wrapperEl === e.target) PopupManager.handleOverlayClick()
    },
    setMaxDialogContentHeight () {
      const dialogEl = this.$refs.dialog
      if (!dialogEl) return
      if (!this.scrollable) {
        dialogEl.style.maxHeight = ''
        return
      }

      let maxDialogContentHeight = window.innerHeight - 2 * 64
      const { footer, title, elBody } = this.$refs
      if (footer) maxDialogContentHeight -= footer.offsetHeight
      if (title) maxDialogContentHeight -= title.offsetHeight
      if (elBody) {
        let maxBodyHeight = maxDialogContentHeight
        if (footer) maxBodyHeight -= footer.offsetHeight
        if (title) maxBodyHeight -= title.offsetHeight
        elBody.style.maxHeight = maxBodyHeight + 'px'
      }
      dialogEl.style.maxHeight = maxDialogContentHeight + 'px'
    },
    show () {
      this.$emit('show')
    },
    hide () {
      this.$emit('hide')
    }
  },
  watch: {
    open (newValue) {
      if (!newValue) return
      this.$nextTick(() => {
        this.setMaxDialogContentHeight()
      })
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-dialog-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vui-dialog {
  width: 75%;
  max-width: 768px;
  padding: 0;
  background-color: @dialogBackgroundColor;
  border-radius: 2px;
  font-size: 16px;
  .depth(5);
}

.vui-dialog-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:10px 20px;
  margin: 0;
  font-size: 22px;
  font-weight: normal;
  color: @textColor;
  /* border-bottom: 1px solid @borderColor; */
}
.vui-dialog-body {
  padding: 24px 24px 20px;
  color: fade(@textColor, 60%);
}

.vui-dialog-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top:1px solid @borderColor;
  .vui-btn{
    border:none;
    padding-top:8px; 
    padding-bottom:8px; 
    flex: 1;
    width: 0%;
    &:not(:only-child){
      border-right:1px solid @borderColor;
      &:first-child{
        color:@textColor
      }
    }
  }
}

.vui-dialog-slide-enter-active,
.vui-dialog-slide-leave-active{
  transition: opacity .45s @easeOutFunction;
  .vui-dialog {
    backface-visibility: hidden;
    transition: transform .45s @easeOutFunction;
  }
}
.vui-dialog-slide-enter,
.vui-dialog-slide-leave-active {
    opacity: 0;
}

.vui-dialog-slide-enter .vui-dialog{
  transform: translate3d(0, -64px, 0);
}
.vui-dialog-slide-leave-active .vui-dialog{
  transform: translate3d(0, 64px, 0);
}
</style>
