<template>
<div>
  <vui-list class="demo-vui-list">
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
    <vui-divider :padding="['10px','0']"/>
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
    <vui-divider :padding="['10px','0']"/>

    <vui-list-item title="LOL">
      <img src="/images/avatar3.jpg" width="50%" slot="leftAvatar"/>
      <span slot="describe">
        <span>去打游戏啊</span><br/>
        周末一起 LOL
      </span>
    </vui-list-item>
    <vui-divider :padding="['10px','0']"/>

    <vui-list-item title="这个周末一起吃饭么?">
      <vui-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
      </span>
      <vui-icon slot="right" icon="right" />
    </vui-list-item>
  </vui-list>
</div>
</template>

<style>
  .demo-vui-list{
    display: inline-block;
    margin-right: 20px;
  }
</style>
