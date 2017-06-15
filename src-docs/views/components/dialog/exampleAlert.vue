<template>
<div>
  <vui-button label="Alert Dialog" @click="open"/>
  <vui-dialog :open="dialog" title="Alert Dialog">
    只有点击确定按钮才可以关闭对话框
    <vui-button label="确定" slot="actions" primary @click="close"/>
  </vui-dialog>
</div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    }
  }
}
</script>

<style lang="css">
</style>
