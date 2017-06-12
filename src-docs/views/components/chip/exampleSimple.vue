<template>
<div class="demo-chip-container">
  <mu-chip class="demo-chip">
    default chip
  </mu-chip>
  <mu-chip class="demo-chip"  @delete="handleClose" showDelete>
    delete chip
  </mu-chip>
  <mu-chip class="demo-chip">
    <mu-avatar src="/images/uicon.jpg"/> avatar chip
  </mu-chip>
  <mu-chip class="demo-chip" @delete="handleClose" showDelete>
    <mu-avatar src="/images/uicon.jpg"/> avatar delete chip
  </mu-chip>
  <mu-chip class="demo-chip" @delete="handleClose" showDelete>
    <mu-avatar icon="like-fill"/> icon avatar chip
  </mu-chip>

  <mu-chip class="demo-chip" backgroundColor="blue300" @delete="handleClose" showDelete>
    <mu-avatar color="blue300" backgroundColor="indigo900" :size="48">MB</mu-avatar> custom chip
  </mu-chip>
  <mu-toast v-model="toast" message="你点击的删除" />
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
