<template>
<vui-list>
  <vui-list-item disabled>
    <vui-avatar slot="left" src="images/uicon.jpg"/>
    <template slot="title">图片</template>
  </vui-list-item>
  <vui-list-item disabled>
    <vui-avatar  slot="left" src="images/uicon.jpg" :size="30"/>
    <template slot="title">图片,自定义大小</template>
  </vui-list-item>
  <vui-list-item disabled>
    <vui-avatar slot="left" icon="menu"/>
    <template slot="title">图标</template>
  </vui-list-item>
  <vui-list-item disabled>
    <vui-avatar slot="left" icon="menu" color="orange200" backgroundColor="pink400" :size="30" :iconSize="16"/>
    <template slot="title">图标, 自定义大小、颜色</template>
  </vui-list-item>
  <vui-list-item disabled>
    <vui-avatar slot="left" color="deepOrange300" backgroundColor="purple500">MB</vui-avatar>
    <template slot="title">文字</template>
  </vui-list-item>
</vui-list>
</template>
