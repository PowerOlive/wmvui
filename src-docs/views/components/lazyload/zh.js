import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: ' ',
  props: {
    init: '初始化图片',
    src: '最终显示图片',
    error: '加载出错图片',
    mode: '将显示原图，diy模式，将自定义剪切，默认剪切居中部分',
    time: '设置一个检测时间间隔'
    // cut: '自动将图片剪切成默认图片的宽高；false显示图片真实宽高'
  }
}
