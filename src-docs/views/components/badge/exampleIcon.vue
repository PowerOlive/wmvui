<template>
<div class="demo-badge-container">
  <mu-badge content="10" class="demo-icon-badge" circle secondary>
    <mu-icon icon="like-fill" :size="24" />
  </mu-badge>
  <mu-badge content="12" circle secondary>
    <mu-icon-button icon="like-fill" />
  </mu-badge>
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
