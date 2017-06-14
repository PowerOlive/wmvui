<template>
  <span class="vui-number">
    <vui-icon-button 
    icon="minus" 
    @click="sub" 
    class="vui-number-selector vui-number-selector-sub" 
    :class="{'vui-number-disabled':disabledMin}"
     :disabled="disabledMin" />
    <input v-model.number="currentValue" :name="name" class="vui-number-input" :style="{width: width+'px'}" :readonly="!fillable" pattern="[0-9]*"/>
    <vui-icon-button 
    icon="plus"
    @click="add" 
    class="vui-number-selector vui-number-selector-plus" 
    :class="{'vui-number-disabled':disabledMax}" 
    :disabled="disabledMax" />
  </span>
</template>
<script>
import iconButton from '../iconButton'
export default {
  name: 'vui-number',
  components: {
    iconButton
  },
  props: {
    min: Number,
    max: Number,
    step: {
      type: Number,
      default: 1
    },
    value: {
      validator (value) {
        if (typeof value === 'number') {
          return true
        } else if (typeof value === 'string') {
          return value === ''
        }
        return false
      },
      default: 0
    },
    name: String,
    fillable: {
      type: Boolean,
      default: true
    },
    width: {
      type: Number,
      default: 30
    }
  },
  created () {
    this.currentValue = this.value
  },
  data () {
    return {
      currentValue: 0
    }
  },
  computed: {
    disabledMin () {
      var reslute = this.currentValue === '' ? true : this.currentValue <= this.min
      return typeof this.min === 'undefined' ? false : reslute
    },
    disabledMax () {
      var reslute = this.currentValue === '' ? true : this.currentValue >= this.max
      return typeof this.max === 'undefined' ? false : reslute
    }
  },
  watch: {
    currentValue (newValue, old) {
      if (newValue !== '') {
        if (this.min && this.currentValue < this.min) {
          this.currentValue = this.min
        }
        if (this.max && this.currentValue > this.max) {
          this.currentValue = this.max
        }
      }
      this.$nextTick(() => {
        this.$emit('on-change', this.currentValue)
        this.$emit('input', this.currentValue)
      })
    },
    value (newValue) {
      this.currentValue = newValue
    }
  },
  methods: {
    add () {
      if (!this.disabledMax) {
        this.currentValue += this.step
      }
      this.$emit('on-plus', this.currentValue)
    },
    sub () {
      if (!this.disabledMin) {
        this.currentValue -= this.step
      }
      this.$emit('on-minus', this.currentValue)
    },
    blur () {
      if (this.currentValue === '') {
        this.currentValue = 0
      }
    }
  }
}
</script>

<style lang="scss">
$number-input-font-color:#333;
$number-input-font-disabled-color:#999;
$number-input-border-color:#bbb;

.vui-number{
    display: inline-block;
    vertical-align:middle;
}
.vui-number-input {
  appearance: none;
  text-align:center;
}
.vui-number-selector.vui-number-disabled{
  color:$number-input-font-disabled-color;
  border-color: #ddd;
}

.vui-number-input,
.vui-number-selector{
  border-radius: 0;
  height:29px;
  color: $number-input-font-color;
  float: left;
  display: block;
  border:1px solid $number-input-border-color;
  .vui-icon{
    &:before{
      font-size: 14px;
      vertical-align: middle;
    }
  }

}
.vui-number-selector{
    padding: 0;
    text-align: center;
    width: 28px;
}
.vui-number-selector-sub {
  border-right:none;
}
.vui-number-selector-plus {
  border-left:none;
}
</style>
