export default {
  props: [{
    name: 'theme',
    type: 'Object',
    default: '',
    desc: 'props.theme'
  }],
  slots: [{
    name: 'default',
    desc: 'slots.default'
  }],
  events: [{
    name: 'delete',
    desc: 'events.delete'
  }]
}
