import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  props: {
    showDelete: '是否显示删除图标',
    disabled: '设为true则不可点击',
    theme: '主题样式 如 `{background:\'red\'}`'
  },
  slots: {
    default: '用于放置 avatar 和简短的文字'
  },
  events: {
    delete: '点击删除图标后触发',
    click: '点击时候触发'
  }
}
