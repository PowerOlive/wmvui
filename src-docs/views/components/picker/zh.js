import description from './README.md'

export default {
  description,
  simpleExample: '双向绑定',
  simpleExampleDesc: '简单的picker双向绑定',
  popupExample: '弹层示例',
  popupExampleDesc: 'picker弹层多列选择',
  props: {
    data: '选项列表数据',
    value: '表单值，使用 v-model 绑定'
  },
  events: {
    change: '选择值变化时触发,可选参数 (name, val)'
  }
}
