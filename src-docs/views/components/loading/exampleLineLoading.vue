<template>
<div>
  <vui-loading type="line" class="demo-loading" />
  <vui-loading type="line" :size="40" success class="demo-loading"/>
  <vui-loading type="line" :size="50" info class="demo-loading"/>
  <vui-loading type="line" :size="60" showText text="玩命加载中" warn class="demo-loading"/>
  <vui-loading type="line" :size="50" danger class="demo-loading"/>
  <vui-loading type="line" :size="40" showText color="black" class="demo-loading"/>
</div>
</template>
<style>
.demo-loading{
  margin: 10px;
}
</style>
