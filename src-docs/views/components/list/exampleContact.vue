<template>
<mobile-tear-sheet>
  <vui-list>
    <vui-list-item title="有图标">
      <vui-avatar src="/images/avatar1.jpg" slot="rightAvatar"/>
      <vui-icon icon="menu" slot="left" color="pinkA200"/>
    </vui-list-item>
    <vui-list-item title="木有图标" inset>
      <vui-avatar src="/images/avatar2.jpg" slot="rightAvatar"/>
    </vui-list-item>
    <vui-list-item title="木有图标" inset>
      <vui-avatar src="/images/avatar3.jpg" slot="rightAvatar"/>
    </vui-list-item>
    <vui-list-item title="木有图标" inset>
      <vui-avatar src="/images/avatar4.jpg" slot="rightAvatar"/>
    </vui-list-item>
  </vui-list>
  <vui-divider :padding="['10px','0']"/>
  <vui-list>
    <vui-list-item title="菜单">
      <vui-avatar src="/images/uicon.jpg" slot="rightAvatar"/>
      <vui-avatar color="pinkA200" :style="{'margin-left': '-8px'}" backgroundColor="transparent" slot="leftAvatar">A</vui-avatar>
    </vui-list-item>
    <vui-list-item title="菜单" inset>
      <vui-avatar src="/images/avatar5.jpg" slot="rightAvatar"/>
    </vui-list-item>
    <vui-list-item title="菜单" inset>
      <vui-avatar src="/images/avatar6.jpg" slot="rightAvatar"/>
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
