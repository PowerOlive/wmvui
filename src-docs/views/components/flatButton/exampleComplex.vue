<template>
<div class="demo-flat-button-container">
  <mu-flat-button label="选择文件">
    <input type="file" class="file-button">
  </mu-flat-button>
  <mu-flat-button label="文字在后面" icon="like-fill" primary/>
  <mu-flat-button label="文字在前面" labelPosition="before" icon="like-fill" secondary/>
  <mu-flat-button icon="like-fill" backgroundColor="#a4c639" color="#FFF" :iconSize="24"/>
</div>
</template>
<style>
.mu-raised-button{
	margin:10px 10px 0 0;
}
</style>
