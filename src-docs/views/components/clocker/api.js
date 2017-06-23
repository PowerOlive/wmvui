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
  events: [{
  //   name: 'tick',
  //   desc: 'events.tick'
  // }, {
    name: 'finish',
    desc: 'events.finish'
  }]
}
