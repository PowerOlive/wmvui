export default {
  props: [{
    name: 'text',
    type: 'String',
    default: '',
    desc: 'props.text'
  }, {
    name: 'theme',
    type: 'String',
    default: '',
    desc: 'props.theme'
  }, {
    name: 'circle',
    type: 'Boolean',
    default: '16px',
    desc: 'props.circle'
  }, {
    name: 'dot',
    type: 'Boolean String',
    default: 'false',
    desc: 'props.dot'
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
