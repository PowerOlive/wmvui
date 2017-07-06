<template>
<div class="demo-label-container">
  <vui-label class="demo-label">默认标签</vui-label>
  <vui-label class="demo-label" icon="round-close-fill" :iconSize="24" @delete="handleClose">
    可删除的标签
  </vui-label>
  <vui-label class="demo-label">
    <vui-avatar src="images/uicon.jpg"/>带头像的标签
  </vui-label>
  <vui-label class="demo-label" @delete="handleClose">
    <vui-svg-icon icon="love" :size="42"/>SVG多彩图标
  </vui-label>
  <vui-label class="demo-label" icon="round-close-fill" :iconSize="32" @delete="handleClose">
    <vui-avatar icon="email-fill" :size="48" />给我打电话
  </vui-label>
  <vui-label class="demo-label" :theme="tagTheme" @delete="handleClose">
    <vui-avatar :theme="avatarTheme" :size="48">MB</vui-avatar>自定义效果
  </vui-label>

  <vui-popup position="center" toast :overlay="true" :open="toast">你点击了按钮</vui-popup>
</div>
</template>

<script>
export default {
  data () {
    return {
      toast: false,
      tagTheme: {
        'background': '#ef5350',
        'color': '#fff'
      },
      avatarTheme: {
        'background': '#b71c1c',
        'color': '#fff'
      }
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
