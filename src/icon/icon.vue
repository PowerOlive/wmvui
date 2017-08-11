<script>
export default {
  name: 'vui-icon',
  props: {
    icon: {
      type: String
    },
    size: {
      type: Number
      // default: 24
    },
    text: {
      type: String
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconStyle () {
      return {
        'font-size': this.size / 7.5 + 'vw',
        'line-height': this.size / 7.5 + 'vw',
        // 'width': this.size + 'px',
        // 'height': this.size + 'px',
        'color': this.color
      }
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  },
  render (h) {
    var {
      icon,
      iconStyle,
      handleClick,
      text
    } = this
    if (!icon) return null
    var isMaterial = icon.indexOf(':') !== 0
    return h('i', {
      class: ['vui-icon icon-' + (isMaterial ? icon : '')],
      style: iconStyle,
      on: {
        click: handleClick
      }
    }, text)
  }
}
</script>

<style lang="scss">
.vui-icon{
  position: relative;
}
.vui-icon:before {
  font-size:inherit;
  color:inherit;
}
</style>
