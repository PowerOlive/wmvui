<template>
  <div class="vui-star">
    <input v-model="currentValue" style="display:none">
    <span class="vui-star-item" v-for="i in max" @click="handleClick(i-1)" :class="{'is-active':currentValue > i-1}" :style="{color: colors && colors[i-1] ? colors[i-1] : '#ccc',marginRight:margin+'px'}">
      <icon :icon="icon" :size="iconSize"></icon>
    </span>
    <span class="vui-star-text" v-if="score">{{currentValue}} 分</span>
  </div>
</template>

<script>
import icon from '../icon'
export default {
  name: 'vui-star',
  components: {
    icon
  },
  created () {
    this.currentValue = this.value
  },
  mounted () {
    this.updateStyle()
  },
  props: {
    max: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    },
    score: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    // star: {
    //   type: String,
    //   default: '★'
    // },
    icon: String,
    iconSize: Number,
    color: {
      type: String,
      default: '#2196f3'
    },
    margin: {
      type: Number,
      default: 4
    }
  },
  computed: {
    sliceValue () {
      const _val = this.currentValue.toString().split('.')
      return _val.length === 1 ? [_val[0], 0] : _val
    },
    cutIndex () {
      return this.sliceValue[0] * 1
    },
    cutPercent () {
      return this.sliceValue[1] * 10
    }
  },
  methods: {
    handleClick (i, force) {
      if (!this.disabled || force) {
        if (this.currentValue === i + 1) {
          this.currentValue = i
          this.updateStyle()
        } else {
          this.currentValue = i + 1
        }
      }
      this.$emit('click', this.currentValue)
    },
    updateStyle () {
      for (var j = 0; j < this.max; j++) {
        if (j <= this.currentValue - 1) {
          this.$set(this.colors, j, this.color)
        } else {
          this.$set(this.colors, j, '#ccc')
        }
      }
    }
  },
  data () {
    return {
      colors: [],
      currentValue: 0
    }
  },
  watch: {
    currentValue (val) {
      this.updateStyle()
      this.$emit('input', val)
    },
    value (val) {
      this.currentValue = val
    }
  }
}
</script>

<style>
.vui-star{
  text-align: left;
  display: inline-block;
  line-height: normal;
}
.vui-star-item{
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  color: #ccc;
  position: relative;
  &:last-child {
    padding-right: 2px!important;
    margin-right: 0px!important;
  }
  &:hover {
    color: #ffdd99;
  }
  &.is-disabled {
    color: #ccc !important;
    cursor: not-allowed;
  }
}
.vui-star-text{
  font-size: 16px;
}
</style>
