<template>
<div>
    <vui-raised-button label="toggle drawer" @click="toggle()"/>
    <vui-raised-button label="undocked drawer" @click="toggle(true)"/>
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
