import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '配合 `menu` 和 `listItem` 组件使用，定义不同的内容和颜色',
  iconAndButton: '变异',
  iconAndButtonDesc: '配合 `icon` 和 `button` 组件使用',
  custom: '定义不同的内容与尺寸',
  props: {
    text: '内容文本',
    theme: '主题样式 如 ` \'red\' or {background:\'red\'}`',
    round: '是否为圆角',
    circle: '是否为圆形',
    dot: '显示成圆点，可配置颜色',
    size: '配置大小 仅支持circle状态时'
  },
  slots: {
    text: '徽章上标内容',
    sub: '下标内容'
  }
}
