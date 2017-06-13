<template>
<mobile-tear-sheet>
  <vui-list>
    <vui-sub-header inset>文件夹</vui-sub-header>
    <vui-list-item title="文件夹" describeText="2017-06-12">
      <vui-avatar icon="like-fill" slot="leftAvatar"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
    <vui-list-item title="文件夹" describeText="2017-06-12">
      <vui-avatar icon="like-fill" slot="leftAvatar"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
    <vui-list-item title="文件夹" describeText="2017-06-12">
      <vui-avatar icon="like-fill" slot="leftAvatar"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
  </vui-list>
  <vui-divider inset/>
  <vui-list>
    <vui-sub-header inset>Files</vui-sub-header>
    <vui-list-item title="文件夹" describeText="2017-06-12">
      <vui-avatar icon="like-fill" backgroundColor="blue" slot="leftAvatar" />
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
    <vui-list-item title="文件夹" describeText="2017-06-12">
      <vui-avatar icon="like-fill" backgroundColor="yellow600" slot="leftAvatar" />
      <vui-icon icon="right" slot="right"/>
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
