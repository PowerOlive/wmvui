<template>
  <vui-list>
    <vui-sub-header color="blue">最近聊天记录</vui-sub-header>
    <vui-divider dotted />
    <vui-list-item>
      <template slot="title">小胖子</template>
      <vui-avatar src="images/avatar3.jpg" slot="left"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
    <vui-divider dotted />
    <vui-list-item>
      <template slot="title">小慧慧</template>
      <vui-avatar src="images/avatar4.jpg" slot="left"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
    <vui-divider dotted />
    <vui-list-item>
      <template slot="title">有图标</template>
      <vui-avatar src="images/avatar1.jpg" slot="rightAvatar"/>
      <vui-icon icon="menu" slot="left" color="pinkA200"/>
    </vui-list-item>
    <vui-divider dotted />
    <vui-list-item>
      <template slot="title">有文字</template>
      <vui-avatar src="images/uicon.jpg" slot="rightAvatar"/>
      <vui-avatar :theme="theme" :style="{'margin-left': '-8px'}" slot="left">A</vui-avatar>
    </vui-list-item>
    <vui-divider dotted />
  </vui-list>
</template>

<script>
export default {
  data () {
    return {
      theme: {
        'background': '#ef5350',
        'color': '#fff'
      }
    }
  },
  components: {
  }
}
</script>
