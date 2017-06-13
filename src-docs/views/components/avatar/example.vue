<template>
<vui-list>
  <vui-list-item title="图片" disabled>
    <vui-avatar slot="left" src="/images/uicon.jpg"/>
  </vui-list-item>
  <vui-list-item title="图片,自定义大小" disabled>
    <vui-avatar  slot="left" src="/images/uicon.jpg" :size="30"/>
  </vui-list-item>
  <vui-list-item title="图标" disabled>
    <vui-avatar slot="left" icon="menu"/>
  </vui-list-item>
  <vui-list-item title="图标, 自定义大小、颜色" disabled>
    <vui-avatar slot="left" icon="menu" color="orange200" backgroundColor="pink400" :size="30" :iconSize="16"/>
  </vui-list-item>
  <vui-list-item title="文字" disabled>
    <vui-avatar slot="left" color="deepOrange300" backgroundColor="purple500">MB</vui-avatar>
  </vui-list-item>
</vui-list>
</template>
