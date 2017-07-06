import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  props: {
    theme: '主题样式 如 `{background:\'red\'}`'
  },
  slots: {
    default: '用于放置 avatar 和简短的文字'
  },
  events: {
    delete: '点击删除图标后触发'
  }
}
