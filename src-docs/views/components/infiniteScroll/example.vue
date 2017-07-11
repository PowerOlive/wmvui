<template>
<div class="demo-infinite-container">
  <vui-list>
    <template v-for="item in list">
      <vui-list-item>
        <template slot="title">{{item}}</template>
      </vui-list-item>
      <vui-divider/>
    </template>
  </vui-list>
  <vui-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  <vui-divider v-show="show" title="老娘也是有底线的~" style="height:20px" top="20px" bottom="20px" />
</div>
</template>

<script>
export default {
  data () {
    const list = []
    for (let i = 0; i < 10; i++) {
      list.push('item' + (i + 1))
    }
    return {
      list,
      num: 10,
      loading: false,
      scroller: null,
      show: false
    }
  },
  mounted () {
    this.scroller = this.$el
  },
  methods: {
    loadMore () {
      this.loading = true
      setTimeout(() => {
        for (let i = this.num; i < this.num + 10; i++) {
          this.list.push('item' + (i + 1))
        }
        this.num += 10
        this.loading = false
        this.scroller = null
        this.show = true
      }, 2000)
    }
  }
}
</script>

<style lang="css">
.demo-infinite-container{
  height: 300px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid #d9d9d9;
}
</style>
