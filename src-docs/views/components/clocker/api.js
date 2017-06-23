export default {
  props: [{
    name: 'time',
    type: 'String',
    default: '',
    desc: 'props.time'
  }, {
    name: 'format',
    type: 'String',
    default: '%D 天 %H 小时 %M 分 %S 秒',
    desc: 'props.format'
  }],
  slots: [{
    name: 'value',
    desc: 'slots.value'
  }],
  events: [{
  //   name: 'on-tick',
  //   desc: 'events.onTick'
  // }, {
    name: 'on-finish',
    desc: 'events.onFinish'
  }]
}
