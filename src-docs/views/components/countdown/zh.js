import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: ' ',
  props: {
    time: '时间，秒为单位',
    start: '是否开始计数'
  },
  events: {
    finish: '时间结束时触发'
  }
}
