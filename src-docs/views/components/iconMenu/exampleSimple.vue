<template>
<div>
  <mu-icon-menu
      icon="menu"
      :anchorOrigin="leftTop"
      :targetOrigin="leftTop"
    >
      <mu-menu-item title="选我" />
      <mu-menu-item title="选我5杀" />
      <mu-menu-item title="妈德智障他们骗你的" />
    </mu-icon-menu>
    <mu-icon-menu
      icon="menu"
      :anchorOrigin="leftBottom"
      :targetOrigin="leftBottom"
    >
      <mu-menu-item title="选我" />
      <mu-menu-item title="选我5杀" />
      <mu-menu-item title="妈德智障他们骗你的" />
    </mu-icon-menu>
    <mu-icon-menu
      icon="menu"
      :anchorOrigin="rightBottom"
      :targetOrigin="rightBottom"
    >
      <mu-menu-item title="选我" />
      <mu-menu-item title="选我5杀" />
      <mu-menu-item title="妈德智障他们骗你的" />
    </mu-icon-menu>
    <mu-icon-menu
      icon="menu"
      :anchorOrigin="rightTop"
      :targetOrigin="rightTop"
    >
      <mu-menu-item title="选我" />
      <mu-menu-item title="选我5杀" />
      <mu-menu-item title="妈德智障他们骗你的" />
    </mu-icon-menu>
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
