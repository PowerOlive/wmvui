<template>
  <div>
    <div class="vui-banner">
      <div class="vui-logo">
        <img src="images/logo.png" class="vui-logo-image" alt="">
      </div>
      <h1 class="vui-banner-title">
        WMVUI
      </h1>
      <h2 class="vui-banner-sub-title">
        基于 Vue 2.0 和 <a href="https://www.muse-ui.org/#/index" style="color:yellow">Muse-UI</a> 的UI组件库再次开发<br>添加了很多实用功能，因为比较懒所以直接修改文档
      </h2>
      <div class="vui-banner-actions">
        <vui-button label="文档" to="/install" backgroundColor="#ffc107" class="vui-banner-button"/>
        <vui-button label="GITHUB" href="https://github.com/531431988/wmvui" backgroundColor="#ffc107" class="vui-banner-button" icon=":mudocs-icon-custom-github"/>
      </div>
    </div>
    <div class="vui-desc-wrapper">
      <!-- <div class="vui-desc">
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
      </div> -->
    </div>

    <!-- <div class="vui-footer">
      WMVUI is open source and released under the MIT Licence.<br/>
      Copyright (c) 2016 myron
    </div> -->
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "../../src/styles/vars.scss";
.vui-banner{
  z-index: 100;
  position: absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  background:#2196f3;
}
.vui-logo{
  width: 120px;
  height: 120px;
  line-height: 100px;
  text-align: center;
  background-color: $alternateTextColor;
  margin:  10% auto 0;
  color: $primaryColor;
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
  color: lighten($alternateTextColor, 87%);
  margin-top: 0;
  margin-bottom: 12px;
  text-align: center;
}

.vui-banner-sub-title{
  color: lighten($alternateTextColor, 87%);
  text-align: center;
  font-weight: 300;
  margin-bottom: 16px;
  margin-top: 0;
  padding-left: 32px;
  padding-right: 32px;
}

.vui-banner-button{
  color:#fff;
  margin: 0 10px;
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
