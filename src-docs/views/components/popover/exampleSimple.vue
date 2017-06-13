<template>
<div>
  <vui-raised-button label="点这里" ref="button" @click="toggle"/>
  <vui-popover :trigger="trigger" :open="open" @close="handleClose">
    <vui-menu>
      <vui-menu-item title="Refresh" />
      <vui-menu-item title="Send feedback" />
      <vui-menu-item title="Settings" />
      <vui-menu-item title="Help" />
      <vui-menu-item title="Sign out" />
    </vui-menu>
  </vui-popover>
</div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      trigger: null
    }
  },
  mounted () {
    this.trigger = this.$refs.button.$el
  },
  methods: {
    toggle () {
      this.open = !this.open
    },
    handleClose (e) {
      this.open = false
    }
  }
}
</script>
