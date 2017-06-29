<template>
<div class="demo-chip-container">
  <vui-tag class="demo-chip">默认标签</vui-tag>
  <vui-tag class="demo-chip"  @delete="handleClose" showDelete>可删除的标签</vui-tag>
  <vui-tag class="demo-chip">
    <vui-avatar src="/images/uicon.jpg"/>带头像的标签
  </vui-tag>
  <vui-tag class="demo-chip" @delete="handleClose" showDelete>
    <vui-svg-icon icon="love" :size="42"/>SVG多彩图标
  </vui-tag>
  <vui-tag class="demo-chip" @delete="handleClose" showDelete icon="phone-fill" :iconSize="24">
    <vui-avatar icon="email-fill" :size="48" />给我打电话
  </vui-tag>
  <vui-tag class="demo-chip" backgroundColor="blue300" @delete="handleClose" showDelete>
    <vui-avatar color="blue300" backgroundColor="indigo900" :size="48">MB</vui-avatar>自定义效果
  </vui-tag>
  <vui-popup position="center" toast :overlay="true" :open="toast">你点击了删除</vui-popup>
</div>
</template>

<script>
export default {
  data () {
    return {
      toast: false
    }
  },
  methods: {
    handleClose () {
      this.toast = true
      setTimeout(() => {
        this.toast = false
      }, 1000)
    }
  }
}
</script>

<style lang="css">
.demo-chip-container{
  display: flex;
  flex-wrap: wrap;
}
.demo-chip{
  margin: 4px;
}
</style>
