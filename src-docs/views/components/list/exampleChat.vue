<template>
  <vui-list>
    <vui-sub-header color="blue">最近聊天记录</vui-sub-header>
    <vui-list-item title="小胖子">
      <vui-avatar src="/images/avatar3.jpg" slot="leftAvatar"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
    <vui-divider/>
    <vui-list-item title="小慧慧">
      <vui-avatar src="/images/avatar4.jpg" slot="leftAvatar"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
    <vui-sub-header fontSize="16px" color="red" top="20px">历史聊天记录</vui-sub-header>
    <vui-list-item title="小刀">
      <vui-avatar src="/images/avatar6.jpg" slot="leftAvatar"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
  </vui-list>
</template>

<script>
export default {
  components: {
  }
}
</script>
