<template>
  <div class="vui-list">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'vui-list',
  props: {
    nestedLevel: {
      type: Number,
      default: 0
    },
    value: {}
  },
  methods: {
    handleChange (value) {
      this.$emit('change', value)
    },
    handleItemClick (listItem) {
      this.$emit('itemClick', listItem)
      this.$emit('item-click', listItem)
    }
  }
}
</script>
<style lang="less">
@import "../styles/import.less";
.vui-list {
  padding: 8px 0;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: visible;
  .vui-sub-header:first-child{
    margin-top: -8px;
  }
}
</style>
