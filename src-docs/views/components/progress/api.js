export default {
  props: [{
    name: 'mode',
    type: 'String',
    default: 'indeterminate',
    desc: 'props.mode'
  }, {
    name: 'value',
    type: 'Number',
    default: '',
    desc: 'props.value'
  }, {
    name: '状态',
    type: 'Boolean',
    default: 'primary',
    desc: 'props.state'
  }, {
    name: 'type',
    type: 'Number',
    default: '0',
    desc: 'props.type'
  }, {
  //   name: 'max',
  //   type: 'Number',
  //   default: '100',
  //   desc: 'props.max'
  // }, {
  //   name: 'min',
  //   type: 'Number',
  //   default: '0',
  //   desc: 'props.min'
  // }, {
    name: 'size',
    type: 'Number',
    default: '',
    desc: 'props.size'
  }, {
    name: 'width',
    type: 'Number',
    default: '3',
    desc: 'props.width'
  }, {
    name: 'showValue',
    type: 'Boolean',
    default: 'false',
    desc: 'props.showValue'
  }, {
    name: 'color',
    type: 'String',
    default: '',
    desc: 'props.color'
  }]
}
