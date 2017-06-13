<template>
<div>
  <vui-raised-button @click="openBottomSheet" label="Open Bottom Sheet" />
  <vui-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
    <vui-list @itemClick="closeBottomSheet">
      <vui-sub-header>
        请选择一个
      </vui-sub-header>
      <vui-list-item title="阴阳师"/>
      <vui-list-item title="贪吃蛇大作战"/>
      <vui-list-item title="一划到底"/>
      <vui-list-item title="全民斗地主"/>
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
