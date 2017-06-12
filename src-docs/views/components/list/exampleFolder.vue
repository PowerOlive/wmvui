<template>
<mobile-tear-sheet>
  <mu-list>
    <mu-sub-header inset>文件夹</mu-sub-header>
    <mu-list-item title="文件夹" describeText="2017-06-12">
      <mu-avatar icon="like-fill" slot="leftAvatar"/>
      <mu-icon icon="right" slot="right"/>
    </mu-list-item>
    <mu-list-item title="文件夹" describeText="2017-06-12">
      <mu-avatar icon="like-fill" slot="leftAvatar"/>
      <mu-icon icon="right" slot="right"/>
    </mu-list-item>
    <mu-list-item title="文件夹" describeText="2017-06-12">
      <mu-avatar icon="like-fill" slot="leftAvatar"/>
      <mu-icon icon="right" slot="right"/>
    </mu-list-item>
  </mu-list>
  <mu-divider inset/>
  <mu-list>
    <mu-sub-header inset>Files</mu-sub-header>
    <mu-list-item title="文件夹" describeText="2017-06-12">
      <mu-avatar icon="like-fill" backgroundColor="blue" slot="leftAvatar" />
      <mu-icon icon="right" slot="right"/>
    </mu-list-item>
    <mu-list-item title="文件夹" describeText="2017-06-12">
      <mu-avatar icon="like-fill" backgroundColor="yellow600" slot="leftAvatar" />
      <mu-icon icon="right" slot="right"/>
    </mu-list-item>
  </mu-list>
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
