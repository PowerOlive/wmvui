<template>
  <div class="demo-refresh-container">
    <vui-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
    <vui-list>
      <template v-for="item in list">
        <vui-list-item disableRipple>
          <template slot="title">{{item}}</template>
        </vui-list-item>
        <vui-divider/>
      </template>
    </vui-list>
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
      refreshing: false,
      trigger: null
    }
  },
  mounted () {
    this.trigger = this.$el
  },
  methods: {
    refresh () {
      this.refreshing = true
      setTimeout(() => {
        const list = []
        for (let i = this.num; i < this.num + 10; i++) {
          list.push('item' + (i + 1))
        }
        this.list = list
        this.num += 10
        this.refreshing = false
      }, 2000)
    }
  }
}
</script>

<style>
.demo-refresh-container{
  height: 300px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid #d9d9d9;
  position: relative;
  user-select: none;
}
</style>
