export default {
  props: [{
    name: 'inset',
    type: 'String',
    default: '0',
    desc: 'props.inset'
  }, {
    name: 'fontSize',
    type: 'String',
    default: '',
    desc: 'props.fontSize'
  }, {
    name: 'color',
    type: 'String',
    default: '',
    desc: 'props.color'
  }],
  slots: [{
    name: 'default',
    desc: 'slots.default'
  }]
}
