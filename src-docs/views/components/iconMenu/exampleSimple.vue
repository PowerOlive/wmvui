<template>
<div>
  <vui-icon-menu
      icon="menu"
      :anchorOrigin="leftTop"
      :targetOrigin="leftTop"
    >
      <vui-menu-item title="选我" />
      <vui-menu-item title="选我5杀" />
      <vui-menu-item title="妈德智障他们骗你的" />
    </vui-icon-menu>
    <vui-icon-menu
      icon="menu"
      :anchorOrigin="leftBottom"
      :targetOrigin="leftBottom"
    >
      <vui-menu-item title="选我" />
      <vui-menu-item title="选我5杀" />
      <vui-menu-item title="妈德智障他们骗你的" />
    </vui-icon-menu>
    <vui-icon-menu
      icon="menu"
      :anchorOrigin="rightBottom"
      :targetOrigin="rightBottom"
    >
      <vui-menu-item title="选我" />
      <vui-menu-item title="选我5杀" />
      <vui-menu-item title="妈德智障他们骗你的" />
    </vui-icon-menu>
    <vui-icon-menu
      icon="menu"
      :anchorOrigin="rightTop"
      :targetOrigin="rightTop"
    >
      <vui-menu-item title="选我" />
      <vui-menu-item title="选我5杀" />
      <vui-menu-item title="妈德智障他们骗你的" />
    </vui-icon-menu>
</div>
</template>

<script>
export default {
  data () {
    return {
      leftTop: {horizontal: 'left', vertical: 'top'},
      leftBottom: {horizontal: 'left', vertical: 'bottom'},
      rightBottom: {horizontal: 'right', vertical: 'bottom'},
      rightTop: {horizontal: 'right', vertical: 'top'}
    }
  }
}
</script>
