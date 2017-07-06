export default {
  props: [{
    name: 'content',
    type: 'String',
    default: '',
    desc: 'props.content'
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
    default: 'false',
    desc: 'props.circle'
  }, {
    name: 'round',
    type: 'Boolean',
    default: 'false',
    desc: 'props.round'
  }, {
    name: 'size',
    type: 'Number',
    default: '',
    desc: 'props.size'
  }],
  slots: [{
    name: 'content',
    desc: 'slots.content'
  }, {
    name: 'default',
    desc: 'slots.default'
  }]
}
