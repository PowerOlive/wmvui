<template>
  <div>
    <vui-magic-sum :startNum="1" :endNum="1388" :size="60" />
    <br>
    <vui-magic-sum :endNum="88.88" :time="3" :decimals="2" danger />
    <br>
    <vui-magic-sum :endNum="1024" :time="4" :start="doStart" success />
    <br>
    <vui-button label="开始" @click.native="doStart=true" primary />
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      doStart: false
    }
  },
  methods: {
  }
}
</script>
