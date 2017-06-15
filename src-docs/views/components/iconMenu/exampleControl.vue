<template>
<div>
  <vui-icon-menu icon="menu" @change="handleChange" :open="open" @open="handleOpen" @close="handleClose" :value="value">
    <vui-menu-item value="1" title="Refresh" />
    <vui-menu-item value="2" title="Send feedback" />
    <vui-menu-item value="3" title="Settings" />
    <vui-menu-item value="4" title="Help" />
    <vui-menu-item value="5" title="Sign out" />
  </vui-icon-menu>
  <vui-button label="toggle" @click="toggle"/>
</div>
</template>

<script>
export default {
  data () {
    return {
      value: '3',
      open: false
    }
  },
  methods: {
    handleChange (val) {
      this.value = val
    },
    toggle () {
      this.open = !this.open
    },
    handleOpen () {
      this.open = true
    },
    handleClose () {
      this.open = false
    }
  }
}
</script>
