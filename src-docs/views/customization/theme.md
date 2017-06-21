
<!-- 动态的切换主题,需要依赖 `webpack` 的 `raw-loader` 加载器

```html
<template>
<vui-tabs :value="theme" @change="changeTheme">
  <vui-tab title="LIGHT (DEFAULT)" value="light"/>
  <vui-tab title="DARK" value="dark"/>
  <vui-tab title="CARBON" value="carbon"/>
  <vui-tab title="TEAL" value="teal"/>
</vui-tabs>
</template>
<script>
import light from 'wmvui/dist/theme-default.css'
import dark from 'wmvui/dist/theme-dark.css'
import carbon from 'wmvui/dist/theme-carbon.css'
import teal from 'wmvui/dist/theme-teal.css'
export default {
  data () {
    return {
      theme: 'light',
      themes: {
        light,
        dark,
        carbon,
        teal
      }
    }
  },
  methods: {
    changeTheme (theme) {
      this.theme = theme
      const styleEl = this.getThemeStyle()
      styleEl.innerHTML = this.themes[theme] || ''
    },
    getThemeStyle () {
      const themeId = 'muse-theme'
      let styleEl = document.getElementById(themeId)
      if (styleEl) return styleEl
      styleEl = document.createElement('style')
      styleEl.id = themeId
      document.body.appendChild(styleEl)
      return styleEl
    }
  }
}
</script>
``` -->

### 自定义主题
目前只支持 `less`, 如黑色的主题配置如下所示 `dark.less`
```js
import Vue from 'vue'
import MuseUI from 'wuvui'
import 'wmvui/dist/wuvui.css'
@import "path/theme.less"; // 引入自定义主题(path)路径
Vue.use(MuseUI)
```

```less
// 修改基础变量
@primaryColor: @blue500;  // 主色
@darkerPrimaryColor: @blue700;
@lighterPrimaryColor: @grey400;

// success
@successColor: @green500;
@darkerSuccessColor: @green600; 

// info
@infoColor: @blue300;
@darkerInfoColor: @blue500; 

// warn
@warnColor: @orange400;
@darkerWarnColor: @orange600; 

// danger
@dangerColor: @red400;
@darkerDangerColor: @red600; 

……

@import "wmvui/less/theme-vars.less";  // 默认组件变量

// 修改组件变量
@datePickerHeaderColor: fade(@fullWhite, 12%);
……

@import "wmvui/less/theme.less"; // 主题相关的样式

```

<!-- ### 关于主题变量

主题的颜色变量，来源于 [material design colors](https://material.google.com/style/color.html#color-text-background-colors) -->

<!-- ```less
@fontFamily: Roboto, Lato, sans-serif;  // 字体

// 主色和强调色
@primaryColor: @lightBlue;           // 主色
@darkerPrimaryColor: @lightBlue700;  // 更深的主色
@lighterPrimaryColor: @grey400;      // 浅一点的主色
@accentColor: @pinkA200;             // 强调色
@darkerAccentColor: @grey100;        // 更深的强调色
@lighterAccentColor: @grey500;       // 浅一点的强调色

// 文本颜色
@textColor: @darkBlack;
@primaryTextColor: fade(@fullBlack, 54%);
@alternateTextColor: @white;
@borderColor: fade(@fullBlack, 12%);
@disabledColor: fade(@fullBlack, 38%);

// background
@backgroundColor: @white;           // 背景色
@statusBarBackgroundColor: @grey300; // web项目没有状态栏，所以也没有使用
@appbarBackgroundColor: @grey100; // 并未在appbar组件中应用
@dialogBackgroundColor: @white; // dialogs、 cards、 paper 组件背景

// icon color
@activeIconColor: fade(@fullBlack, 54%);
@inActiveIconColor: fade(@fullBlack, 38%);
```
 -->