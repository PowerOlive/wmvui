<template>
<div>
  <vui-button info @click="openBottomSheet" label="打开面板" />
  <!-- <vui-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
    <vui-list @itemClick="closeBottomSheet">
      <vui-sub-header>
        请选择一个
      </vui-sub-header>
      <vui-list-item title="李白 骚贱浪"/>
      <vui-list-item title="程咬金 打不死的小强"/>
      <vui-list-item title="孙悟空 猴三棍"/>
    </vui-list>
  </vui-bottom-sheet> -->
  <vui-popup position="bottom" fill :open="bottomSheet" @close="closeBottomSheet">
    <!-- <vui-appbar title="弹出">
      <vui-button slot="right" label="关闭" color="white" @click="closeBottomSheet"/>
    </vui-appbar> -->
    <vui-content-block>
      <vui-list @itemClick="closeBottomSheet">
        <vui-sub-header>
          请选择一个
        </vui-sub-header>
        <vui-list-item title="李白 骚贱浪"/>
        <vui-list-item title="程咬金 打不死的小强"/>
        <vui-list-item title="孙悟空 猴三棍"/>
      </vui-list>
    </vui-content-block>
  </vui-popup>
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
