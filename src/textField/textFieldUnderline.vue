<template>
  <div>
    <hr class="vui-text-field-line" :class="lineClass" />
    <hr v-if="!disabled" class="vui-text-field-focus-line" :style="errorStyle" :class="focusLineClass"/>
  </div>
</template>

<script>
import {getColor, convertClass} from '../utils'
export default {
  props: {
    focus: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean
    },
    errorColor: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    normalClass: {
      type: [String, Object, Array]
    },
    focusClass: {
      type: [String, Object, Array]
    }
  },
  computed: {
    lineClass () {
      const {disabled, normalClass} = this
      let classNames = []
      if (disabled) classNames.push('disabled')
      return classNames.concat(convertClass(normalClass))
    },
    focusLineClass () {
      const {normalClass, focus, focusClass, error} = this
      let classNames = []
      classNames.concat(convertClass(normalClass))
      if (error) classNames.push('error')
      if (focus) classNames.push('focus')
      return classNames.concat(convertClass(focusClass))
    },
    errorStyle () {
      return {
        'background-color': this.error ? getColor(this.errorColor) : ''
      }
    }
  }
}
</script>

<style lang="scss">
@import "../styles/import.scss";
.vui-text-field{
  &-line,
  &-focus-line{
    position: absolute;
    left: 0;
    right: 0;
    margin: 0;
    border: none;
  }
}
.vui-text-field-line {
  height: 1px;
  background-color: $borderColor;
  .vui-text-field.has-icon & {
    left: 46px;
  }
  &.disabled{
    height: auto;
    background-color: transparent;
    border-bottom: 1px dashed $disabledColor;
  }
}

.vui-text-field-focus-line{
  height: 2px;
  background-color: $primaryColor;
  margin-top: -1px;
  transform: scaleX(0);
  transition: transform .45s $easeOutFunction;
  .vui-text-field.has-icon & {
    left: 46px;
  }
  &.focus {
    transform: scaleX(1);
  }
  &.error {
    transform: scaleX(1);
    background-color: $red;

  }
}
</style>
