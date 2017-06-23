import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: ' ',
  props: {
    time: '结束时间',
    format: '显示格式'
  },
  events: {
    // tick: '时间计算时触发，但非精确每1s触发',
    finish: '时间结束时触发'
  }
}
