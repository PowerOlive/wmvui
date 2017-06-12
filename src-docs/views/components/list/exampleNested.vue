<template>
<mobile-tear-sheet>
  <mu-list>
    <mu-list-item title="一级菜单">
      <mu-icon slot="left" icon="like-fill"/>
    </mu-list-item>
    <mu-list-item title="一级菜单">
      <mu-icon slot="left" icon="like-fill"/>
    </mu-list-item>
    <mu-list-item title="一级菜单" toggleNested>
      <mu-icon slot="left" icon="like-fill"/>
      <mu-list-item slot="nested" title="二级菜单">
        <mu-icon slot="left" icon="like-fill"/>
      </mu-list-item>
      <mu-list-item slot="nested" disabled title="三级菜单禁止点击" toggleNested>
        <mu-icon slot="left" icon="like-fill"/>
        <mu-list-item title="三级菜单" slot="nested">
          <mu-icon slot="left" icon="like-fill"/>
        </mu-list-item>
      </mu-list-item>
      <mu-list-item slot="nested" title="二级菜单" toggleNested>
        <mu-icon slot="left" icon="like-fill"/>
        <mu-list-item title="三级菜单" slot="nested">
          <mu-icon slot="left" icon="like-fill"/>
        </mu-list-item>
      </mu-list-item>
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
