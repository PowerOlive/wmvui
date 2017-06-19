<template>
<vui-linear-progress mode="determinate" :value="value"/>
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
      this.value += 10
      if (this.value > 100) {
        this.value = 100
        clearInterval(this.timer)
      }
    }, 1000)
  },
  beforeDestroy () {
    // clearInterval(this.timer)
  }
}
</script>
