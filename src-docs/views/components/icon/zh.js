import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '通过 `icon` 属性定义不同icon, 改变 `size` 来定义图标的大小，通过 `color` 来定义颜色',
  props: {
    icon: 'icon的名称，不同的icon 对应不同的icon， 可以去图表集中查找',
    size: '图标的大小',
    color: '图表的颜色',
    text: '显示的文字'
  }
}
