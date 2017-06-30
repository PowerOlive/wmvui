<template>
<div class="gridlist-demo-container">
  <vui-grid-list class="gridlist-demo">
    <vui-sub-header>图片展示</vui-sub-header>
    <vui-grid-tile v-for="tile, index in list" :key="index">
      <img :src="tile.image"/>
      <span slot="title">{{tile.title}}</span>
      <span slot="subTitle">by <b>{{tile.author}}</b></span>
      <vui-button icon="star_border" slot="action"/>
    </vui-grid-tile>
  </vui-grid-list>
</div>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        image: 'images/breakfast.jpg',
        title: 'Breakfast',
        author: 'Myron'
      }, {
        image: 'images/burger.jpg',
        title: 'Burger',
        author: 'Linyu'
      }, {
        image: 'images/camera.jpg',
        title: 'Camera',
        author: 'ruolin'
      }, {
        image: 'images/hats.jpg',
        title: 'Hats',
        author: 'kakali'
      }, {
        image: 'images/honey.jpg',
        title: 'Honey',
        author: 'yuyang'
      }, {
        image: 'images/morning.jpg',
        title: 'Morning',
        author: 'mokayi'
      }, {
        image: 'images/vegetables.jpg',
        title: 'Vegetables',
        author: 'NUyyyyyyy'
      }, {
        image: 'images/water-plant.jpg',
        title: 'water',
        author: 'TDDyyyyyyy'
      }]
    }
  }
}
</script>

<style>
.gridlist-demo-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.gridlist-demo{
  width: 500px;
  height: 450px;
  overflow-y: auto;
}
</style>
