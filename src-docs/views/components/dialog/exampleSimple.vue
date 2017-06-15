<template>
<div>
  <vui-button label="对话框" info @click="open"/>
  <vui-dialog :open="dialog" title="Dialog" @close="close">
    这是一个简单的弹出框
    <vui-button slot="actions" @click="close" text primary label="取消"/>
    <vui-button slot="actions" text primary @click="close" label="确定"/>
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
