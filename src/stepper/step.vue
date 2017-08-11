<script>
export default {
  name: 'vui-step',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    completed: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number
    },
    last: {
      type: Boolean,
      default: false
    }
  },
  render (h) {
    const {active, completed, disabled, index, last} = this
    const children = []
    if (this.$slots.default && this.$slots.default.length > 0) {
      this.$slots.default.forEach((vNode) => {
        if (!vNode.componentOptions || !vNode.componentOptions.propsData) return
        const num = index + 1
        vNode.componentOptions.propsData = Object.assign({active, completed, disabled, last, num}, vNode.componentOptions.propsData)
        children.push(vNode)
      })
    }
    return h('div', {
      class: 'vui-step'
    }, children)
  }
}
</script>

<style lang="scss">
@import "../styles/import.scss";
.vui-step{
  text-align: center;
  width: 60px;
  .vui-stepper-vertical & {
    margin-top: -14px;
    margin-left: 0;
  }
  &:first-child {
    .vui-step-label{
      &:after{
        left:50%;
      }
    }
  }
  &:last-child {
    .vui-step-label{
      &:after{
        right:50%;
      }
    }
  }
}

</style>
