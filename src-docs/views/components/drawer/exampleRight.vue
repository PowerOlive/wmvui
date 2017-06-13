<template>
<div>
  <vui-raised-button label="toggle drawer" @click="toggle()"/>
  <vui-drawer right :open="open" @close="toggle()">
    <vui-appbar title="Muse UI"/>
    <vui-list>
      <vui-list-item title="Menu Item 1"/>
      <vui-list-item title="Menu Item 2"/>
      <vui-list-item title="Menu Item 3"/>
      <vui-list-item @click.native="open = false" title="Close"/>
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
