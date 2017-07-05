<template>
  <div>
    <vui-flex wrap>
    <vui-flex-item :auto="false" v-for="item in imglist" class="demo-lazyloadimg">
      <vui-lazyload init="images/loading.gif" :src="item.dataSrc" />
    </vui-flex-item>
  </vui-flex>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imglist: [
        {dataSrc: 'images/avatar1.jpg'},
        {dataSrc: 'images/avatar2.jpg'},
        {dataSrc: 'images/avatar3.jpg'},
        {dataSrc: 'images/avatar4.jpg'},
        {dataSrc: 'images/avatar5.jpg'},
        {dataSrc: 'images/water-plant.jpg'},
        {dataSrc: 'images/avatar7.jpg'}
      ]
    }
  }
}
</script>
<style>
  .demo-lazyloadimg{
    /*width:25%;*/
  }
</style>
