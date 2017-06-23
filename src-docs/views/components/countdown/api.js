export default {
  props: [{
    name: 'time',
    type: 'Number',
    default: '',
    desc: 'props.time'
  }, {
    name: 'start',
    type: 'Boolean',
    default: 'true',
    desc: 'props.start'
  }],
  events: [{
    name: 'finish',
    desc: 'events.finish'
  }]
}
