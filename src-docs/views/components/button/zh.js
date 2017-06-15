import router from '../internal/router/zh'
import description from './README.md'

export default {
  description,
  exampleBtnDefault: '文字状态按钮',
  exampleBtnDefaultDesc: ' `text` 需要配合按钮状态使命用，详细请看代码',
  exampleBtnState: '背景状态按钮',
  exampleBtnStateDesc: '默认 `primary` `success` `info` `warn` `danger` 5种状态',
  exampleBtnInvert: '反色按钮',
  exampleBtnInvertDesc: '`invert` 按钮需要配合按钮状态使用，详细请看代码',
  exampleBtnIcon: '图标按钮',
  exampleBtnIconDesc: '配合选择文件按钮，图标按钮 iconRight可设置图标右边显示',
  exampleBtnRound: '圆角按钮',
  exampleBtnRoundDesc: '`round` 可配置圆角按钮，详细请看代码',
  exampleBtnCircle: '圆形按钮',
  exampleBtnCircleDesc: '`circle` 可配置圆形按钮，详细请看代码',
  exampleBtnFill: '整行按钮',
  exampleBtnFillDesc: '`fill` 可配置圆形按钮，详细请看代码',
  props: {
    label: '按钮上的文字',
    icon: '按钮上的图标',
    iconSize: '按钮上的图标大小',
    iconRight: '文字的位置, 默认左边，可设置右边显示',
    circle: '圆形按钮',
    round: '圆角按钮',
    text: '无背景按钮 可配置状态 ',
    invert: '是否显示成反色按钮 需要配合对应的`按钮状态`',
    state: '按钮状态可选值 `primary` `success` `info` `warn` `danger`',
    padding: '按钮填充大小，允许传2个值 上下 与 左右',
    disabled: '按钮是否不可用',
    type: '相当于button元素的type属性',
    href: '相当于 a 标签的 href属性，设置之后会渲染成 a 标签，默认是使用button标签',
    target: '相当于 a 标签的target属性',
    backgroundColor: '按钮背景色',
    color: '按钮颜色',
    hoverColor: '鼠标移上去的背景色',
    fill: '占一整行的按钮',
    activeColor: '点击时颜色',
    activeOpacity: '点击时颜色透明度'
  },
  slots: {
    default: '用来放置 input[type=file] 等特殊的按钮，或者自定义icon、文字'
  },
  events: {
    click: '按钮点击事件',
    hover: '鼠标移到按钮上的事件',
    hoverExit: '鼠标移出按钮上的事件',
    keyboardFocus: '键盘使按钮获取焦点的事件，第一个参数为true 时表示获取焦点，为 false 失去焦点, (isFocus)'
  },
  router
}
