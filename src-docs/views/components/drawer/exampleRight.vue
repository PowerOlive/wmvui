<template>
<div>
  <vui-button primary label="显示在右边" @click="toggle()"/>
  <vui-drawer right :open="open" @close="toggle()">
    <vui-appbar title="Muse UI"/>
    <vui-list>
      <vui-list-item>
        <template slot="title">菜单1</template>
      </vui-list-item>
      <vui-list-item>
        <template slot="title">菜单2</template>
      </vui-list-item>
      <vui-list-item @click.native="open = false">
        <template slot="title">关闭</template>
      </vui-list-item>
    </vui-list>
  </vui-drawer>
</div>
</template>

<script>
export default {
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
</script>
