<template>
<div>
    <vui-raised-button label="左边打开不能自动关闭" @click="toggle()"/>
    <vui-raised-button label="显示遮罩可自动关闭" @click="toggle(true)"/>
    <vui-drawer :open="open" :docked="docked" @close="toggle()">
      <vui-list @itemClick="docked ? '' : toggle()">
        <vui-list-item title="Menu Item 1"/>
        <vui-list-item title="Menu Item 2"/>
        <vui-list-item title="Menu Item 3"/>
        <vui-list-item v-if="docked" @click.native="open = false" title="Close"/>
      </vui-list>
    </vui-drawer>
</div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      docked: true
    }
  },
  methods: {
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    }
  }
}
</script>
