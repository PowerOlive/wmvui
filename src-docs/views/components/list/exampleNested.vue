<template>
  <vui-list>
    <vui-list-item title="一级菜单" toggleNested>
      <vui-icon slot="left" icon="right"/>
      <vui-list-item slot="nested" disabled title="二级菜单禁止点击" toggleNested>
        <vui-icon slot="left" icon="right"/>
        <vui-list-item title="三级菜单" slot="nested">
          <vui-icon slot="left" icon="right"/>
        </vui-list-item>
      </vui-list-item>
      <vui-list-item slot="nested" title="二级菜单" toggleNested>
        <vui-icon slot="left" icon="right"/>
        <vui-list-item title="三级菜单" slot="nested">
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
