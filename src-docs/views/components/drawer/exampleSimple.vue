<template>
<div>
    <vui-button primary label="左边打开不能自动关闭" @click="toggle()"/>
    <vui-button primary label="显示遮罩可自动关闭" @click="toggle(true)"/>
    <vui-drawer :open="open" :docked="docked" @close="toggle()">
      <vui-list @itemClick="docked ? '' : toggle()">
        <vui-list-item>
          <template slot="title">菜单1</template>
        </vui-list-item>
        <vui-list-item>
          <template slot="title">菜单2</template>
        </vui-list-item>
        <vui-list-item v-if="docked" @click.native="open = false">
          <template slot="title">关闭</template>
        </vui-list-item>
      </vui-list>
    </vui-drawer>
</div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      docked: true
    }
  },
  methods: {
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    }
  }
}
</script>
