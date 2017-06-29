<template>
<div>
  <vui-range v-model="value1" class="demo-range" @change="change"/>
  <vui-range v-model="value2" class="demo-range" @change="change"/>
  <vui-range v-model="value3" class="demo-range" @change="change"/>
  <vui-popup toast :overlay="true" :open="show">
    {{msg}}
  </vui-popup>

</div>
</template>

<script>
export default {
  data () {
    return {
      value1: 0,
      value2: 50,
      value3: 100,
      show: false,
      msg: ''
    }
  },
  methods: {
    change (val) {
      setTimeout(() => {
        this.show = true
        this.msg = val
        setTimeout(() => {
          this.show = false
        }, 500)
      }, 100)
    }
  }
}
</script>

<style lang="css">
.demo-range {
  margin-bottom: 16px;
}
</style>
