<template>
<span class="vui-step-label" :class="{'active': active, 'completed': completed, 'disabled': disabled}" :data-label="label">
  <div class="vui-step-label-circle" :data-num="num"></div>
  <slot></slot>
</span>
</template>

<script>
export default {
  name: 'vui-step-label',
  props: {
    active: {
      type: Boolean
    },
    completed: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    label: String,
    num: {
      type: [String, Number]
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-step-label{
  display: block;
  color: @textColor;
  font-size: 14px;
  position: relative;
  &:before{
    content:attr(data-label);
    position: absolute;
    top:100%;
    left:0;
    right:0;
  }
  &:after{
    content:'';
    position: absolute;
    top:50%;
    left:0;
    right:0;
    height:1px;
    background-color:@grey400;
  }
  .vui-stepper-vertical & {
    /* height: 64px;
    display: flex;
    align-items: center;
    box-orient: vertical;
    flex-direction: column; */
    padding-left: 15px;
    text-align: left;
    width:auto;
  }
}
.vui-step-label-circle{
  position: relative;
  z-index:9;
  text-align: center;
  height:22px;
  width: 22px;
  line-height: 22px;
  margin: auto;
  overflow: hidden;
  border-radius: 100%;
  background-color: @grey500;
  color: @alternateTextColor;
  &:before{
    content:attr(data-num);
  }
  .vui-step-label.disabled &{
    background-color: @grey500;
    cursor: not-allowed;
  }
  .vui-step-label.completed &,
  .vui-step-label.active & {
    background-color: @primaryColor;
  }
  .vui-step-label.completed &:before{
    position:absolute;
    content:'';
    border: 2px solid #fff;
    border-top: 0;
    border-right: 0;
    left: 50%;
    top: 50%;
    width: 12px;
    height: 8px;
    margin-top:-2px;
    transform: translate3d(-50%,-50%,0) rotate(-45deg) scale(1);
  }
}
</style>
