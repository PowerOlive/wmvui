<template>
  <vui-list>
    <vui-sub-header>文件夹</vui-sub-header>
    <vui-list-item>
      <template slot="title">文件夹</template>
      <template slot="describe">2017-06-12</template>
      <vui-avatar icon="like-fill" slot="left"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
    <vui-divider dotted />
    <vui-list-item>
      <template slot="title">文件夹</template>
      <template slot="describe">2017-06-12</template>
      <vui-avatar icon="like-fill" backgroundColor="blue" slot="left" />
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
    <vui-divider dotted />
    <vui-list-item>
      <template slot="title">文件夹</template>
      <template slot="describe">2017-06-12</template>
      <vui-avatar icon="like-fill" backgroundColor="yellow600" slot="left" />
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
    <vui-divider dotted />
  </vui-list>
</template>

<script>
export default {
  components: {
  }
}
</script>
