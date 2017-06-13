<template>
<div>
  <vui-paper style="display: inline-block;margin-right: 16px;">
    <vui-menu>
      <vui-menu-item title="menu 1">
        <vui-badge content="12" slot="after"/>
      </vui-menu-item>
      <vui-menu-item title="menu 2">
        <vui-badge content="old" primary slot="after"/>
      </vui-menu-item>
      <vui-menu-item title="menu 3">
        <vui-badge content="news" secondary slot="after"/>
      </vui-menu-item>
    </vui-menu>
  </vui-paper>
  <vui-paper style="display: inline-block; width: 256px;">
    <vui-list>
      <vui-list-item title="List Item 1">
        <vui-badge content="12" slot="right"/>
      </vui-list-item>
      <vui-list-item title="List Item 2">
        <vui-badge content="old" primary slot="right"/>
      </vui-list-item>
      <vui-list-item title="List Item 3">
        <vui-badge content="news" secondary slot="right"/>
      </vui-list-item>
    </vui-list>
  </vui-paper>
</div>
</template>
