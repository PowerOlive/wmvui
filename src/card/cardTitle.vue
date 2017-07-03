<template>
<div class="vui-card-title-container">
  <div class="vui-card-title" :class="titleClass">{{title}}</div>
  <div class="vui-card-sub-title" :class="subTitleClass">{{subTitle}}</div>
</div>
</template>

<script>
export default {
  name: 'vui-card-title',
  props: {
    title: {
      type: String
    },
    titleClass: {
      type: [String, Array, Object]
    },
    subTitle: {
      type: String
    },
    subTitleClass: {
      type: [String, Array, Object]
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-card-title-container{
  /* padding: 15px; */
  position: relative;
}
.vui-card-title{
  font-size: 24px;
  color: @textColor;
  line-height: 36px;
}
.vui-card-sub-title{
  font-size: 14px;
  color: @lightBlack;
  display: block;
}
</style>
