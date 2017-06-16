export default {
  flexbox: {
    props: [{
      name: 'gutter',
      type: 'Number',
      default: '8',
      desc: 'flexbox.props.gutter'
    }, {
      name: 'vertical',
      type: 'Boolean',
      default: 'false',
      desc: 'flexbox.props.vertical'
    }, {
      name: 'level',
      type: 'Boolean',
      default: 'true',
      desc: 'flexbox.props.level'
    }, {
      name: 'wrap',
      type: 'Boolean',
      default: 'false',
      desc: 'flexbox.props.wrap'
    }, {
      name: 'start',
      type: 'Boolean',
      default: 'false',
      desc: 'flexbox.props.start'
    }, {
      name: 'end',
      type: 'Boolean',
      default: 'false',
      desc: 'flexbox.props.end'
    }, {
      name: 'center',
      type: 'Boolean',
      default: 'false',
      desc: 'flexbox.props.center'
    }, {
      name: 'top',
      type: 'Boolean',
      default: 'false',
      desc: 'flexbox.props.top'
    }, {
      name: 'bottom',
      type: 'Boolean',
      default: 'false',
      desc: 'flexbox.props.bottom'
    }, {
      name: 'middle',
      type: 'Boolean',
      default: 'false',
      desc: 'flexbox.props.middle'
    }, {
      name: 'around',
      type: 'Boolean',
      default: 'false',
      desc: 'flexbox.props.around'
    }, {
      name: 'between',
      type: 'Boolean',
      default: 'false',
      desc: 'flexbox.props.between'
    }],
    slots: [{
      name: 'default',
      desc: 'flexbox.slots.default'
    }]
  },
  flexItem: {
    props: [{
      name: 'grow',
      type: 'String, Number',
      default: '1',
      desc: 'flexItem.props.grow'
    }, {
      name: 'auto',
      type: 'Boolean',
      default: 'true',
      desc: 'flexItem.props.auto'
    }],
    slots: [{
      name: 'default',
      desc: 'flexItem.slots.default'
    }]
  }
}
