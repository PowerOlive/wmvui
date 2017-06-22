export default {
  props: [{
    name: 'top',
    type: 'String',
    default: '0',
    desc: 'props.top'
  }, {
    name: 'right',
    type: 'String',
    default: '0',
    desc: 'props.right'
  }, {
    name: 'bottom',
    type: 'String',
    default: '0',
    desc: 'props.bottom'
  }, {
    name: 'left',
    type: 'String',
    default: '0',
    desc: 'props.top'
  }, {
    name: 'padding',
    type: 'Array',
    default: '0',
    desc: 'props.padding'
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
