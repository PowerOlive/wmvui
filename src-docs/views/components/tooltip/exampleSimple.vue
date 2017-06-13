<template>
<div>
  <div class="demo-icon-tip" ref="demo" @mouseenter="handleHover" @mouseleave="handleHoverExit">
    <vui-icon icon="like-fill" :size="24"/>
    <vui-tooltip label="打印" :show="show" :trigger="trigger" :touch="touch" :verticalPosition="verticalPosition" :horizontalPosition="horizontalPosition"/>
  </div>
  <div class="demo-tip-setting">
    <p>
      垂直位置：
      <vui-radio name="verticalPosition" v-model="verticalPosition" label="top" nativeValue="top"/>
      <vui-radio name="verticalPosition" v-model="verticalPosition" label="bottom" nativeValue="bottom"/>
    </p>
    <p>
      水平位置：
      <vui-radio name="horizontalPosition" v-model="horizontalPosition" label="left" nativeValue="left"/>
      <vui-radio name="horizontalPosition" v-model="horizontalPosition" label="center" nativeValue="center"/>
      <vui-radio name="horizontalPosition" v-model="horizontalPosition" label="right" nativeValue="right"/>
    </p>
    <p>
      touch: <vui-switch v-model="touch"/>
    </p>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      touch: false,
      trigger: null,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    }
  },
  mounted () {
    this.trigger = this.$refs.demo
  },
  methods: {
    handleHover () {
      this.show = true
    },
    handleHoverExit () {
      this.show = false
    }
  }
}
</script>

<style lang="css">
.demo-icon-tip{
  display: inline-block;
  cursor: default;
  position: relative;
}

.demo-tip-setting p{
  display: flex;
  align-items: center;
}

.demo-tip-setting .vui-radio {
  margin-left: 32px;
}
.demo-tip-setting .vui-radio:first-child{
  margin-left: 0;
}
.demo-tip-setting .vui-switch {
  margin-left: 8px;
}
</style>
