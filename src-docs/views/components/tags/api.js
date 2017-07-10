export default {
  props: [{
    name: 'right',
    type: 'Boolean',
    default: 'false',
    desc: 'props.right'
  }, {
    name: 'bottom',
    type: 'Boolean',
    default: 'false',
    desc: 'props.bottom'
  }, {
    name: 'left',
    type: 'Boolean',
    default: 'false',
    desc: 'props.left'
  }],
  slots: [{
    name: 'default',
    desc: 'slots.default'
  }, {
    name: 'icon',
    desc: 'slots.icon'
  }],
  events: []
}
