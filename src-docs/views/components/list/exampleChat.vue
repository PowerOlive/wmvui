<template>
<mobile-tear-sheet>
  <vui-list>
    <vui-sub-header color="blue">最近聊天记录</vui-sub-header>
    <vui-list-item title="小明">
      <vui-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
    <vui-list-item title="小虎儿">
      <vui-avatar src="/images/avatar2.jpg" slot="leftAvatar"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
    <vui-list-item title="小胖子">
      <vui-avatar src="/images/avatar3.jpg" slot="leftAvatar"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
    <vui-list-item title="小慧慧">
      <vui-avatar src="/images/avatar4.jpg" slot="leftAvatar"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
    <vui-list-item title="小义">
      <vui-avatar src="/images/uicon.jpg" slot="leftAvatar"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
  </vui-list>
  <vui-divider/>
  <vui-list>
    <vui-sub-header fontSize="16px" color="red">历史聊天记录</vui-sub-header>
    <vui-list-item title="小明">
      <vui-avatar src="/images/avatar5.jpg" slot="leftAvatar"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
    <vui-list-item title="小刀">
      <vui-avatar src="/images/avatar6.jpg" slot="leftAvatar"/>
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
