<template>
  <vui-list>
    <vui-divider dotted />
    <vui-list-item>
      <template slot="title">有图标</template>
      <vui-avatar src="images/avatar1.jpg" slot="right"/>
      <vui-icon icon="menu" slot="left" color="pinkA200"/>
    </vui-list-item>
    <vui-divider dotted />
    <vui-list-item>
      <template slot="title">木有图标</template>
      <vui-avatar src="images/avatar2.jpg" slot="right"/>
    </vui-list-item>
    <vui-divider dotted />
    <vui-list-item>
      <template slot="title">菜单</template>
      <vui-avatar src="images/uicon.jpg" slot="right"/>
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
