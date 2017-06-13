<template>
<div class="demo-badge-container">
  <vui-badge content="10" class="demo-icon-badge" circle secondary>
    <vui-icon icon="like-fill" :size="24" />
  </vui-badge>
  <vui-badge content="12" circle secondary>
    <vui-icon-button icon="like-fill" />
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
