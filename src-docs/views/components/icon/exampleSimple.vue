<template>
<div>
  <div class="icon-contaner">
    <vui-icon icon="like-fill"/>
    <vui-icon icon="menu" color="red"/>
    <vui-icon icon="search" color="orange"/>
    <vui-icon icon="more" color="blue"/>
  </div>

  <div class="icon-contaner">
    <vui-icon icon="code"/>
    <vui-icon icon="like" :size="32"/>
    <vui-icon icon="right" :size="36"/>
    <vui-icon icon="left" :size="48"/>
  </div>
</div>
</template>

<style>
.icon-contaner .vui-icon {
  margin-right: 12px;
  margin-bottom: 12px;
}
</style>
