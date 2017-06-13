<template>
<div class="demo-chip-container">
  <vui-chip class="demo-chip">
    default chip
  </vui-chip>
  <vui-chip class="demo-chip"  @delete="handleClose" showDelete>
    delete chip
  </vui-chip>
  <vui-chip class="demo-chip">
    <vui-avatar src="/images/uicon.jpg"/> avatar chip
  </vui-chip>
  <vui-chip class="demo-chip" @delete="handleClose" showDelete>
    <vui-avatar src="/images/uicon.jpg"/> avatar delete chip
  </vui-chip>
  <vui-chip class="demo-chip" @delete="handleClose" showDelete>
    <vui-avatar icon="like-fill"/> icon avatar chip
  </vui-chip>

  <vui-chip class="demo-chip" backgroundColor="blue300" @delete="handleClose" showDelete>
    <vui-avatar color="blue300" backgroundColor="indigo900" :size="48">MB</vui-avatar> custom chip
  </vui-chip>
  <vui-toast v-model="toast" message="你点击的删除" />
</div>
</template>

<script>
export default {
  data () {
    return {
      toast: false
    }
  },
  methods: {
    handleClose () {
      this.toast = true
    }
  }
}
</script>

<style lang="css">
.demo-chip-container{
  display: flex;
  flex-wrap: wrap;
}
.demo-chip{
  margin: 4px;
}
</style>
