import description from './README.md'

export default {
  description,
  simpleExample: '水平的步骤导航',
  simpleExampleDesc: '一个活动发起的示例, 默认的步骤导航，是一步完成之后才能进行下一步的， 通过改变 `activeStep` 的值来控制当前步骤，使用的时候可根据 `activeStep` 展示相应的页面',
  verticalExample: '垂直的步骤导航',
  verticalExampleDesc: '垂直的步骤导航，步骤内容需要放置在 `stepContent` 组件中，当 `activeStep` 改变时会显示不同的内容, `stepContent` 只可以被用在垂直的步骤导航中',
  nolinearExample: '非线性步骤导航',
  nolinearExampleDesc: '`linear` 设置为 false 时，不用完成上一步骤也可以查看下步骤的内容，`stepLabel` 需要被替换为 `stepButton` 并监听点击事件显示改步骤内容',
  controlExample: '非线性控制完成示例',
  controlExampleDesc: '`linear` 这是为 false 时, `stepper` 组件不再给 `step` 传递 `completed` 属性，因此需要手动给每一个`step` 绑定 `completed`',
  customExample: '自定义图标',
  stepper: {
    props: {
      activeStep: '当前步骤',
      orientation: 'horizontal: 水平步骤导航, vertical: 垂直的步骤导航'
    },
    slots: {
      default: '用于放置 `step` 组件'
    }
  },
  step: {
    props: {
      active: '是否为当前步骤',
      completed: '是否已完成',
      disabled: '是否被禁用',
      index: '当前步骤下标',
      last: '是否是最后一步'
    },
    slots: {
      default: '用于放置 `stepLabel` 、 `stepButton` 、 `stepContent` 等组件'
    }
  },
  stepLabel: {
    props: {
      active: '是否是当前步骤',
      completed: '是否已完成',
      disabled: '是否被禁用',
      num: '步骤序号'
    },
    slots: {
      icon: '用于自定义左边的icon',
      default: '放置步骤标题文字'
    }
  },
  stepContent: {
    props: {
      active: '是否是当前步骤',
      last: '是否是最后一步'
    },
    slots: {
      default: '放置步骤的具体内容，此组件只能在垂直导航模式下使用'
    }
  }
}
