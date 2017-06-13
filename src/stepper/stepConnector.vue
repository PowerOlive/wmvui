<template>
<div class="vui-step-connector">
  <span class="vui-step-connector-line"></span>
</div>
</template>

<script>
export default {
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-step-connector{
  flex: 1 1 auto;
  .vui-stepper-vertical &{
    margin-left: 25px;
  }
}

.vui-step-connector-line{
  display: block;
  border-color: @grey400;
  margin-left: -6px;
  border-top-style: solid;
  border-top-width: 1px;
  .vui-stepper-vertical & {
    border-top: none;
    border-left-style: solid;
    border-left-width: 1px;
    min-height: 28px;
    margin-left: 0;
  }
}
</style>
