<template>
<div class="vui-date-picker">
  <text-field @focus="handleFocus" @labelClick="handleClick" :value="inputValue" :disabled="disabled"
    :label="label" :labelFloat="labelFloat" :labelClass="labelClass" :labelFocusClass="labelFocusClass"
    :hintText="hintText" :hintTextClass="hintTextClass" :helpText="helpText" :helpTextClass="helpTextClass"
    :errorText="errorText" :errorColor="errorColor" :icon="icon" :iconSize="iconSize" :inputClass="inputClass"
    :underlineShow="underlineShow" :underlineClass="underlineClass" :underlineFocusClass="underlineFocusClass"/>
  <date-picker-dialog v-if="!disabled" @accept="handleAccept" :initialDate="dialogDate" ref="dialog" :mode="mode" :maxDate="maxLimitDate" :minDate="minLimitDate" :shouldDisableDate="shouldDisableDate" :firstDayOfWeek="firstDayOfWeek" :container="container" :disableYearSelection="disableYearSelection" :dateTimeFormat="dateTimeFormat" :autoOk="autoOk" :okLabel="okLabel" :cancelLabel="cancelLabel"/>
</div>
</template>
<script>
import * as dateUtils from './dateUtils'
import textField from '../textField'
import datePickerDialog from './datePickerDialog'
export default {
  name: 'vui-date-picker',
  props: {
    dateTimeFormat: {
      type: Object,
      default () {
        return dateUtils.dateTimeFormat
      }
    },
    autoOk: {
      type: Boolean,
      default: false
    },
    cancelLabel: {
      type: String
    },
    okLabel: {
      type: String
    },
    container: {
      type: String,
      default: 'dialog',
      validator (val) {
        return val && ['dialog', 'inline'].indexOf(val) !== -1
      }
    },
    disableYearSelection: {
      type: Boolean
    },
    firstDayOfWeek: {
      type: Number
    },
    mode: {
      type: String,
      default: 'portrait',
      validator (val) {
        return val && ['portrait', 'landscape'].indexOf(val) !== -1
      }
    },
    shouldDisableDate: {
      type: Function
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    maxDate: {
      type: [String, Date]
    },
    minDate: {
      type: [String, Date]
    },
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
    iconSize: Number,
    inputClass: {
      type: [String, Array, Object]
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
    value: {
      type: String
    }
  },
  computed: {
    maxLimitDate () {
      return this.maxDate ? typeof this.maxDate === 'string' ? dateUtils.strFormatToDate(this.maxDate, this.format) : this.maxDate : undefined
    },
    minLimitDate () {
      return this.minDate ? typeof this.minDate === 'string' ? dateUtils.strFormatToDate(this.minDate, this.format) : this.minDate : undefined
    }
  },
  data () {
    return {
      inputValue: this.value,
      dialogDate: null
    }
  },
  methods: {
    handleClick () {
      if (!this.disabled) {
        setTimeout(() => {
          this.openDialog()
        }, 0)
      }
    },
    handleFocus (event) {
      event.target.blur()
      this.$emit('focus', event)
    },
    openDialog () {
      if (this.disabled) return
      this.dialogDate = this.inputValue ? dateUtils.strFormatToDate(this.inputValue, this.format) : new Date()
      this.$refs.dialog.open = true
    },
    handleAccept (val) {
      const newValue = dateUtils.dateToStr(val, this.format)
      if (this.inputValue === newValue) return
      this.inputValue = newValue
      this.$emit('change', newValue)
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
  components: {
    'text-field': textField,
    'date-picker-dialog': datePickerDialog
  }
}
</script>

<style lang="scss">
@import "../styles/import.scss";
.vui-date-picker{
  position: relative;
  width: 100%
}
</style>
