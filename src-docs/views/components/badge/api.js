export default {
  props: [{
    name: 'content',
    type: 'String',
    default: '',
    desc: 'props.content'
  }, {
    name: '颜色',
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
    type: 'String',
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
