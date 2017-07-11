<template>
<div>
  <vui-text-field label="标签文字" hintText="提示文字"/>
  <vui-text-field label="密码" hintText="请输入密码" type="password" labelFloat/>

  <ul>
    <li class="vui-flex vui-flex-top">
      <span class="demo-text-field">默认</span>
      <div class="vui-flex-item">
        <vui-text-field v-model="value"/>
      </div>
    </li>
    <li class="vui-flex vui-flex-top">
      <span class="demo-text-field">
        <vui-icon icon="like-fill" />
      </span>
      <div class="vui-flex-item">
        <vui-text-field hintText="提示文字"/>
      </div>
    </li>
    <li class="vui-flex vui-flex-top">
      <span class="demo-text-field">多行文本</span>
      <div class="vui-flex-item">
        <vui-text-field hintText="多行文本输入，默认 3行，最大6行" multiLine :rows="3" :rowsMax="6"/>
      </div>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  data () {
    return {
      value: '默认文字'
    }
  }
}
</script>

<style>
  .demo-text-field{
    width: 80px;
    display: block;
    text-align: right;
    padding-right:10px;
    font-size: 16px;
    line-height: 44px;
  }
</style>
