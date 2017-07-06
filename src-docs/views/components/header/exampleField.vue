<template>
  <vui-header>
    <vui-button color="#fff" :iconSize="16" icon="menu" slot="left"/>
    <vui-text-field icon="search" class="appbar-search-field flex-item" hintText="搜索关键字" fill />
    <template slot="right">
      <vui-badge circle :theme="danger" :size="20">
        <template slot="text">12</template>
        <vui-button color="#fff" :iconSize="20" icon="like-fill" slot="sub"/>
      </vui-badge>
    </template>
  </vui-header>
</template>
<script>
export default {
  data () {
    return {
      danger: {
        background: '#ef5350',
        color: '#fff'
      }
    }
  }
}
</script>
<style lang="scss">
.appbar-search-field{
  .vui-text-field{
    &-focus-line{
      background-color: #fff;
    }
  }
  &.vui-text-field.focus-state{
    color:#fff
  }
}
</style>
