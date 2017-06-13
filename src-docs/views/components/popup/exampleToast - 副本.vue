<template>
<div>
  <mu-raised-button label="操作提示" @click="openToast('center',false,'round-close-fill','操作失败')"/>
  <mu-raised-button label="上面弹出" @click="openToast('top','happy','' ,'哈哈~我在上面')"/>
  <mu-raised-button label="下面弹出" @click="openToast('bottom','crying','','下面来抓我呀~')"/>
  <mu-raised-button label="左边弹出" @click="openToast('left','goofy','','左边左边~~')"/>
  <mu-raised-button label="右边弹出" @click="openToast('right','rich','','右边辣智障~')"/>
  <mu-raised-button label="加载层" @click="openLoading"/>
  <mu-popup :position="toast.position" toast :svgIcon="toast.svgicon" :icon="toast.icon" :overlay="true" :open="toast.show">
  <p>{{toast.msg}}</p>
  </mu-popup>
  <mu-popup position="center" :overlay="true" :overlayOpacity="0.2" :loading="loading" :open="loading.show">
  </mu-popup>
</div>
</template>

<script>
export default {
  data () {
    return {
      toast: {
        show: false,
        position: 'center',
        msg: '居中显示'
      },
      loading: {
        show: false,
        size: 50,
        color: 'red'
      }
    }
  },
  methods: {
    openToast (position, svgicon, icon, msg) {
      this.toast = Object.assign(this.toast, {
        show: true,
        position: position,
        icon: icon,
        svgicon: svgicon,
        msg: msg
      })
      setTimeout(() => {
        this.toast.show = false
      }, 1000)
    },
    openLoading () {
      this.loading.show = true
      setTimeout(() => {
        this.loading.show = false
      }, 1000)
    }
  }
}
</script>
