<template>
<div class="demo-picker-container">
  <vui-text-field hintText="双向绑定" v-model="year" disabled />
  <vui-picker :data="data1" v-model="value1" @change="change" />
  <br><br>
  <br><br>

</div>
</template>

<script>
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
      value1: []
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
    }
  }
}
</script>
