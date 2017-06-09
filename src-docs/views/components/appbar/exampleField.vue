<template>
  <mu-appbar>
    <mu-icon-button icon="menu" slot="left" />
    <mu-text-field icon="search" class="appbar-search-field flex-item" hintText="搜索关键字" fullWidth />
    <div slot="right">
      <mu-badge content="12" circle secondary badgeClass="vui-badge">
          <mu-icon-button icon="like-fill"/>
      </mu-badge>
    </div>
  </mu-appbar>
</template>

<style lang="scss">
.appbar-search-field{
  color: #FFF;
  margin-bottom: 0;
  &.focus-state {
    color: #FFF;
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
}
.vui-badge{
  top:0;
  right:0;
}
</style>
