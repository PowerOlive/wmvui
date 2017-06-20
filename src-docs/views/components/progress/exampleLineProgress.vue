<template>
<div>
  <vui-progress type="line" mode="determinate" :value="40" />
  <br>
  <vui-progress type="line" mode="determinate" :value="70" success />
  <br>
  <vui-progress type="line" mode="determinate" :value="90" info />
  <br>
  <vui-progress type="line" mode="determinate" :value="70" warn />
  <br>
  <vui-progress type="line" mode="determinate" :value="40" danger />
  <br>
  <vui-progress type="line" mode="determinate" showValue :size="14" :value="value"  />
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
    }, 500)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>
