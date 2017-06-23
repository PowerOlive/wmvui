export default {
  props: [{
    name: 'time',
    type: 'Number',
    default: '2',
    desc: 'props.time'
  }, {
    name: 'start',
    type: 'Boolean',
    default: 'true',
    desc: 'props.start'
  }, {
    name: 'startNum',
    type: 'Number',
    default: '0',
    desc: 'props.startNum'
  }, {
    name: 'endNum',
    type: 'Number',
    default: '0',
    desc: 'props.endNum'
  }, {
    name: 'size',
    type: 'Number',
    default: '32',
    desc: 'props.size'
  }, {
    name: '状态',
    type: 'Number',
    default: 'primary',
    desc: 'props.state'
  }],
  events: [{
    name: 'finish',
    desc: 'events.finish'
  }]
}
