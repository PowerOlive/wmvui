<template>
  <vui-appbar>
    <vui-button color="#fff" :iconSize="16" icon="menu" slot="left"/>
    <vui-text-field icon="search" class="appbar-search-field flex-item" hintText="搜索关键字" fill />
    <template slot="right">
      <vui-badge content="12" circle danger>
          <vui-button color="#fff" :iconSize="20" icon="like-fill"/>
      </vui-badge>
    </template>
  </vui-appbar>
</template>

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
