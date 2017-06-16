export default {
  props: [{
    name: 'value',
    type: 'Number',
    default: '',
    desc: 'props.value'
  }, {
    name: 'min',
    type: 'Number',
    default: '',
    desc: 'props.min'
  }, {
    name: 'max',
    type: 'Number',
    default: '',
    desc: 'props.max'
  }, {
    name: 'step',
    type: 'Number',
    default: '',
    desc: 'props.step'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'true',
    desc: 'props.disabled'
  }, {
    name: 'width',
    type: 'Number',
    default: '40px',
    desc: 'props.width'
  }],
  events: [{
    name: 'on-plus',
    desc: 'events.onPlus'
  }, {
    name: 'on-minus',
    desc: 'events.onMinus'
  }]
}
