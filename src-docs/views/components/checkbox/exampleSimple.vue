<template>
<div>
  <vui-checkbox label="最简单的" class="demo-checkbox"/> <br/>
  <vui-checkbox label="自定义icon" class="demo-checkbox" uncheckIcon="like" checkedIcon="like-fill" :iconSize="24" /> <br/>
  <vui-checkbox label="不同的图形的icon" class="demo-checkbox" uncheckIcon="round-close" checkedIcon="round-close-fill" :iconSize="24"/><br/>
  <vui-checkbox label="不可用" class="demo-checkbox" disabled/> <br/>
  <vui-checkbox label="不可用" class="demo-checkbox" disabled :value="true"/><br/>
  <vui-checkbox label="文字在左边的" class="demo-checkbox" labelLeft/><br/>
</div>
</template>
<style>
.demo-checkbox {
  margin-bottom: 16px;
}
</style>
