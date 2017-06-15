<template>
<div>
  <vui-button label="可滚动" info @click="open"/>
  <vui-dialog :open="dialog" @close="close" title="标题" scrollable>
    <vui-menu>
      <vui-menu-item :title="'menu item ' + menu" v-for="menu, index in menus" :key="index"/>
    </vui-menu>
    <vui-button text primary label="关闭" @click="close" slot="actions"/>
  </vui-dialog>
</div>
</template>

<script>
export default {
  data () {
    const menus = []
    for (let i = 0; i < 30; i++) {
      menus.push(i + 1)
    }
    return {
      dialog: false,
      menus
    }
  },
  methods: {
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    }
  }
}
</script>
