<template>
<div>
  <mu-raised-button label="默认" @click="showToast('middle','happy','默认中间显示')"/>
  <mu-raised-button label="顶部" @click="showToast('top', 'sad','我在上面')"/>
  <mu-raised-button label="底部" @click="showToast('bottom','crying','我在下面')"/>

  <mu-toast 
    v-model="toast.show" 
    :svgIcon="toast.svgicon"
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
    showToast (val, svgIcon, msg) {
      this.toast.show = false
      this.toast = Object.assign(this.toast, {
        show: true,
        position: val,
        svgicon: svgIcon,
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
