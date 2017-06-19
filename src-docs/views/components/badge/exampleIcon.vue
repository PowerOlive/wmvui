<template>
<div class="demo-badge-container">
  <vui-badge success content="10" class="demo-icon-badge" circle>
    <vui-icon icon="like-fill" :size="24" />
  </vui-badge>
  <vui-badge info content="12" circle>
    <vui-button :circle="42" icon="like-fill" />
  </vui-badge>
</div>
</template>

<style>
.demo-badge-container{
  padding-top: 24px;
}
.demo-icon-badge {
  padding: 12px;
  margin-right: 16px;
}
</style>
