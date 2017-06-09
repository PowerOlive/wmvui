<template>
<div class="demo-raised-button-container">
  <mu-raised-button label="选择文件">
    <input type="file" class="file-button">
  </mu-raised-button>
  <mu-raised-button label="文字在后面" icon="like-fill" primary/>
  <mu-raised-button label="文字在前面" labelPosition="before" icon="like-fill" secondary/>
  <mu-raised-button href="https://github.com/531431988/wmvui"  icon="like-fill" label="链接按钮" labelPosition="after" secondary>
  </mu-raised-button>
  <mu-raised-button icon="like-fill" backgroundColor="#a4c639" />
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
.mu-raised-button{
  margin:10px 10px 0 0;
}
</style>
