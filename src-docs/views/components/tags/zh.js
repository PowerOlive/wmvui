import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  props: {
    right: '右上显示',
    bottom: '右下显示',
    left: '左下显示'
  },
  slots: {
    default: '用于放置图片或其他',
    icon: '用于放置角标'
  },
  events: {
  }
}
