<template>
  <div>
    <template v-for="item in imglist">
      <vui-lazyload init="images/loading.gif" :src="item.dataSrc" error="images/error.png" />
    </template>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imglist: [
        {dataSrc: 'images/avatar1.jpg'},
        {dataSrc: 'images/camera.jpg'},
        {dataSrc: 'images/avatar7.jpg'}
      ]
    }
  }
}
</script>

