<template>
<text-field ref="textField" class="vui-select-field" :label="label" :labelFloat="labelFloat" :underlineShow="underlineShow"
  :labelClass="labelClass" :labelFocusClass="labelFocusClass" :underlineClass="underlineClass" :underlineFocusClass="underlineFocusClass"
  :fill="fill" :hintText="hintText" :hintTextClass="hintTextClass"
  :helpText="helpText" :helpTextClass="helpTextClass" :icon="icon" :iconClass="iconClass"
  :value="inputValue instanceof Array ? inputValue.join('') : inputValue"
  :disabled="disabled" :errorText="errorText" :errorColor="errorColor">
  <input type="hidden" :name="name" :value="inputValue instanceof Array ? inputValue.join('') : inputValue">
  <dropDown-menu :anchorEl="anchorEl" :scroller="scroller" @open="handleOpen"
    @close="handleClose"  @change="handlehange" :value="inputValue" :disabled="disabled"
    :maxHeight="maxHeight" :autoWidth="autoWidth" :iconClass="dropDownIconClass"
    :multiple="multiple" :anchorOrigin="{vertical: 'bottom', horizontal: 'left'}">
    <slot></slot>
  </dropDown-menu>
</text-field>
</template>

<script>
import textField from '../textField'
import dropDownMenu from '../dropDownMenu'
import {isNull} from '../utils'
export default {
  name: 'vui-select-field',
  props: {
    name: {
      type: String
    },
    label: {
      type: String
    },
    labelFloat: {
      type: Boolean,
      default: false
    },
    labelClass: {
      type: [String, Array, Object]
    },
    labelFocusClass: {
      type: [String, Array, Object]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hintText: {
      type: String
    },
    hintTextClass: {
      type: [String, Array, Object]
    },
    helpText: {
      type: String
    },
    helpTextClass: {
      type: [String, Array, Object]
    },
    errorText: {
      type: String
    },
    errorColor: {
      type: String
    },
    icon: {
      type: String
    },
    iconClass: {
      type: [String, Array, Object]
    },
    maxHeight: {
      type: Number
    },
    autoWidth: {
      type: Boolean,
      default: false
    },
    fill: {
      type: Boolean,
      default: false
    },
    underlineShow: {
      type: Boolean,
      default: true
    },
    underlineClass: {
      type: [String, Array, Object]
    },
    underlineFocusClass: {
      type: [String, Array, Object]
    },
    dropDownIconClass: {
      type: [String, Array, Object]
    },
    value: {},
    multiple: {
      type: Boolean,
      default: false
    },
    scroller: {}
  },
  data () {
    let defaultVal = this.value
    if (isNull(defaultVal)) defaultVal = ''
    if (this.multiple && !(defaultVal instanceof Array)) {
      defaultVal = []
    }
    return {
      anchorEl: null,
      inputValue: defaultVal
    }
  },
  mounted () {
    this.anchorEl = this.$children[0].$refs.input
  },
  methods: {
    handlehange (val) {
      if (val === this.inputValue) return
      if (this.multiple) {
        const index = this.inputValue.indexOf(val)
        if (index === -1) {
          this.inputValue.push(val)
        } else {
          this.inputValue.splice(index, 1)
        }
      } else {
        this.inputValue = val
      }
      this.$emit('change', this.inputValue)
    },
    handleOpen () {
      this.$refs.textField.handleFocus()
      this.$emit('open')
    },
    handleClose () {
      this.$refs.textField.handleBlur()
      this.$emit('close')
    }
  },
  watch: {
    value (val) {
      this.inputValue = val
    },
    inputValue (val, oldVal) {
      if (val === oldVal) return
      this.$emit('input', val)
    }
  },
  components: {
    'text-field': textField,
    'dropDown-menu': dropDownMenu
  }
}
</script>

<style lang="scss">
@import "../styles/import.scss";
.vui-select-field{
  .vui-dropDown-menu{
    display: block;
    width: 100%;
    height: 32px;
  }
  .vui-dropDown-menu-text{
    line-height: 32px;
    height: 32px;
    padding-left: 0px;
    padding-right: 24px;
    word-wrap: break-word;
    overflow: hidden;
  }
  .vui-dropDown-menu-line{
    display: none;
  }
  .vui-dropDown-menu-icon{
    right: 0;
    top: 6px;
  }
}
</style>
