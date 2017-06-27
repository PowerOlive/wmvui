<template>
<div class="demo-picker-container">
  <vui-text-field hintText="选择地址" v-model="address" @focus="handleFocus('address')" />
  <vui-popup 
    position="bottom" 
    :data="data2" 
    v-model="value2" 
    :open="showaddress"
    address 
    fill 
    @close="close('address')"
    @cancel="close('address')"
    @ok="addressFn"
    >
  </vui-popup>
  <br><br>
  
  <vui-text-field hintText="多列选择" v-model="more" @focus="handleFocus('more')" />
  <vui-popup 
    position="bottom" 
    :data="data3" 
    v-model="value3" 
    :open="showmore" 
    fill 
    @close="close('more')"
    @cancel="close('more')"
    @ok="moreFn"
    >
  </vui-popup>
  <vui-popup toast :open="popup">关闭成功</vui-popup>
</div>
</template>

<script>
import chinaAddress from 'china-area-data/vux/china_address_v3.json'
export default {
  data () {
    return {
      data2: chinaAddress,
      showaddress: false,
      showmore: false,
      value2: [],
      address: '',
      more: '',
      data3: [
        ['列1', '列11'],
        ['列2', '列22'],
        ['列3', '列33'],
        ['列4', '列44']
      ],
      value3: [],
      popup: false
    }
  },
  created () {
  },
  methods: {
    handleFocus (attr) {
      this['show' + attr] = true
    },
    close (attr) {
      this['show' + attr] = false
      this.popup = true
      setTimeout(() => {
        this.popup = false
      }, 500)
    },
    addressFn (name, val) {
      this.address = name + '   编码：' + val.join(' ')
      this.close('address')
    },
    moreFn (name, val) {
      this.more = val.join('-')
      this.close('more')
    }
  }
}
</script>
