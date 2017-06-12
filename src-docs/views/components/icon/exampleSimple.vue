<template>
<div>
  <div class="icon-contaner">
    <mu-icon icon="like-fill"/>
    <mu-icon icon="menu" color="red"/>
    <mu-icon icon="search" color="orange"/>
    <mu-icon icon="more" color="blue"/>
  </div>

  <div class="icon-contaner">
    <mu-icon icon="code"/>
    <mu-icon icon="like" :size="32"/>
    <mu-icon icon="right" :size="36"/>
    <mu-icon icon="left" :size="48"/>
  </div>
</div>
</template>

<style>
.icon-contaner .mu-icon {
  margin-right: 12px;
  margin-bottom: 12px;
}
</style>
