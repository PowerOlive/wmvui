<template>
<div>
  <vui-progress mode="determinate" :size="50" :width="2" :value="20" />
  <vui-progress mode="determinate" showValue :size="70" :width="5" :value="20"  success/>
  <vui-progress mode="determinate" showValue :size="90" :width="7" :value="30"  info/>
  <vui-progress mode="determinate" showValue :size="70" :width="5" :value="40"  warn/>
  <vui-progress mode="determinate" showValue :size="60" :width="2" :value="value" danger/>
</div>
</template>

<script>
export default {
  data () {
    return {
      value: 0
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.value += 5
      if (this.value > 100) this.value = 0
      // if (this.value > 100) {
      //   this.value = 100
      //   clearInterval(this.timer)
      // }
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>
