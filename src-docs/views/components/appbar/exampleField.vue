<template>
  <vui-appbar>
    <vui-button :circle="36" color="#fff" :iconSize="16" icon="menu" slot="left"/>
    <vui-text-field icon="search" class="appbar-search-field flex-item" hintText="搜索关键字" fill />
    <div slot="right">
      <vui-badge content="12" circle danger badgeClass="vui-badge">
          <vui-button :circle="36" color="#fff" :iconSize="16" icon="like-fill"/>
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
  top:-5px;
  right:-5px;
}
</style>
