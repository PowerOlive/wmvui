<template>
<div class="demo-flat-button-container">
  <mu-flat-button label="选择文件" class="demo-mu-raised-button" >
    <input type="file" class="file-button">
  </mu-flat-button>
  <mu-flat-button label="文字在后面" icon="like-fill" primary class="demo-mu-raised-button" />
  <mu-flat-button label="文字在前面" labelPosition="before" icon="like-fill" secondary class="demo-mu-raised-button" />
  <mu-flat-button icon="like-fill" backgroundColor="#a4c639" color="#FFF" :iconSize="24" class="demo-mu-raised-button" />
</div>
</template>

