<template>
<div>
  <vui-flexbox>
    <vui-flexbox-item class="flex-demo">
      1
    </vui-flexbox-item>
    <vui-flexbox-item class="flex-demo">
      2
    </vui-flexbox-item>
    <vui-flexbox-item class="flex-demo">
      3
    </vui-flexbox-item>
  </vui-flexbox>
  <vui-flexbox class="mt8">
    <vui-flexbox-item class="flex-demo">
      4
    </vui-flexbox-item>
    <vui-flexbox-item class="flex-demo">
      5
    </vui-flexbox-item>
  </vui-flexbox>
  <vui-flexbox class="mt8">
    <vui-flexbox-item order="0" class="flex-demo">
      6
    </vui-flexbox-item>
    <vui-flexbox-item order="2" span="200" class="flex-demo">
      7
    </vui-flexbox-item>
    <vui-flexbox-item order="1" class="flex-demo">
      8
    </vui-flexbox-item>
  </vui-flexbox>
  <vui-flexbox class="mt8" orient="vertical">
    <vui-flexbox-item order="0" class="flex-demo">
      9
    </vui-flexbox-item>
    <vui-flexbox-item order="2" class="flex-demo">
      10
    </vui-flexbox-item>
  </vui-flexbox>
</div>
</template>

<style lang="css">
.mt8 {
  margin-top: 8px;
}
.flex-demo {
  height: 32px;
  background-color: #e0e0e0;
  text-align: center;
  line-height: 32px;
}
</style>
