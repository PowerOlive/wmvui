<template>
<div>
  <vui-button primary label="点这里" ref="button" @click="toggle"/>
  <h3 class="demo-popover-title">当前设置</h3>
  <pre>anchorOrigin: {{stringify(anchorOrigin)}}
targetOrigin: {{stringify(targetOrigin)}}</pre>
  <h3 class="demo-popover-title">Anchor Origin</h3>
  <div class="demo-anchor-origin">
    <div class="demo-origin-block">
      <span>vertical 垂直方向</span>
      <vui-radio class="demo-origin-raido" name="anchorVertical" v-model="anchorOrigin.vertical" nativeValue="top" label="Top"/>
      <vui-radio class="demo-origin-raido" name="anchorVertical" v-model="anchorOrigin.vertical" nativeValue="center" label="Center"/>
      <vui-radio class="demo-origin-raido" name="anchorVertical" v-model="anchorOrigin.vertical" nativeValue="bottom" label="Bottom"/>
    </div>
    <div class="demo-origin-block">
      <span>horizontal 水平方向</span>
      <vui-radio class="demo-origin-raido" name="anchorHorizontal" v-model="anchorOrigin.horizontal" nativeValue="left" label="Left"/>
      <vui-radio class="demo-origin-raido" name="anchorHorizontal" v-model="anchorOrigin.horizontal" nativeValue="middle" label="Middle"/>
      <vui-radio class="demo-origin-raido" name="anchorHorizontal" v-model="anchorOrigin.horizontal" nativeValue="right" label="Right"/>
    </div>
  </div>
  <h3 class="demo-popover-title">Target Origin</h3>
  <div class="demo-anchor-origin">
    <div class="demo-origin-block">
      <span>vertical 垂直方向</span>
      <vui-radio class="demo-origin-raido" name="targetVertical" v-model="targetOrigin.vertical" nativeValue="top" label="Top"/>
      <vui-radio class="demo-origin-raido" name="targetVertical" v-model="targetOrigin.vertical" nativeValue="center" label="Center"/>
      <vui-radio class="demo-origin-raido" name="targetVertical" v-model="targetOrigin.vertical" nativeValue="bottom" label="Bottom"/>
    </div>
    <div class="demo-origin-block">
      <span>horizontal 水平方向</span>
      <vui-radio class="demo-origin-raido" name="targetHorizontal" v-model="targetOrigin.horizontal" nativeValue="left" label="Left"/>
      <vui-radio class="demo-origin-raido" name="targetHorizontal" v-model="targetOrigin.horizontal" nativeValue="middle" label="Middle"/>
      <vui-radio class="demo-origin-raido" name="targetHorizontal" v-model="targetOrigin.horizontal" nativeValue="right" label="Right"/>
    </div>
  </div>
  <vui-popover :open="open" :autoPosition="false" :trigger="trigger" :anchorOrigin="anchorOrigin" :targetOrigin="targetOrigin" @close="handleClose">
    <vui-menu>
      <vui-menu-item title="Refresh" />
      <vui-menu-item title="Send feedback" />
      <vui-menu-item title="Settings" />
      <vui-menu-item title="Help" />
      <vui-menu-item title="Sign out" />
    </vui-menu>
  </vui-popover>
</div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      trigger: null,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      },
      targetOrigin: {
        vertical: 'top',
        horizontal: 'left'
      }
    }
  },
  mounted () {
    this.trigger = this.$refs.button.$el
  },
  methods: {
    toggle () {
      this.open = !this.open
    },
    handleClose () {
      this.open = false
    },
    stringify (obj) {
      return JSON.stringify(obj)
    }
  }
}
</script>

<style lang="css">
.demo-popover-title {
  margin-bottom: 0;
  font-weight: 500;
}

.demo-anchor-origin{
  display: flex;
}

.demo-origin-block{
  display: flex;
  flex-direction: column;
  margin-left: 12px;
}
.demo-origin-raido {
  margin-top: 12px;
}
</style>
