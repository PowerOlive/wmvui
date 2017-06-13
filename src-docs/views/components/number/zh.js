import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: ' ',
  props: {
    value: '表单值，使用v-model绑定',
    min: '最小值',
    max: '最大值',
    step: '步长',
    fillable: '是否可填写',
    width: '输入框宽度'
  },
  events: {
    onPlus: '点击增加时回调方法',
    onMinus: '点击减少时回调方法'
  }
}
