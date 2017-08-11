<template>
  <div 
  class="vui-label" 
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
  name: 'vui-label',
  components: {
    icon
  },
  props: {
    icon: String,
    iconSize: Number,
    theme: Object
  },
  data () {
    return {
      // focus: false,
      // hover: false
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

<style lang="scss">
@import "../styles/import.scss";
.vui-label {
  border-radius: 10000px;
  white-space: nowrap;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  background-color: darken($alternateTextColor, 12%);
  color: $textColor;
  padding: 2px 12px;
  .vui-avatar:first-child,
  .vui-svg-icon{
    margin-left: -12px;
    margin-right: 4px;
  }
}
.vui-label>.vui-icon{
  display: inline-block;
  margin-right: -12px;
  margin-left: 4px;
  color: rgba(0,0,0,.4);
  transition: all 450ms $easeOutFunction;
}


</style>
