import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '设置不同的图片、图标、文件以及大小',
  props: {
    theme: '主题样式 如 `{background:\'red\'}`',
    src: '相当于 img 标签的 src 属性',
    icon: '显示的图标',
    iconSize: '图标的大小',
    size: 'avatar 的大小, 默认 40px'
  },
  slots: {
    default: '用于放置 avatar 的文字'
  }
}
