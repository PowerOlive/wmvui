<template>
  <vui-list>
    <vui-divider dotted />
    <vui-list-item title="有图标">
      <vui-avatar src="images/avatar1.jpg" slot="rightAvatar"/>
      <vui-icon icon="menu" slot="left" color="pinkA200"/>
    </vui-list-item>
    <vui-divider dotted />
    <vui-list-item title="木有图标" inset>
      <vui-avatar src="images/avatar2.jpg" slot="rightAvatar"/>
    </vui-list-item>
    <vui-divider dotted />
    <vui-list-item title="菜单">
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
