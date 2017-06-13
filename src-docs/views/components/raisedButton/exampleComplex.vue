<template>
<div class="demo-raised-button-container">
  <vui-raised-button label="选择文件" class="demo-vui-raised-button">
    <input type="file" class="file-button">
  </vui-raised-button>
  <vui-raised-button label="文字在后面" class="demo-vui-raised-button" icon="like-fill" primary/>
  <vui-raised-button label="文字在前面" class="demo-vui-raised-button" labelPosition="before" icon="like-fill" secondary/>
  <vui-raised-button href="https://github.com/531431988/wmvui" class="demo-vui-raised-button" icon="like-fill" label="链接按钮" labelPosition="after" secondary>
  </vui-raised-button>
  <vui-raised-button icon="like-fill" class="demo-vui-raised-button" backgroundColor="#a4c639" />
</div>
</template>

<script>
export default {
}
</script>


<style lang="css">
.file-button{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
}
.demo-vui-raised-button{
  margin:10px 10px 0 0;
}
</style>
