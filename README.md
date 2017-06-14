# 基于大牛的Muse UI 在次开发，功能正在完善中，感谢开源
[![npm package](https://img.shields.io/npm/v/muse-ui.svg)](https://www.npmjs.org/package/muse-ui)
[![NPM downloads](http://img.shields.io/npm/dm/muse-ui.svg)](https://npmjs.org/package/muse-ui)
[![Join the chat at https://gitter.im/muse-ui/muse-ui](https://badges.gitter.im/muse-ui/muse-ui.svg)](https://gitter.im/muse-ui/muse-ui?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Material Design UI library for Vuejs 2.0

## Links

* [WMVUI 演示](http://wm.wuhao.in/wmvui)
* [Muse UI官方](https://www.muse-ui.org/#/install)

## Install

```bash
npm install wmvui -save
```

## Get Started

```javascript
import Vue from 'vue'
import WMVUI from 'wmvui'
import 'wmvui/dist/wmvui.css'
Vue.use(WMVUI)
```

or

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
      'wmvui': 'wmvui/src'
    }
  }
}
```

**main.js**

```javascript
import Vue from 'vue'
import 'wmvui/styles/base.less' // 加载基础的样式
import appBar from 'wmvui/appBar'
import avatar from 'wmvui/avatar'
// ..
Vue.component(appBar.name, appBar)
Vue.component(avatar.name, avatar)
```


## Browser Support

* IE 10+
* Andorid 4.4+
* IOS 7+

## Changelog

Detailed changes for each release are documented in the [release notes](https://museui.github.io/#/changeLog).

## Contribution

Please make sure to read the [Contributing Guide](https://museui.github.io/#/contributing) before making a pull request.

## Dependencies

* [vuejs 2.0](https://vuejs.org/)
* [keycode](https://github.com/timoxley/keycode)
* [material icons](https://fonts.googleapis.com/icon?family=Material+Icons)
* [material design](https://material.google.com)

## Licence

wmvui is open source and released under the MIT Licence.

Copyright (c) 2016 myron
