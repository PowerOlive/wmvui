export default {
  props: [{
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
  }, {
    name: 'level',
    type: 'Number',
    default: '1',
    desc: 'props.level'
  }],
  slots: [{
    name: 'default',
    desc: 'slots.default'
  }]
}
