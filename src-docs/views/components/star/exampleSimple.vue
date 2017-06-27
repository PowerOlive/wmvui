<template>
  <div>
    点击评星：<vui-star icon="face" :iconSize="24" :max="10" score />
    <br>
    禁用状态：<vui-star icon="success-fill" :iconSize="24" v-model="value" disabled score color="#4caf50"  />
    <br>
    评分回调：<vui-star icon="like-fill" :iconSize="24" color="#ef5350" @click="handleClick" /> {{score}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: 2,
      score: ''
    }
  },
  methods: {
    handleClick (val) {
      this.score = val + '分'
      window.alert(val)
    }
  }
}
</script>
