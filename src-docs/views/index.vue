<template>
  <div>
    <div class="vui-banner">
      <img src="images/bg.png" class="vui-banner-image" width="100%" height="100%"/>
      <div class="vui-logo">
        <img src="images/logo.png" class="vui-logo-image" alt="">
      </div>
      <h1 class="vui-banner-title">
        WMVUI
      </h1>
      <h2 class="vui-banner-sub-title">
        基于 Vue 2.0 和 <a href="https://www.muse-ui.org/#/index">Muse-UI</a> 的UI组件库再次开发完善<br>集成更多实用组件 感谢大牛们的开源
      </h2>
      <div class="vui-banner-actions">
        <vui-raised-button label="文档" to="/install" class="vui-banner-button"/>
        <vui-raised-button label="GITHUB" href="https://github.com/531431988/wmvui" class="vui-banner-button" icon=":mudocs-icon-custom-github"/>
      </div>
    </div>
    <div class="vui-desc-wrapper">
      <div class="vui-desc">
        <div class="vui-desc-content">
          <h2 class="vui-desc-title">组件丰富</h2>
          <h3 class="vui-desc-sub-title">多功能组件，使用无忧</h3>
          <div class="vui-desc-text">
            Muse UI 基本实现了 Material Design 设计规范类的所有组件，另外还开发许多的功能性的组件
          </div>
        </div>
        <img src="images/img1.png" class="vui-desc-image" />
      </div>
      <vui-divider/>
      <div class="vui-desc">
        <img src="images/img2.png" class="vui-desc-image" />
        <div class="vui-desc-content">
          <h2 class="vui-desc-title">可定制</h2>
          <h3 class="vui-desc-sub-title">自定义主题文件，更易扩展</h3>
          <div class="vui-desc-text">
            Muse UI 使用less文件，所有的颜色都有一个变量维护，通过编写 less 文件完成自定义主题，另外组件内部也提供一些修改效果的参数
          </div>
        </div>
      </div>
      <vui-divider/>
      <div class="vui-desc">
        <div class="vui-desc-content">
          <h2 class="vui-desc-title">可定制</h2>
          <h3 class="vui-desc-sub-title">基于 Vue 2.0，开发更加快速</h3>
          <div class="vui-desc-text">
            Muse UI 基于 Vue2.0 开发，Vue2.0是当下最快的前端框架之一，小巧，api友好，可用于开发的复杂单页应用
          </div>
        </div>
        <img src="images/img3.png" class="vui-desc-image" />
      </div>
    </div>

    <div class="vui-footer">
      Muse-UI is open source and released under the MIT Licence.<br/>
      Copyright (c) 2016 myron
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
@import "../../src/styles/vars.less";
.vui-banner{
  z-index: 100;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.vui-banner-image {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}
.vui-logo{
  width: 120px;
  height: 120px;
  line-height: 100px;
  text-align: center;
  background-color: @alternateTextColor;
  margin:  0 auto;
  color: @primaryColor;
  font-size: 50px;
  border-radius: 50%;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.vui-logo-image {
  width: 70%;
  height: 70%;
}
.vui-banner-title{
  display: block;
  font-size: 48px;
  line-height: 1;
  font-weight: 300;
  color: fade(@alternateTextColor, 87%);
  margin-top: 0;
  margin-bottom: 12px;
  text-align: center;
}

.vui-banner-sub-title{
  color: fade(@alternateTextColor, 87%);
  text-align: center;
  font-weight: 300;
  margin-bottom: 16px;
  margin-top: 0;
  padding-left: 32px;
  padding-right: 32px;
}

.vui-banner-button{
  color: @primaryColor;
}

.vui-banner-actions{
  text-align: center;
  font-size: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .vui-raised-button {
    font-size: 15px;
    margin-left: 12px;
  }
}
.vui-desc-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.vui-desc {
  max-width: 972px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 500px;
}
.vui-desc-image + .vui-desc-content,
.vui-desc-content + .vui-desc-image {
  margin-left: 120px;
}

.vui-desc-title{
  font-size: 64px;
  font-weight: 300;
  color: #726b79;
  margin: 0;
}
.vui-desc-sub-title {
  font-size: 36px;
  font-weight: 300;
  color: #8d70aa;
  margin: 0;
}
.vui-desc-image {
  width: 400px;
}

.vui-desc-text {
  font-size: 18px;
  color: #736f76;
  font-weight: 300;
}

.vui-footer{
  background-color: #1b1b1b;
  text-align: center;
  color: #777777;
  padding: 50px 40px;
}
</style>
