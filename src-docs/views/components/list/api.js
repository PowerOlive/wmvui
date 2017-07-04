import router from '../internal/router'
export default {
  list: {
    props: [{
      name: 'value',
      type: '',
      default: '',
      desc: 'list.props.value'
    }],
    slots: [{
      name: 'default',
      desc: 'list.slots.default'
    }],
    events: [{
      name: 'change',
      desc: 'list.events.change'
    }, {
      name: 'itemClick',
      desc: 'list.events.itemClick'
    }]
  },
  listItem: {
    props: [{
      name: 'href',
      type: 'String',
      default: '',
      desc: 'listItem.props.href'
    }, ...router, {
      name: 'target',
      type: 'String',
      default: '',
      desc: 'listItem.props.target'
    // }, {
    //   name: 'title',
    //   type: 'String',
    //   default: '',
    //   desc: 'listItem.props.title'
    // }, {
    //   name: 'titleClass',
    //   type: 'String,Object,Array',
    //   default: '',
    //   desc: 'listItem.props.titleClass'
    // }, {
      // name: 'afterText',
      // type: 'String',
      // default: '',
      // desc: 'listItem.props.afterText'
    // }, {
    //   name: 'afterTextClass',
    //   type: 'String,Object,Array',
    //   default: '',
    //   desc: 'listItem.props.afterTextClass'
    // }, {
    //   name: 'describe',
    //   type: 'String',
    //   default: '',
    //   desc: 'listItem.props.describe'
    // }, {
      name: 'describeLine',
      type: 'Number',
      default: '1',
      desc: 'listItem.props.describeLine'
    }, {
      // name: 'describeTextClass',
      // type: 'String,Object,Array',
      // default: '',
      // desc: 'listItem.props.describeTextClass'
    // }, {
    //   name: 'inset',
    //   type: 'Boolean',
    //   default: 'false',
    //   desc: 'listItem.props.inset'
    }, {
      name: 'disabled',
      type: 'Boolean',
      default: 'false',
      desc: 'listItem.props.disabled'
    }, {
      name: 'disableRipple',
      type: 'Boolean',
      default: 'false',
      desc: 'listItem.props.disableRipple'
    }, {
      name: 'value',
      type: '',
      default: '',
      desc: 'listItem.props.value'
    }, {
      name: 'toggleNested',
      type: 'Boolean',
      default: 'false',
      desc: 'listItem.props.toggleNested'
    }, {
    //   name: 'toggleIconClass',
    //   type: 'String,Object,Array',
    //   default: '',
    //   desc: 'listItem.props.toggleIconClass'
    // }, {
    //   name: 'nestedListClass',
    //   type: 'String,Object,Array',
    //   default: '',
    //   desc: 'listItem.props.nestedListClass'
    }, {
      name: 'open',
      type: 'Boolean',
      default: 'true',
      desc: 'listItem.props.open'
    }],
    slots: [{
      name: 'left',
      desc: 'listItem.slots.left'
    }, {
      name: 'right',
      desc: 'listItem.slots.right'
    }, {
      name: 'title',
      desc: 'listItem.slots.title'
    }, {
    //   name: 'after',
    //   desc: 'listItem.slots.after'
    // }, {
      name: 'describe',
      desc: 'listItem.slots.describe'
    }, {
      name: 'nested',
      desc: 'listItem.slots.nested'
    }, {
      name: 'default',
      desc: 'listItem.slots.default'
    }],
    events: [{
      name: 'click',
      desc: 'listItem.events.click'
    }, {
    //   name: 'hover',
    //   desc: 'listItem.events.hover'
    // }, {
    //   name: 'hoverExit',
    //   desc: 'listItem.events.hoverExit'
    // }, {
    //   name: 'keyboardFocus',
    //   desc: 'listItem.events.keyboardFocus'
    // }, {
      name: 'toggleNested',
      desc: 'listItem.events.toggleNested'
    }]
  }
}
