<template>
  <vui-appbar>
    <vui-button icon="menu" slot="left" />
    <vui-text-field icon="search" class="appbar-search-field flex-item" hintText="搜索关键字" fullWidth />
    <div slot="right">
      <vui-badge content="12" circle secondary badgeClass="vui-badge">
          <vui-button icon="like-fill"/>
      </vui-badge>
    </div>
  </vui-appbar>
</template>

<style lang="scss">
.appbar-search-field{
  color: #FFF;
  margin-bottom: 0;
  &.focus-state {
    color: #FFF;
  }
  .vui-text-field-input {
    color: #FFF;
  }
  .vui-text-field-focus-line {
    background-color: #FFF;
  }
}
.vui-badge{
  top:0;
  right:0;
}
</style>
