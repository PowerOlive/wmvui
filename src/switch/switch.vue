<template>
<label @mousedown="handleMouseDown" @mouseleave="handleMouseLeave" @mouseup="handleMouseUp"
  @touchstart="handleTouchStart" @touchend="handleTouchEnd" @touchcancel="handleTouchEnd" @click.stop="handleClick"
  class="vui-switch" :class="{'label-left': labelLeft, 'disabled': disabled, 'no-label': !label}">
  <input type="checkbox" :disabled="disabled" :name="name" @change="handleChange"  v-model="inputValue">
  <div class="vui-switch-wrapper">
    <div class="vui-switch-label" :class="labelClass" v-if="label && labelLeft">{{label}}</div>
    <div class="vui-switch-container">
      <div class="vui-switch-track" :class="trackClass"></div>
      <div class="vui-switch-thumb" :class="thumbClass" v-if="disabled"></div>
      <touch-ripple v-if="!disabled"  rippleWrapperClass="vui-switch-ripple-wrapper" class="vui-switch-thumb"/>
    </div>
    <div class="vui-switch-label" :class="labelClass" v-if="label && !labelLeft">{{label}}</div>
  </div>
</label>
</template>

<script>
import touchRipple from '../internal/touchRipple'
export default {
  name: 'vui-switch',
  props: {
    name: {
      type: String
    },
    value: {
      type: Boolean
    },
    label: {
      type: String,
      default: ''
    },
    labelLeft: {
      type: Boolean,
      default: false
    },
    labelClass: {
      type: [String, Object, Array]
    },
    trackClass: {
      type: [String, Object, Array]
    },
    thumbClass: {
      type: [String, Object, Array]
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputValue: this.value
    }
  },
  watch: {
    value (val) {
      this.inputValue = val
    },
    inputValue (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    handleMouseDown (event) {
      if (this.disabled) return
      if (event.button === 0) {
        this.$children[0].start(event)
      }
    },
    handleClick () {
      // 阻止事件冒泡，放置外部控制的时候触发两次 click
    },
    handleMouseUp () {
      if (this.disabled) return
      this.$children[0].end()
    },
    handleMouseLeave () {
      if (this.disabled) return
      this.$children[0].end()
    },
    handleTouchStart (event) {
      if (this.disabled) return
      this.$children[0].start(event)
    },
    handleTouchEnd () {
      if (this.disabled) return
      this.$children[0].end()
    },
    handleChange () {
      this.$emit('change', this.inputValue)
    }
  },
  components: {
    'touch-ripple': touchRipple
  }
}
</script>

<style lang="scss">
@import "../styles/import.scss";
.vui-switch {
  position: relative;
  vertical-align: middle;
  display: inline-block;
  /* height: 24px;
  line-height: 24px;
  cursor: pointer; */
  user-select: none;
  input[type="checkbox"] {
    display: none;
    &:checked {
      + .vui-switch-wrapper {
        .vui-switch-track{
          background-color: lighten($primaryColor, 20%);

        }
        .vui-switch-thumb{
          background-color: $primaryColor;
          color: $primaryColor;
          transform: translate3d(18px, 0, 0);
        }
      }

    }
  }
  &.disabled {
    input[type="checkbox"]:checked{
      + .vui-switch-wrapper {
        .vui-switch-track{
          background-color: $borderColor;
        }
        .vui-switch-thumb{
          background-color: $grey300;
        }
      }
    }
  }

  * {
    pointer-events: none;
  }
  &.disabled  {
    cursor: not-allowed;
  }
}

.vui-switch-wrapper{
  display: flex;
  width: 100%;
  height: 24px;
  align-items: center;
  justify-content: space-between;
}

.vui-switch-container{
  width: 38px;
  padding: 4px 0px 4px 2px;
  position: relative;
  margin-right: 8px;
  transition: all 450ms $easeOutFunction;
  .vui-switch.label-left &{
    margin-right: 0;
    margin-left: 8px;
  }
  .vui-switch.no-label &{
    margin-left: 0;
    margin-right: 0;
  }
}

.vui-switch-label {
  color: $textColor;
  .vui-switch.disabled & {
    color: $disabledColor;
  }
}

.vui-switch-track {
  width: 100%;
  height: 14px;
  border-radius: 30px;
  background-color: $borderColor;;
  transition: all 450ms $easeOutFunction;
  .vui-switch.disabled & {
    background-color: $borderColor;;
  }
}

.vui-switch-thumb {
  position: absolute;
  top: 1px;
  left: 0px;
  width: 20px;
  height: 20px;
  line-height: 24px;
  color: $textColor;
  background-color: $darkerAccentColor;
  border-radius: 50%;
  // .depth(1);
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  transition: all 450ms $easeOutFunction;
  backface-visibility: hidden;
  .vui-switch.disabled & {
    background-color: $grey300;
  }
}

.vui-switch-ripple-wrapper {
  height: 200%;
  width: 200%;
  top: -10px;
  left: -10px;
}
</style>
