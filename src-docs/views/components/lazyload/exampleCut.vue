<template>
  <vui-flex wrap>
    <vui-flex-item v-for="item in imglist">
      <vui-lazyload init="images/loading.gif" :src="item.dataSrc" cut mode="diy"/>
    </vui-flex-item>
  </vui-flex>
</template>
<script>
export default {
  data () {
    return {
      imglist: [
        {dataSrc: 'images/avatar1.jpg'},
        {dataSrc: 'images/camera.jpg'},
        {dataSrc: 'images/hats.jpg'},
        {dataSrc: 'images/honey.jpg'},
        {dataSrc: 'images/morning.jpg'},
        {dataSrc: 'images/water-plant.jpg'}
      ]
    }
  }
}
</script>
