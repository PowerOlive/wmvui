<template>
<div>
  <vui-button info @click="openBottomSheet" label="打开面板" />
  <vui-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
    <vui-list @itemClick="closeBottomSheet">
      <vui-sub-header>
        请选择一个
      </vui-sub-header>
      <vui-list-item title="李白 骚贱浪"/>
      <vui-list-item title="程咬金 打不死的小强"/>
      <vui-list-item title="孙悟空 猴三棍"/>
    </vui-list>
  </vui-bottom-sheet>
</div>
</template>

<script>
export default {
  data () {
    return {
      bottomSheet: false
    }
  },
  methods: {
    closeBottomSheet () {
      this.bottomSheet = false
    },
    openBottomSheet () {
      this.bottomSheet = true
    }
  }
}
</script>
