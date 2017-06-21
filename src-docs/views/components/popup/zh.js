import description from './README.md'

export default {
  description,
  exampleToast: 'toast使用示例',
  examplePopup: 'Popup使用示例',
  props: {
    open: '是否打开',
    toast: '是否显示为toast常规4种状态 error success info warn',
    loading: '显示为<a href="#/loading">loading</a>参数 type showText color size ',
    icon: '可选 是否显示图标',
    svgIcon: ' 可选 是否显示彩色SVG图标',
    fill: 'popup 宽100%',
    popupTransition: '弹出层的内置过渡效果,popup-slide-(top,right,bottom,left)',
    position: '弹出位置 left, right, top, bottom',
    overlay: '是否有遮盖层',
    overlayColor: '遮盖层颜色',
    overlayOpacity: '遮盖层透明度'
  },
  slots: {
    default: '弹出层内容'
  },
  events: {
    close: '当点击遮盖层或者按下`esc`键时触发该事件，会传入一个 `reason` 作为参数，```javascript\n (reason) => console.log(reason)  \n```',
    show: '当 popup 显示时(动画完成后)触发事件',
    hide: '当 popup 隐藏时(动画完成后)触发事件'
  }
}
