export default {
  props: [{
    name: 'max',
    type: 'Number',
    default: '5',
    desc: 'props.max'
  }, {
    name: 'value',
    type: 'Number',
    default: '0',
    desc: 'props.value'
  }, {
    name: 'score',
    type: 'Boolean',
    default: 'false',
    desc: 'props.score'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: 'props.Boolean'
  }, {
    name: 'icon',
    type: 'String',
    default: '',
    desc: 'props.icon'
  }, {
    name: 'iconSize',
    type: 'Number',
    default: '24',
    desc: 'props.iconSize'
  }, {
    name: 'color',
    type: 'String',
    default: '#2196f3',
    desc: 'props.color'
  }, {
    name: 'margin',
    type: 'Number',
    default: '4',
    desc: 'props.margin'
  }],
  events: [{
    name: 'click',
    desc: 'events.click'
  }]
}
