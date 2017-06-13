<template>
<div>
  <mu-raised-button 
  class="demo-mu-raised-button" 
  label="文本提示" 
  @click="openToast('center',false,'','操作失败','text')" />

  <mu-raised-button 
  class="demo-mu-raised-button" 
  label="操作失败" 
  @click="openToast('center',false,'round-close-fill','操作失败~','error')" />

  <mu-raised-button 
  class="demo-mu-raised-button" 
  label="操作成功" 
  @click="openToast('center',false,'like-fill','操作成功~','success')" />

  <mu-raised-button 
  class="demo-mu-raised-button" 
  label="操作提示" 
  @click="openToast('center',false,'like','操作提示~','info')" />

  <mu-raised-button 
  class="demo-mu-raised-button" 
  label="操作警告" 
  @click="openToast('center',false,'round-close','操作警告~','warn')" />

  <mu-raised-button 
  class="demo-mu-raised-button" 
  label="上面弹出" 
  @click="openToast('top','happy','' ,'操作成功~','')" />

  <mu-raised-button 
  class="demo-mu-raised-button" 
  label="下面弹出" 
  @click="openToast('bottom','crying','','操作失败~','')" />

  <mu-raised-button 
  class="demo-mu-raised-button" 
  label="左边弹出" 
  @click="openToast('left','goofy','','位置可配置~~','')" />

  <mu-raised-button 
  class="demo-mu-raised-button" 
  label="右边弹出" 
  @click="openToast('right','rich','','位置可配置~','')" />

  <mu-raised-button 
  class="demo-mu-raised-button" 
  label="加载层" 
  @click="openLoading" />

  <mu-popup :position="popup.position" :toast="toast" :overlayOpacity="0" :svgIcon="popup.svgicon" :icon="popup.icon" :overlay="true" :open="popup.show">
  {{popup.msg}}
  </mu-popup>
  <mu-popup position="center" :overlay="true" :overlayOpacity="0.2" :loading="loading" :open="loading.show">
  </mu-popup>
</div>
</template>

<script>
export default {
  data () {
    return {
      popup: {
        show: false,
        position: 'center',
        msg: '居中显示'
      },
      toast: {
        type: 'error'
      },
      loading: {
        show: false,
        size: 50,
        color: 'red'
      }
    }
  },
  methods: {
    openToast (position, svgicon, icon, msg, type) {
      this.popup = Object.assign(this.popup, {
        show: true,
        position: position,
        icon: icon,
        svgicon: svgicon,
        msg: msg
      })
      this.toast = Object.assign(this.toast, {
        type: type
      })
      setTimeout(() => {
        this.popup.show = false
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
