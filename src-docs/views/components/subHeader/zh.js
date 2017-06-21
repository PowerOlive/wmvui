import description from './README.md'

export default {
  description,
  listExample: '配合列表使用',
  insetExample: '向内缩进示例',
  gridListExample: '配合网格列表使用',
  props: {
    inset: '设置 margin-left 偏移距离',
    fontSize: '字体大小',
    color: '文字颜色'
  },
  slots: {
    default: '放置副标题内容'
  }
}
