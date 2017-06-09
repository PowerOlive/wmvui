<script>
export default {
  name: 'mu-icon',
  props: {
    value: {
      type: String
    },
    size: {
      type: Number
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
        'font-size': this.size + 'px',
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
      value,
      iconStyle,
      handleClick,
      text
    } = this
    if (!value) return null
    var isMaterial = value.indexOf(':') !== 0
    return h('i', {
      class: ['vui-icon ', 'icon-' + (isMaterial ? value : '')],
      style: iconStyle,
      on: {
        click: handleClick
      }
    }, text)
  }
}
</script>

<style lang="less">
.vui-icon:before {
  font-size:inherit;
  color:inherit;
}
</style>
