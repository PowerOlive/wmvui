<template>
  <div class="vui-tabs" :style="TabStyle">
    <slot></slot>
    <span class="vui-tabs-line" ref="tabsline" :style="activeLine"></span>
  </div>
</template>

<script>
export default {
  name: 'vui-tabs',
  props: {
    // lineClass: {
    //   type: [String, Object, Array]
    // },
    lineHeight: Number,
    value: {},
    active: String,
    theme: {}
  },
  data () {
    return {
      tabLightStyle: {
        width: '100%',
        transform: 'translate3d(0, 0, 0)'
      }
    }
  },
  updated () {
    this.setTabLightStyle()
  },
  computed: {
    TabStyle () {
      return {
        'background-color': this.theme ? this.theme.background : '',
        'color': this.theme ? this.theme.color : ''
      }
    },
    activeLine () {
      return {
        'background-color': this.theme ? this.theme.active : this.active,
        'height': this.lineHeight + 'px',
        'bottom': this.theme ? '0' : -this.lineHeight + 'px'
      }
    }
  },
  methods: {
    handleTabClick (value, tab) {
      if (this.value !== value) {
        this.$emit('change', value)
      }
    },
    getActiveIndex () {
      if (!this.$children || this.$children.length === 0) return -1
      let activeIndex = -1
      this.$children.forEach((tab, i) => {
        if (tab.value === this.value) {
          activeIndex = i
          return false
        }
      })
      return activeIndex
    },
    setTabLightStyle () {
      const x = this.getActiveIndex() * 100
      const len = this.$children.length
      const el = this.$refs.tabsline
      el.style.width = len > 0 ? (100 / len).toFixed(4) + '%' : '100%'
      el.style.transform = 'translate3d(' + x + '%, 0, 0)'
    }
  },
  mounted () {
    this.setTabLightStyle()
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-tabs{
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 100;
  width: 100%;
  &-item{
    min-height: 48px;
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 14px;
    background: none;
    appearance: none;
    text-decoration: none;
    border: none;
    outline: none;
    flex: 1;
    color: inherit;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: normal;
    align-items: center;
    /* color: fade(@textColor, 80%); */
    transition: all .45s @easeInOutFunction;
      &.disabled,
      &[disabled]{
        cursor: not-allowed;
        opacity:.5;
      }
  }
  &-text{
    &.has-icon {
      margin-top: 8px;
    }
  }
  &-line{
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 2px;
    transition: transform .3s;
    backface-visibility: hidden;
  }
  &-active{
    color: @primaryColor;
  }
  &-line{
    background-color: @primaryColor;
  }
  .vui-badge-container{
    position: absolute;
    right:20%;
    top:5%;
  }
}
</style>
