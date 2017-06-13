<template>
<mobile-tear-sheet>
  <vui-list>
    <vui-list-item title="一级菜单">
      <vui-icon slot="left" icon="like-fill"/>
    </vui-list-item>
    <vui-list-item title="一级菜单">
      <vui-icon slot="left" icon="like-fill"/>
    </vui-list-item>
    <vui-list-item title="一级菜单" toggleNested>
      <vui-icon slot="left" icon="like-fill"/>
      <vui-list-item slot="nested" title="二级菜单">
        <vui-icon slot="left" icon="like-fill"/>
      </vui-list-item>
      <vui-list-item slot="nested" disabled title="三级菜单禁止点击" toggleNested>
        <vui-icon slot="left" icon="like-fill"/>
        <vui-list-item title="三级菜单" slot="nested">
          <vui-icon slot="left" icon="like-fill"/>
        </vui-list-item>
      </vui-list-item>
      <vui-list-item slot="nested" title="二级菜单" toggleNested>
        <vui-icon slot="left" icon="like-fill"/>
        <vui-list-item title="三级菜单" slot="nested">
          <vui-icon slot="left" icon="like-fill"/>
        </vui-list-item>
      </vui-list-item>
    </vui-list-item>
  </vui-list>
</mobile-tear-sheet>
</template>
<script>
import mobileTearSheet from '../../../components/mobileTearSheet'
export default {
  components: {
    'mobile-tear-sheet': mobileTearSheet
  }
}
</script>
