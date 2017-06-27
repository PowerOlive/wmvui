import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: ' ',
  props: {
    max: '最多可选个数',
    value: '值，使用 v-model 绑定',
    score: '是否显示分数',
    disabled: '是否禁用',
    icon: '定义图标样子',
    iconSize: '图标大小',
    color: '选中时的颜色',
    margin: '右间距值'
  },
  events: {
    click: '单击评星时的回调'
  }
}
