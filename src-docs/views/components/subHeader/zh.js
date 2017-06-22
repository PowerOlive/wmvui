import description from './README.md'

export default {
  description,
  listExample: '配合列表使用',
  insetExample: '向内缩进示例',
  gridListExample: '配合网格列表使用',
  props: {
    top: '设置 `margin-top` 偏移距离',
    right: '设置 `margin-right` 偏移距离',
    bottom: '设置 `margin-bottom` 偏移距离',
    left: '设置 `margin-left` 偏移距离',
    padding: '设置 `padding` 填充',
    fontSize: '字体大小',
    color: '文字颜色'
  },
  slots: {
    default: '放置副标题内容'
  }
}
