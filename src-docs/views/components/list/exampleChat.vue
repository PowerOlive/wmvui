<template>
  <vui-list>
    <vui-sub-header color="blue">最近聊天记录</vui-sub-header>
    <vui-divider dotted />
    <vui-list-item title="小胖子">
      <vui-avatar src="images/avatar3.jpg" slot="leftAvatar"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
    <vui-divider dotted />
    <vui-list-item title="小慧慧">
      <vui-avatar src="images/avatar4.jpg" slot="leftAvatar"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
    <vui-divider dotted />
    <vui-list-item title="有图标">
      <vui-avatar src="images/avatar1.jpg" slot="rightAvatar"/>
      <vui-icon icon="menu" slot="left" color="pinkA200"/>
    </vui-list-item>
    <vui-divider dotted />
    <vui-list-item title="有文字">
      <vui-avatar src="images/uicon.jpg" slot="rightAvatar"/>
      <vui-avatar color="pinkA200" :style="{'margin-left': '-8px'}" backgroundColor="transparent" slot="leftAvatar">A</vui-avatar>
    </vui-list-item>
    <vui-divider dotted />
  </vui-list>
</template>

<script>
export default {
  components: {
  }
}
</script>
