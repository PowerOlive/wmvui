import description from './README.md'

export default {
  description,
  props: {
    state: '可选状态 success info warn danger',
    type: '可选效果 circle line',
    showText: '是否显示文字',
    text: '自定义文字',
    // max: '最大值',
    // min: '最小值',
    size: '设置大小',
    width: '设置圆形线宽',
    color: '自定义颜色'
  }
}
