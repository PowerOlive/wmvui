export default {
  props: [{
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
    name: 'size',
    type: 'Number',
    default: '',
    desc: 'props.size'
  }, {
    name: 'showText',
    type: 'Boolean',
    default: 'false',
    desc: 'props.showText'
  }, {
    name: 'text',
    type: 'String',
    default: '加载中',
    desc: 'props.text'
  }, {
    name: 'width',
    type: 'Number',
    default: '3',
    desc: 'props.width'
  }, {
    name: 'color',
    type: 'String',
    default: '',
    desc: 'props.color'
  }]
}
