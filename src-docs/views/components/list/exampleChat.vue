<template>
<mobile-tear-sheet>
  <mu-list>
    <mu-sub-header>最近聊天记录</mu-sub-header>
    <mu-list-item title="小明">
      <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
      <mu-icon icon="right" slot="right"/>
    </mu-list-item>
    <mu-list-item title="小虎儿">
      <mu-avatar src="/images/avatar2.jpg" slot="leftAvatar"/>
      <mu-icon icon="right" slot="right"/>
    </mu-list-item>
    <mu-list-item title="小胖子">
      <mu-avatar src="/images/avatar3.jpg" slot="leftAvatar"/>
      <mu-icon icon="right" slot="right"/>
    </mu-list-item>
    <mu-list-item title="小慧慧">
      <mu-avatar src="/images/avatar4.jpg" slot="leftAvatar"/>
      <mu-icon icon="right" slot="right"/>
    </mu-list-item>
    <mu-list-item title="小义">
      <mu-avatar src="/images/uicon.jpg" slot="leftAvatar"/>
      <mu-icon icon="right" slot="right"/>
    </mu-list-item>
  </mu-list>
  <mu-divider/>
  <mu-list>
    <mu-sub-header>历史聊天记录</mu-sub-header>
    <mu-list-item title="小明">
      <mu-avatar src="/images/avatar5.jpg" slot="leftAvatar"/>
      <mu-icon icon="right" slot="right"/>
    </mu-list-item>
    <mu-list-item title="小刀">
      <mu-avatar src="/images/avatar6.jpg" slot="leftAvatar"/>
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
