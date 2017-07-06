export default {
  props: [{
    name: 'text',
    type: 'String',
    default: '',
    desc: 'props.text'
  }, {
    name: '状态',
    type: 'String',
    default: '',
    desc: 'props.state'
  }, {
    name: 'color',
    type: 'String',
    default: '',
    desc: 'props.color'
  }, {
    name: 'circle',
    type: 'Boolean',
    default: '20px',
    desc: 'props.circle'
  }, {
    name: 'round',
    type: 'Boolean',
    default: '',
    desc: 'props.round'
  }, {
    name: 'size',
    type: 'Number',
    default: '',
    desc: 'props.size'
  }],
  slots: [{
    name: 'text',
    desc: 'slots.text'
  }, {
    name: 'default',
    desc: 'slots.default'
  }]
}
