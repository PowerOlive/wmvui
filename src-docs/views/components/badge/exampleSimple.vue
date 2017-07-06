<template>
<div>
  <vui-paper style="display: inline-block;margin-right: 16px;">
    <vui-menu>
      <vui-menu-item title="李白">
        <vui-badge text="骚贱浪" slot="after"/>
      </vui-menu-item>
      <vui-menu-item title="张飞">
        <vui-badge round :theme="success" text="肉得一逼" slot="after"/>
      </vui-menu-item>
      <vui-menu-item title="韩信">
        <vui-badge :theme="info" text="韩跳跳" slot="after"/>
      </vui-menu-item>
      <vui-menu-item title="孙悟空">
        <vui-badge :theme="warn" text="猴三棍" slot="after"/>
      </vui-menu-item>
      <vui-menu-item title="扁鹊">
        <vui-badge circle :theme="danger" :size="18" text="1" slot="after"/>
      </vui-menu-item>
      <vui-menu-item title="王召珺">
        <vui-badge text="大波C" :theme="danger" slot="after"/>
      </vui-menu-item>
    </vui-menu>
  </vui-paper>
</div>
</template>
<script>
export default {
  data () {
    return {
      success: {
        background: '#4caf50',
        color: '#fff'
      },
      info: {
        background: '#29b6f6',
        color: '#fff'
      },
      warn: {
        background: '#ffa726',
        color: '#fff'
      },
      danger: {
        background: '#ef5350',
        color: '#fff'
      }
    }
  }
}
</script>
