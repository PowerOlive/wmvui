<template>
<div class="demo-flat-button-container">
  <vui-flat-button label="选择文件" class="demo-vui-raised-button" >
    <input type="file" class="file-button">
  </vui-flat-button>
  <vui-flat-button label="文字在后面" icon="like-fill" primary class="demo-vui-raised-button" />
  <vui-flat-button label="文字在前面" labelPosition="before" icon="like-fill" secondary class="demo-vui-raised-button" />
  <vui-flat-button icon="like-fill" backgroundColor="#a4c639" color="#FFF" :iconSize="24" class="demo-vui-raised-button" />
</div>
</template>

