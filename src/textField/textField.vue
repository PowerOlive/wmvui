<template>
  <div class="vui-text-field" :class="textFieldClass" :style="isFocused ? errorStyle : {}">
    <icon  v-if="icon" class="vui-text-field-icon" :size="iconSize" :icon="icon"></icon>
    <div @click="handleLabelClick" ref="content" class="vui-text-field-content">
      <text-field-label v-if="label" :float="float" :focus="isFocused" :normalClass="labelClass" :focusClass="labelFocusClass">{{label}}</text-field-label>
      <text-field-hint v-if="hintText" :text="hintText" :show="showHint" :class="hintTextClass"></text-field-hint>
      <slot>
        <input v-if="!multiLine" ref="input" :name="name" :type="type" :value="inputValue"
          :disabled="disabled" :readonly="readonly" @change="handleChange" @focus="handleFocus" @input="handleInput" @blur="handleBlur"
          :max="max" :min="min" class="vui-text-field-input" :class="inputClass" :required="required">
        <enhanced-textarea :name="name" v-if="multiLine" ref="textarea" :normalClass="inputClass":value="inputValue" :disabled="disabled" :rows="rows" :rowsMax="rowsMax" @change="handleChange" @input="handleInput" @focus="handleFocus" @blur="handleBlur"></enhanced-textarea>
      </slot>
      <underline v-if="underlineShow" :error="!!errorText" :disabled="disabled"
      :errorColor="errorColor" :focus="isFocused" :normalClass="underlineClass" :focusClass="underlineFocusClass"/>
      <div class="vui-text-field-help" :class="helpTextClass" :style="errorStyle" v-if="errorText || helpText || maxLength > 0">
          <div>
              {{errorText || helpText}}
          </div>
          <div v-if="maxLength > 0">
              {{charLength}}/{{maxLength}}
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import icon from '../icon'
import underline from './textFieldUnderline'
import enhancedTextarea from './enhancedTextarea'
import textFieldLabel from './textFieldLabel'
import {getColor} from '../utils'
import textFieldHint from './textFieldHint'
export default {
  name: 'vui-text-field',
  props: {
    name: {
      type: String
    },
    type: {
      type: String
    },
    icon: {
      type: String
    },
    iconSize: Number,
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
    hintText: {
      type: String
    },
    hintTextClass: {
      type: [String, Array, Object]
    },
    value: {},
    inputClass: {
      type: [String, Array, Object]
    },
    multiLine: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 1
    },
    rowsMax: {
      type: Number
    },
    errorText: {
      type: String
    },
    errorColor: {
      type: String
    },
    helpText: {
      type: String
    },
    helpTextClass: {
      type: [String, Array, Object]
    },
    maxLength: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    // fill: {
    //   type: Boolean,
    //   default: false
    // },
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
    max: {
      type: [Number, String]
    },
    min: {
      type: [Number, String]
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isFocused: false,
      inputValue: this.value,
      charLength: 0
    }
  },
  computed: {
    textFieldClass () {
      return {
        'focus-state': this.isFocused,
        'has-label': this.label,
        'no-empty-state': this.inputValue,
        'has-icon': this.icon,
        'error': this.errorText,
        'multi-line': this.multiLine,
        'disabled': this.disabled
        // 'full-width': this.fill
      }
    },
    float () {
      return this.labelFloat && !this.isFocused && !this.inputValue && this.inputValue !== 0
    },
    errorStyle () {
      return {
        color: !this.disabled && this.errorText ? getColor(this.errorColor) : ''
      }
    },
    showHint () {
      return !this.float && !this.inputValue && this.inputValue !== 0
    }
  },
  methods: {
    handleFocus (event) {
      this.isFocused = true
      this.$emit('focus', event)
    },
    handleBlur (event) {
      this.isFocused = false
      this.$emit('blur', event)
    },
    handleInput (val) {
      this.inputValue = val.target ? val.target.value : val
    },
    handleChange (e) {
      this.$emit('change', e, e.target.value)
    },
    handleLabelClick () {
      this.$emit('labelClick')
    },
    focus () {
      const { input, textarea } = this.$refs
      if (input) {
        input.focus()
      } else if (textarea) {
        textarea.focus()
      }
    }
  },
  watch: {
    value (val) {
      this.inputValue = val
    },
    inputValue (val, oldVal) {
      this.charLength = this.maxLength && String(this.inputValue) ? String(this.inputValue).length : 0
      this.$emit('input', val)
    },
    charLength (val) {
      if (val > this.maxLength && !this.isTextOverflow) {
        this.isTextOverflow = true
        this.$emit('textOverflow', true)
        this.$emit('text-overflow', true)
      }
      if (this.isTextOverflow && val <= this.maxLength) {
        this.isTextOverflow = false
        this.$emit('textOverflow', false)
        this.$emit('text-overflow', false)
      }
    }
  },
  components: {
    icon,
    underline,
    'enhanced-textarea': enhancedTextarea,
    'text-field-label': textFieldLabel,
    'text-field-hint': textFieldHint
  }
}
</script>

<style lang="scss">
@import "../styles/import.scss";
.vui-text-field{
  font-size: 16px;
  /* width: 256px; */
  /* min-height: 48px; */
  display: block;
  position: relative;
  color: $primaryTextColor;
  margin-bottom: 8px;
/*   &.full-width {
  width: 100%;
} */
  &.has-icon {
    padding-left: 46px;
  }
  &.focus-state {
    color: $primaryColor;
    &.error{
      color: $red;
    }
  }
  &.has-label{
    min-height: 72px;
  }
}

.vui-text-field-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  .vui-text-field.has-label & {
    top: 36px;
  }
}

.vui-text-field-content{
  display: block;
  height: 100%;
  .vui-text-field.disabled &{
    color: $disabledColor;
    /* cursor: not-allowed; */
  }
  padding-top: 4px;
  .vui-text-field.has-label &{
    padding-top: 28px;
    padding-bottom: 12px;
  }
}

.vui-text-field-input{
  appearance: none;
  outline: none;
  border: none;
  background: none;
  border-radius: 0 0 0 0;
  box-shadow: none;
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 32px;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  font-size: inherit;
  font-family: inherit;
  color: $textColor;
  font-family: inherit;
  position: relative;
}

.vui-text-field-help {
  position: absolute;
  margin-top: 6px;
  font-size: 12px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  left: 0;
  right: 0;
  .vui-text-field.has-icon & {
    left: 46px;
  }
  .vui-text-field.error &{
    color: $red;
  }
  .vui-text-field.disabled &{
    color: inherit;
  }
}
</style>
