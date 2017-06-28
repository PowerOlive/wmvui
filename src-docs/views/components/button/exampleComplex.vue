<template>
<div class="demo-button-container">
  <vui-button label="选择文件" class="demo-vui-button" >
    <input type="file" class="file-button">
  </vui-button>
  <vui-button label="文字在后面" icon="like-fill" primary class="demo-vui-button" />
  <vui-button label="文字在前面" labelPosition="before" icon="like-fill" secondary class="demo-vui-button" />
  <vui-button icon="like-fill" backgroundColor="#a4c639" color="#FFF" :iconSize="24" class="demo-vui-button" />
</div>
</template>

