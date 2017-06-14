<template>
<div>
  <vui-button label="选择文件" primary class="demo-vui-raised-button" >
  	<vui-icon icon="like" />
    <input type="file" class="file-button">
  </vui-button>
  <vui-button label="文字在后面" icon="like-fill" info class="demo-vui-raised-button" />
  <vui-button label="文字在前面" iconRight danger icon="like-fill" secondary class="demo-vui-raised-button" />
  <vui-button label="文字在前面" icon="like-fill" backgroundColor="#009688" color="#FFF" :iconSize="24" class="demo-vui-raised-button" />
</div>
</template>

