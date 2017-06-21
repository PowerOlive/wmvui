export default {
  props: [{
    name: 'open',
    type: 'Boolean',
    default: 'false',
    desc: 'props.open'
  }, {
    name: 'toast',
    type: 'Boolean,Object',
    default: 'false',
    desc: 'props.toast'
  }, {
    name: 'icon',
    type: 'String',
    default: 'false',
    desc: 'props.icon'
  }, {
    name: 'svgIcon',
    type: 'Boolean,String',
    default: 'false',
    desc: 'props.svgIcon'
  }, {
    name: 'loading',
    type: 'Object',
    default: '',
    desc: 'props.loading'
  }, {
    name: 'fill',
    type: 'Boolean',
    default: 'false',
    desc: 'props.fill'
  }, {
    name: 'popupTransition',
    type: 'String',
    default: '',
    desc: 'props.popupTransition'
  }, {
    name: 'position',
    type: 'String',
    default: '',
    desc: 'props.position'
  }, {
    name: 'overlay',
    type: 'Boolean',
    default: 'true',
    desc: 'props.overlay'
  }, {
    name: 'overlayColor',
    type: 'String',
    default: '#000',
    desc: 'props.overlayColor'
  }, {
    name: 'overlayOpacity',
    type: 'Number',
    default: '0.4',
    desc: 'props.overlayOpacity'
  }],
  slots: [{
    name: 'default',
    desc: 'slots.default'
  }],
  events: [{
    name: 'close',
    desc: 'events.close'
  }, {
    name: 'show',
    desc: 'events.show'
  }, {
    name: 'hide',
    desc: 'events.hide'
  }]
}
