<template>
<div>
  <vui-button 
  primary
  class="demo-vui-raised-button" 
  label="文本提示" 
  @click="openToast('center',false,'','只显示文字~~')" />

  <vui-button 
  danger
  class="demo-vui-raised-button" 
  label="图标演示" 
  @click="openToast('center',false,'error-fill','操作失败~')" />

  <vui-button 
  success
  class="demo-vui-raised-button" 
  label="SVG图标演示" 
  @click="openToast('top','crying','' ,'操作失败~')" />

  <vui-button 
  primary
  class="demo-vui-raised-button" 
  label="加载层" 
  @click="openLoading" />

  <vui-popup :position="popup.position" :toast="toast" :svgIcon="popup.svgicon" :icon="popup.icon" :overlay="true" :open="popup.show">
  {{popup.msg}}
  </vui-popup>
  <vui-popup position="center" :overlay="true" :overlayOpacity="0.2" :loading="true" :open="loading">
    <vui-loading type="line" color="#ef5350" />
  </vui-popup>
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
        color: '#ef5350'
      },
      loading: false
    }
  },
  methods: {
    openToast (position, svgicon, icon, msg) {
      this.popup = Object.assign(this.popup, {
        show: true,
        position: position,
        icon: icon,
        svgicon: svgicon,
        msg: msg
      })
      setTimeout(() => {
        this.popup.show = false
      }, 500)
    },
    openLoading () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  }
}
</script>
