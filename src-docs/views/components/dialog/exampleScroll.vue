<template>
<div>
  <vui-button label="scrollable dialog" @click="open"/>
  <vui-dialog :open="dialog" @close="close" title="Scrollable Dialog" scrollable>
    <vui-menu>
      <vui-menu-item :title="'menu item ' + menu" v-for="menu, index in menus" :key="index"/>
    </vui-menu>
    <vui-button primary label="关闭" @click="close" slot="actions"/>
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
