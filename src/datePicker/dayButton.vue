<script>
import {isPc} from '../utils'
export default {
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    date: {
      type: Date
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      hover: false
    }
  },
  computed: {
    isNow () {
      const now = new Date()
      return this.date && this.date.getYear() === now.getYear() && this.date.getMonth() === now.getMonth() && this.date.getDate() === now.getDate()
    },
    dayButtonClass () {
      return {
        selected: this.selected,
        hover: this.hover,
        'vui-day-button': true,
        disabled: this.disabled,
        now: this.isNow
      }
    }
  },
  methods: {
    handleHover () {
      if (isPc() && !this.disabled) this.hover = true
    },
    handleHoverExit () {
      this.hover = false
    },
    handleClick (event) {
      this.$emit('click', event)
    }
  },
  render (h) {
    return this.date ? h('button', {
      class: this.dayButtonClass,
      on: {
        mouseenter: this.handleHover,
        mouseleave: this.handleHoverExit,
        click: this.handleClick
      },
      domProps: {
        disabled: this.disabled
      }
    }, [
      h('div', {class: 'vui-day-button-bg'}),
      h('span', {
        class: 'vui-day-button-text',
        domProps: {
          innerHTML: this.date.getDate()
        }
      })
    ]) : h('span', {class: 'vui-day-empty'})
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-day-button {
  display: inline-block;
  background: none;
  user-select: none;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  margin: 0px;
  padding: 4px 0px;
  font-size: inherit;
  font-weight: 400;
  position: relative;
  border: 10px;
  width: calc(100% / 8);
  &.disabled{
    opacity: .4;
  }
}

.vui-day-empty {
  font-weight: 400;
  padding: 4px 0px;
  position: relative;
  width: calc(100% / 8);
}
.vui-day-button-bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 34px;
  background-color: @primaryColor;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
  transition: all .45s @easeOutFunction;
  width: 34px;
  .vui-day-button.hover &,
  .vui-day-button.selected &{
    transform: scale(1);
  }
  .vui-day-button.hover &{
    opacity: 0.6;
  }
  .vui-day-button.selected &{
    opacity: 1;
  }
}

.vui-day-button-text{
  font-weight: 400;
  position: relative;
  color: @textColor;
  .vui-day-button.now &{
    color: @primaryColor;
  }
  .vui-day-button.hover &,
  .vui-day-button.selected &{
    color: @alternateTextColor;
  }
}
</style>
