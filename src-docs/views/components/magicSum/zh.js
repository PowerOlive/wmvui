import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: ' ',
  props: {
    time: '执行动画所需时间',
    start: '是否开始动画',
    startNum: '开始数字',
    endNum: '结束数字',
    decimals: ' 小数点位数',
    size: '字体大小',
    state: '字体状态 可选 success info warn danger'
  },
  events: {
  }
}
