<template>
<mobile-tear-sheet>
  <vui-list>
    <vui-sub-header>今天</vui-sub-header>
    <vui-list-item title="这个周末一起吃饭么?">
      <vui-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
      </span>
      <vui-icon-menu slot="right" icon="more" tooltip="操作">
        <vui-menu-item title="回复" />
        <vui-menu-item title="标记" />
        <vui-menu-item title="删除" />
      </vui-icon-menu>
    </vui-list-item>
    <vui-divider style="margin:10px 0"/>
    <vui-list-item title="Alex Qin">
      <vui-avatar src="/images/avatar2.jpg" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">看电影啊</span> <br/>
        我们去看电影，最近有部烂片上映，又有吐槽的了
      </span>
      <vui-icon-menu slot="right" icon="more" tooltip="操作">
        <vui-menu-item title="回复" />
        <vui-menu-item title="标记" />
        <vui-menu-item title="删除" />
      </vui-icon-menu>
    </vui-list-item>
    <vui-divider style="margin:10px 0"/>
    <vui-list-item title="LOL">
      <vui-avatar src="/images/avatar3.jpg" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">去打游戏啊</span><br/>
        周末一起 LOL
      </span>
      <vui-icon-menu slot="right" icon="more" tooltip="操作">
        <vui-menu-item title="回复" />
        <vui-menu-item title="标记" />
        <vui-menu-item title="删除" />
      </vui-icon-menu>
    </vui-list-item>
    <vui-divider style="margin:10px 0"/>
    <vui-list-item title="Myron Liu">
      <vui-avatar src="/images/uicon.jpg" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">哇去</span><br/> 实在编不下去，这就是个demo
      </span>
      <vui-icon-menu slot="right" icon="more" tooltip="操作">
        <vui-menu-item title="回复" />
        <vui-menu-item title="标记" />
        <vui-menu-item title="删除" />
      </vui-icon-menu>
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
