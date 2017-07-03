<template>
<vui-card>
  <vui-content-block :padding="['15px']">
    <vui-card-header title="李白" subTitle="骚贱浪">
      <vui-avatar src="images/uicon.jpg" slot="avatar"/>
    </vui-card-header>
  </vui-content-block>
  <vui-card-media title="稳住" subTitle="不浪，我们能赢">
    <img src="images/sun.jpg" />
  </vui-card-media>
  <vui-content-block :padding="['15px']">
    <vui-card-title title="放我出去" subTitle="我要喝药"/>
  </vui-content-block>
  <vui-card-text>
    <vui-content-block :padding="['0' ,'15px']">刚开始用vue或者react，很多时候我们都会把ES6这个大兄弟加入我们的技术栈中。但是ES6那么多那么多特性，我们需要全部都掌握吗？秉着二八原则，掌握好常用的，有用的这个可以让我们快速起飞。
    </vui-content-block>
  </vui-card-text>
  <vui-card-actions>
    <vui-content-block :padding="['15px']">
      <vui-button primary label="投降"/>
      <vui-button danger label="再坚持一下"/>
    </vui-content-block>
  </vui-card-actions>
</vui-card>
</template>
