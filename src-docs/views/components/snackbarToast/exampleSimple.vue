<template>
<div>
  <mu-raised-button label="默认" @click="showToast()"/>
  <mu-raised-button label="顶部" @click="showToast('top')"/>
  <mu-raised-button label="底部" @click="showToast('bottom')"/>



  <mu-toast v-model="toast.show" :position="toast.position" :time="toast.time" :message="toast.message" />
</div>
</template>

<script>
export default {
  data () {
    return {
      toast: {
        show: false,
        time: 2000,
        message: '默认中间显示'
      }
    }
  },
  methods: {
    showToast (val) {
      this.toast.show = false
      this.toast = Object.assign(this.toast, {
        show: true,
        position: val,
        message: '11111'
      })
    }
  }
}
</script>

<style lang="css">
.demo-snackbar-button{
  margin: 12px;
}
</style>
