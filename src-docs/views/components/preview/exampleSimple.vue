<template>
  <div>
  <vui-flex>
    <vui-flex-item :key="index" v-for="(item, index) in list">
      <img class="preview-img" :src="item.src" width="100%" height="100%" @click="show(index)">
    </vui-flex-item>
  </vui-flex>
    <vui-preview :list="list" ref="preview" :options="options" />
  </div>
</template>
<script>
export default {
  components: {
  },
  methods: {
    show (index) {
      this.$refs.preview.open(index, '.preview-img')
    }
  },
  data () {
    return {
      list: [{
        src: 'images/breakfast.jpg',
        title: '标题',
        w: 640,
        h: 425
      },
      {
        src: 'images/water-plant.jpg',
        w: 640,
        h: 400
      }, {
        src: 'images/vegetables.jpg',
        w: 640,
        h: 425
      }],
      options: {
        //  动画显示
        showHideOpacity: true,
        // 背景透明
        bgOpacity: 0.8
        // 显示第几张
        // index: 2
      }
    }
  }
}
</script>
