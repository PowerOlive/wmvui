<template>
<div>
  <vui-button label="选择文件" primary class="demo-vui-button" >
    <vui-icon icon="like" />
    <input type="file" class="file-button">
  </vui-button>

  <vui-button label="返回" to="window.history.back()" icon="left" info class="demo-vui-button" />

  <vui-button label="gitHub" href="https://github.com/531431988/wmvui" target="_blank" iconRight danger icon="right" secondary class="demo-vui-button" />

  <vui-button label="文字在前面" icon="like-fill" backgroundColor="#009688" color="#FFF" class="demo-vui-button" />

</div>
</template>

<style>
.file-button{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  opacity: 0
}
</style>

