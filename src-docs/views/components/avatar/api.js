export default {
  props: [{
    name: 'theme',
    type: 'Obejct',
    default: '',
    desc: 'props.theme'
  }, {
    name: 'src',
    type: 'String',
    default: '',
    desc: 'props.src'
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
    name: 'size',
    type: 'Number',
    default: '',
    desc: 'props.size'
  }],
  slots: [{
    name: 'default',
    desc: 'slots.default'
  }]
}
