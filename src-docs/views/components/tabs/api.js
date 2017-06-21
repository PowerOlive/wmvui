export default {
  tabs: {
    props: [{
      name: 'lineHeight',
      type: 'String',
      default: '',
      desc: 'tabs.props.lineHeight'
    }, {
      name: 'value',
      type: '',
      default: '',
      desc: 'tabs.props.value'
    }, {
      name: 'color',
      type: '',
      default: '',
      desc: 'tabs.props.color'
    }],
    slots: [{
      name: 'default',
      desc: 'tabs.slots.default'
    }],
    events: [{
      name: 'change',
      desc: 'tabs.events.change'
    }]
  },
  tab: {
    props: [{
      name: 'icon',
      type: 'String',
      default: '',
      desc: 'tab.props.icon'
    }, {
      name: 'title',
      type: 'String',
      default: '',
      desc: 'tab.props.title'
    }, {
      name: 'titleClass',
      type: 'String,Object,Array',
      default: '',
      desc: 'tab.props.titleClass'
    }, {
      name: 'value',
      type: '',
      default: '',
      desc: 'tab.props.value'
    }, {
      name: 'href',
      type: 'String',
      default: '',
      desc: 'tab.props.href'
    }, {
      name: 'disabled',
      type: 'Boolean',
      default: 'false',
      desc: 'tab.props.disabled'
    }, {
      name: 'badge',
      type: 'Object',
      default: '',
      desc: 'tab.props.badge'
    }],
    events: [{
      name: 'active',
      desc: 'tab.events.active'
    }, {
      name: 'click',
      desc: 'tab.events.click'
    }],
    slots: [{
      name: 'default',
      desc: 'tab.slots.default'
    }]
  }
}
