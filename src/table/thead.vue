<template>
  <thead class="vui-thead">
    <slot></slot>
  </thead>
</template>

<script>
export default {
  name: 'vui-thead',
  created () {
    this.isThead = true
  },
  computed: {
    showCheckbox () {
      return this.$parent.showCheckbox
    },
    enableSelectAll () {
      return this.$parent.enableSelectAll
    },
    multiSelectable () {
      return this.$parent.multiSelectable
    },
    isSelectAll () {
      return this.$parent.isSelectAll
    }
  },
  methods: {
    selectAll () {
      this.$parent.selectAll()
    },
    unSelectAll () {
      this.$parent.unSelectAll()
    }
  }
}
</script>

<style lang="scss">
@import "../styles/import.scss";
.vui-thead {
  border-bottom: 1px solid $borderColor;
}
</style>
