<template>
<tfoot class="vui-tfoot">
  <slot></slot>
</tfoot>
</template>

<script>
export default {
  name: 'vui-tfoot',
  created () {
    this.isTfoot = true
  },
  computed: {
    showCheckbox () {
      return this.$parent.showCheckbox
    }
  }
}
</script>
