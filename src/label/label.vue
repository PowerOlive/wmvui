<template>
  <div 
  class="vui-tags" 
  :style="style">
    <slot></slot>
    <template v-if="icon">
      <icon :icon="icon" :size="iconSize" @click.stop="handleDelete"></icon>
    </template>
  </div>
</template>

<script>
import icon from '../icon'
export default {
  name: 'vui-tags',
  components: {
    icon
  },
  props: {
    icon: String,
    iconSize: Number,
    disabled: {
      type: Boolean,
      default: false
    },
    theme: Object
  },
  data () {
    return {
      focus: false,
      hover: false
    }
  },
  computed: {
    style () {
      return this.theme
    }
  },
  methods: {
    // onMouseenter () {
    //   if (isPc()) this.hover = true
    // },
    // onMouseleave () {
    //   if (isPc()) this.hover = false
    // },
    handleDelete () {
      this.$emit('delete')
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-tags {
  border-radius: 10000px;
  white-space: nowrap;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  background-color: darken(@alternateTextColor, 12%);
  color: fade(@textColor, 87%);
  padding: 2px 12px;
  .vui-avatar:first-child,
  .vui-svg-icon{
    margin-left: -12px;
    margin-right: 4px;
  }
}
.vui-tags>.vui-icon{
  display: inline-block;
  margin-right: -12px;
  margin-left: 4px;
  color: fade(@textColor, 26%);
  transition: all 450ms @easeOutFunction;
}


</style>
