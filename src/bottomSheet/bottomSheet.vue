<template>
  <transition name="vui-bottom-sheet" @after-enter="show()" @after-leave="hide()">
    <div class="vui-bottom-sheet" :class="sheetClass" ref="popup" v-show="open" :style="{'z-index': zIndex}">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import Popup from '../internal/popup'
export default {
  name: 'vui-bottom-sheet',
  mixins: [Popup],
  props: {
    sheetClass: {
      type: [String, Object, Array]
    }
  },
  methods: {
    show () {
      this.$emit('show')
    },
    hide () {
      this.$emit('hide')
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-bottom-sheet {
  background-color: @dialogBackgroundColor;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

.vui-bottom-sheet-enter-active,
.vui-bottom-sheet-leave-active{
  transition: transform .3s @easeOutFunction;
  backface-visibility: hidden;
}

.vui-bottom-sheet-enter,
.vui-bottom-sheet-leave-active{
  transform: translate3d(0, 100%, 0);
}
</style>
