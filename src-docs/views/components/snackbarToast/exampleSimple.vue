<template>
<div>
  <mu-raised-button label="默认" @click="showToast('middle','默认中间显示')"/>
  <mu-raised-button label="顶部" @click="showToast('top','我在上面')"/>
  <mu-raised-button label="底部" @click="showToast('bottom','我在下面')"/>

  <mu-toast 
    v-model="toast.show" 
    :position="toast.position" 
    :time="toast.time"
    :icon="toast.type"
    :message="toast.message" />
</div>
</template>

<script>
export default {
  data () {
    return {
      toast: {
        show: false,
        time: 1000,
        icon: 'warn'
      }
    }
  },
  methods: {
    showToast (val, msg) {
      this.toast.show = false
      this.toast = Object.assign(this.toast, {
        show: true,
        position: val,
        message: msg
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
