import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '`card` 需要一系列组件配合使用才能完成效果, `vui-card`、`vui-card-header`、`vui-card-media`、`vui-card-title`、`vui-card-text`、`vui-card-actions`',
  card: {
    slots: {
      default: '用于放置子组件'
    }
  },
  cardHeader: {
    props: {
      // title: '标题文字',
      // titleClass: '标题样式,同 `class` 绑定方式一致',
      // subTitle: '子标题文字',
      // subTitleClass: '子标题样式,同 `class` 绑定方式一致'
    },
    slots: {
      title: '用于放置 标题',
      subTitle: '用于放置 子标题',
      avatar: '用于放置 avatar 组件',
      default: '用于放置一些其它内容'
    }
  },
  cardMedia: {
    props: {
      // title: '标题文字',
      // titleClass: '标题样式,同 `class` 绑定方式一致',
      // subTitle: '子标题文字',
      // subTitleClass: '子标题样式,同 `class` 绑定方式一致'
    },
    slots: {
      title: '用于放置 标题',
      subTitle: '用于放置 子标题',
      default: '放置图片等媒体元素'
    }
  },
  cardTitle: {
    props: {
      // title: '标题文字',
      // titleClass: '标题样式,同 `class` 绑定方式一致',
      // subTitle: '子标题文字',
      // subTitleClass: '子标题样式,同 `class` 绑定方式一致'
    }
  },
  cardText: {
    slots: {
      title: '用于放置 标题',
      subTitle: '用于放置 子标题',
      default: '用于放置大段介绍性的文字'
    }
  },
  cardActions: {
    slots: {
      default: '用于放置动作按钮'
    }
  }
}
