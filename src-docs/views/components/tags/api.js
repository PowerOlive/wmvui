export default {
  props: [{
    name: 'showDelete',
    type: 'Boolean',
    default: 'false',
    desc: 'props.showDelete'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: 'props.disabled'
  }, {
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
  }, {
    name: 'click',
    desc: 'events.click'
  }]
}
