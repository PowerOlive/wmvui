import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: ' ',
  props: {
    time: '结束时间',
    format: '显示格式'
  },
  slots: {
    value: '若存在，则作为最终显示出来的格式模板'
  },
  events: {
    // onTick: '时间计算时触发，但非精确每1s触发',
    onFinish: '时间结束时触发'
  }
}
