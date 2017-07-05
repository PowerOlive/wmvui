export default {
  props: [{
    name: 'init',
    type: 'String',
    default: '',
    desc: 'props.init'
  }, {
    name: 'src',
    type: 'String',
    default: '',
    desc: 'props.src'
  }, {
    name: 'error',
    type: 'String',
    default: '',
    desc: 'props.error'
  }, {
    name: 'mode',
    type: 'String',
    default: '',
    desc: 'props.mode'
  }, {
    name: 'time',
    type: 'Number',
    default: '300',
    desc: 'props.time'
  }, {
    name: 'cut',
    type: 'cut',
    default: 'false',
    desc: 'props.cut'
  }]
}
