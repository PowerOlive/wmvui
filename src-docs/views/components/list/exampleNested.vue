<template>
  <vui-list>
    <vui-list-item toggleNested>
      <template slot="title">一级菜单</template>
      <vui-icon slot="left" icon="right"/>
      <vui-list-item slot="nested" disabled toggleNested>
        <template slot="title">二级菜单禁止点击</template>
        <vui-icon slot="left" icon="right"/>
        <vui-list-item slot="nested">
          <template slot="title">三级菜单</template>
          <vui-icon slot="left" icon="right"/>
        </vui-list-item>
      </vui-list-item>
      <vui-list-item slot="nested" toggleNested>
        <template slot="title">二级菜单</template>
        <vui-icon slot="left" icon="right"/>
        <vui-list-item slot="nested">
          <template slot="title">三级菜单</template>
          <vui-icon slot="left" icon="right"/>
        </vui-list-item>
      </vui-list-item>
    </vui-list-item>
  </vui-list>
</template>
<script>
export default {
  components: {
  }
}
</script>
