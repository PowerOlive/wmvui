import description from './README.md'

export default {
  description,
  simpleExample: '使用示例',
  flexbox: {
    props: {
      gutter: '子元素间的间隔',
      vertical: '子元素排列方向 水平方向排列 ',
      level: '子元素排列方向 垂直方向排列 ',
      wrap: '是否可以换行， wrap 允许换行， nowrap 不允许换行',
      start: '子元素X轴左对齐 可用类名 `vui-flex-start`',
      end: '子元素X轴右对齐 可用类名 `vui-flex-end`',
      center: '子元素X轴居中对齐 可用类名 `vui-flex-center`',
      top: '子元素Y轴顶对齐 可用类名 `vui-flex-top`',
      bottom: '子元素Y轴底对齐 可用类名 `vui-flex-bottom`',
      middle: '子元素Y轴居中对齐 可用类名 `vui-flex-middle`',
      around: '子元素Y轴居中对齐 可用类名 `vui-flex-around`',
      between: '子元素两端对齐平均分布 可用类名 `vui-flex-between`'
    },
    slots: {
      default: '用于放置 `flexItem` 组件'
    }
  },
  flexItem: {
    props: {
      grow: '相当于flexbox布局的 `flex-grow` 属性',
      auto: '是否自动宽'
      // shrink: '相当于flexbox布局的 `flex-shrink` 属性',
      // basis: '相当于flexbox布局的 `flex-basis` 属性',
      // order: '相当于flexbox布局的 `order` 属性，用于排序'
    },
    slots: {
      default: '用于放置具体内容'
    }
  }
}
