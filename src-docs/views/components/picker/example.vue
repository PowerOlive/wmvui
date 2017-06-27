<template>
<div class="demo-picker-container">
  <vui-text-field hintText="双向绑定" v-model="year" disabled />
  <vui-picker :data="data1" v-model="value1" @on-change="change" />
  <br><br>
  <br><br>

  <vui-text-field hintText="选择地址" v-model="address" @focus="handleFocus('address')" />
  <vui-popup 
    position="bottom" 
    :data="data2" 
    v-model="value2" 
    :columns="3"
    :open="showaddress" 
    fill 
    @close="close('more')"
    @cancel="close('more')"
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

</div>
</template>

<script>
import chinaAddress from 'china-area-data/vux/china_address_v3.json'
let years = []
for (var i = 2000; i <= 2030; i++) {
  years.push({
    name: i + '年',
    value: i + ''
  })
}
let month = []
for (var m = 1; m <= 12; m++) {
  month.push({
    name: m + '月',
    value: m
  })
}
let day = []
for (var d = 1; d <= 31; d++) {
  day.push({
    name: d + '日',
    value: d
  })
}
export default {
  data () {
    return {
      year: '',
      data1: [years, month, day],
      value1: [],
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
      value3: []
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
    },
    change (name, val) {
      this.year = val[0] + '年' + val[1] + '月' + val[2] + '日'
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
