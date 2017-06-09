<template>
  <span class="mu-number">
    <a @click="sub" class="mu-number-selector mu-number-selector-sub":class="{'mu-number-disabled':disabledMin}">-</a>
    <input v-model.number="currentValue" :name="name" class="mu-number-input" :style="{width: width+'px'}" :readonly="!fillable" pattern="[0-9]*"/>
    <a @click="add" class="mu-number-selector mu-number-selector-plus" :class="{'mu-number-disabled':disabledMax}">
      +
    </a>
  </span>
</template>
<script>
export default {
  name: 'mu-number',
  components: {
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

.mu-number{
    display: inline-block;
    vertical-align:middle;
}
.mu-number-input {
  font-size:16px;
  appearance: none;
  text-align:center;
}
.mu-number-selector.mu-number-disabled{
  color:$number-input-font-disabled-color;
  border-color: #ddd;
}

.mu-number-input,
.mu-number-selector{
  border-radius: 0;
  height:29px;
  line-height: inherit;
  color: $number-input-font-color;
  float: left;
  display: block;
  border:1px solid $number-input-border-color;

}
.mu-number-selector{
    padding: 2px;
    text-align: center;
    line-height: 1;
    font-size: 20px;
    font-weight: 700;
    width: 28px;
}
.mu-number-selector-sub {
  border-right:none;
}
.mu-number-selector-plus {
  border-left:none;
}
</style>
