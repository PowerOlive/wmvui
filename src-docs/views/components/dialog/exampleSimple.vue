<template>
<div>
  <vui-raised-button label="dialog" @click="open"/>
  <vui-dialog :open="dialog" title="Dialog" @close="close">
    这是一个简单的弹出框
    <vui-flat-button slot="actions" @click="close" primary label="取消"/>
    <vui-flat-button slot="actions" primary @click="close" label="确定"/>
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
