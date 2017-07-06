<template>
<div>
  <vui-paper style="display: inline-block;margin-right: 16px;">
    <vui-menu>
      <vui-menu-item title="李白">
        <vui-badge text="骚贱浪" slot="after"/>
      </vui-menu-item>
      <vui-menu-item title="张飞">
        <vui-badge primary round text="肉得一逼" primary slot="after"/>
      </vui-menu-item>
      <vui-menu-item title="韩信">
        <vui-badge success text="韩跳跳" primary slot="after"/>
      </vui-menu-item>
      <vui-menu-item title="孙悟空">
        <vui-badge info text="猴三棍" primary slot="after"/>
      </vui-menu-item>
      <vui-menu-item title="扁鹊">
        <vui-badge warn circle :size="18" text="1" slot="after"/>
      </vui-menu-item>
      <vui-menu-item title="王召珺">
        <vui-badge danger text="大波C" slot="after"/>
      </vui-menu-item>
    </vui-menu>
  </vui-paper>
</div>
</template>
