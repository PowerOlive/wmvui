import description from './README.md'

export default {
  description,
  simpleExample: '默认模式',
  simpleExampleDesc: '加载原始图片大小',
  exampleCut: 'diy模式',
  exampleCutDesc: '裁切为默认图片大小',
  props: {
    init: '初始化图片',
    src: '最终显示图片',
    error: '加载出错图片',
    time: '设置一个检测时间间隔',
    mode: '将显示原图，diy模式，将自定义剪切，默认剪切居中部分',
    cut: '图片剪切成默认图片大小；false显示图片真实大小，需要配合diy模式'
  }
}
