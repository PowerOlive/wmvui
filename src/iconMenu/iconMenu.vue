<template>
  <div class="vui-icon-menu">
    <vui-button :icon="icon" :color="color" @click="handleOpen">
      <slot name="icon"></slot>
    </vui-button>
    <popover v-if="$slots && $slots.default && $slots.default.length > 0" :open="openMenu" :trigger="trigger" :scroller="scroller" :anchorOrigin="anchorOrigin"
      :targetOrigin="targetOrigin" @close="handleClose">
      <vui-menu @change="change" :popover="openMenu" :value="value" :class="menuClass" :listClass="menuListClass"
        @itemClick="itemClick" :multiple="multiple" :desktop="desktop" :maxHeight="maxHeight">
        <slot></slot>
      </vui-menu>
    </popover>
  </div>
</template>

<script>
import button from '../button'
import popover from '../popover'
import {menu} from '../menu'
export default {
  name: 'vui-icon-menu',
  props: {
    icon: {
      type: String,
      required: true
    },
    color: String,
    menuClass: {
      type: [String, Array, Object]
    },
    menuListClass: {
      type: [String, Array, Object]
    },
    value: {},
    multiple: {
      type: Boolean,
      default: false
    },
    desktop: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
    },
    maxHeight: {
      type: Number
    },
    anchorOrigin: {
      type: Object,
      default () {
        return {
          vertical: 'top',
          horizontal: 'left'
        }
      }
    },
    targetOrigin: {
      type: Object,
      default () {
        return {
          vertical: 'top',
          horizontal: 'left'
        }
      }
    },
    scroller: {},
    itemClickClose: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      openMenu: this.open,
      trigger: null
    }
  },
  methods: {
    handleOpen () {
      this.openMenu = true
      this.$emit('open')
    },
    handleClose () {
      this.openMenu = false
      this.$emit('close')
    },
    change (value) {
      this.$emit('change', value)
    },
    itemClick (item) {
      if (this.itemClickClose) {
        this.handleClose()
      }
      this.$emit('itemClick', item)
      this.$emit('item-click', item)
    }
  },
  mounted () {
    this.trigger = this.$el
  },
  watch: {
    open (val, oldVal) {
      if (val === oldVal) return
      this.openMenu = val
    }
  },
  components: {
    'vui-button': button,
    popover,
    'vui-menu': menu
  }
}
</script>

<style lang="css">
.vui-icon-menu{
  display: inline-block;
  vertical-align: middle;
  position: relative;
}
</style>
