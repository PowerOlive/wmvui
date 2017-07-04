<template>
  <vui-list>
    <vui-sub-header color="blue">文字列表</vui-sub-header>
    <vui-divider />
    <vui-list-item>
      <template slot="describe">
        <p style="color:#333">看电影啊我们去看电影</p>
      </template>
      <span slot="right">2017-06-22</span>
    </vui-list-item>
    <vui-divider dotted />
    <vui-list-item>
      <template slot="describe">
        <p style="color:#333">看电影啊我们去看电影，最近有部烂片上映，又有吐槽的了</p>
      </template>
      <span slot="right" class="ml10">2017-06-22</span>
    </vui-list-item>
    <vui-divider dotted />
    <vui-list-item>
      <template slot="title">列表</template>
      <template slot="describe">
        <p style="color:#999">看电影啊我们去看电影，最近有部烂片上映，又有吐槽的了</p>
      </template>
      <vui-icon slot="right" icon="right" />
    </vui-list-item>
    <vui-divider dotted />
    <vui-sub-header color="red" top="20px">头像图标</vui-sub-header>
    <vui-divider dotted />
    <vui-list-item>
      <template slot="title">小胖子</template>
      <vui-avatar src="images/avatar3.jpg" slot="left"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
    <vui-divider dotted />
    <vui-list-item>
      <template slot="title">有图标</template>
      <vui-avatar src="images/avatar1.jpg" slot="right"/>
      <vui-icon icon="menu" slot="left" color="pinkA200"/>
    </vui-list-item>
    <vui-divider dotted />
    <vui-list-item>
      <template slot="title">有文字</template>
      <vui-avatar src="images/uicon.jpg" slot="right"/>
      <vui-avatar color="pinkA200" :style="{'margin-left': '-8px'}" backgroundColor="transparent" slot="left">A</vui-avatar>
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
