import router from '../internal/router'
export default {
  props: [{
    name: 'label',
    type: 'String',
    default: '',
    desc: 'props.label'
  }, {
    name: 'icon',
    type: 'String',
    default: '',
    desc: 'props.icon'
  }, {
    name: 'iconSize',
    type: 'Number',
    default: '',
    desc: 'props.iconSize'
  }, {
    name: 'iconRight',
    type: 'Boolean',
    default: 'left',
    desc: 'props.iconRight'
  }, {
    name: 'circle',
    type: 'Boolean',
    default: '',
    desc: 'props.circle'
  }, {
    name: 'round',
    type: 'Boolean',
    default: '',
    desc: 'props.round'
  }, {
    name: 'text',
    type: 'Boolean',
    default: '',
    desc: 'props.text'
  }, {
    name: 'invert',
    type: 'Boolean',
    default: '',
    desc: 'props.invert'
  }, {
    name: '按钮状态',
    type: 'Boolean',
    default: '',
    desc: 'props.state'
  }, {
    name: 'padding',
    type: 'Array',
    default: '4px 20px',
    desc: 'props.padding'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: 'props.disabled'
  }, {
    name: 'type',
    type: 'String',
    default: '',
    desc: 'props.type'
  }, {
    name: 'href',
    type: 'String',
    default: '',
    desc: 'props.href'
  }, {
    name: 'target',
    type: 'String',
    default: '',
    desc: 'props.target'
  }, {
    name: 'backgroundColor',
    type: 'String',
    default: '',
    desc: 'props.backgroundColor'
  }, {
    name: 'color',
    type: 'String',
    default: '',
    desc: 'props.color'
  }, {
  //   name: 'hoverColor',
  //   type: 'String',
  //   default: '',
  //   desc: 'props.hoverColor'
  // }, {
    name: 'fill',
    type: 'Boolean',
    default: 'false',
    desc: 'props.fill'
  }, ...router, {
    name: 'activeColor',
    type: 'String',
    default: '',
    desc: 'props.activeColor'
  }, {
    name: 'activeOpacity',
    type: 'Number',
    default: '',
    desc: 'props.activeOpacity'
  }],
  slots: [{
    name: 'default',
    desc: 'slots.default'
  }],
  events: [{
    name: 'click',
    desc: 'events.click'
  // }, {
  //   name: 'hover',
  //   desc: 'events.hover'
  // }, {
  //   name: 'hoverExit',
  //   desc: 'events.hoverExit'
  // }, {
  //   name: 'keyboardFocus',
  //   desc: 'events.keyboardFocus'
  }]
}
