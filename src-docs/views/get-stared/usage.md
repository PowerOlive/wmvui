## 使用

WMVUI 和其它 vue 的插件一样可以使用 `Vue.use()` 方法全部加载， 也可以通过 `webpack` 配置来单组件加载。

### 全部加载

```javascript
import Vue from 'vue'
import WMVUI from 'wmvui'
import 'wmvui/dist/wmvui.css'
Vue.use(WMVUI)
```


### 单个组件加载

**webpack.conf.js** webpack1

```javascript
{
  // ...
  module: {
    loaders: [
      // ...
      {
        test: /wmvui.src.*?js$/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    // ...
    alias: {
      'muse-components': 'wmvui/src'
    }
  }
}
```

webpack2

```javascript
{
  // ...
  rules: {
    loaders: [
      // ...
      {
        test: /wmvui.src.*?js$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    // ...
    alias: {
      'muse-components': 'wmvui/src'
    }
  }
}
```

**main.js**

```javascript
import Vue from 'vue'
import 'wmvui/src/styles/base.less' // 加载基础的样式
import appBar from 'wmvui/src/appBar'
import avatar from 'wmvui/src/avatar'
// ..
Vue.component(appBar.name, appBar)
Vue.component(avatar.name, avatar)
```
