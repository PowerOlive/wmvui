<template>
  <vui-pagination :total="total" :current="current" @pageChange="handleClick">
  </vui-pagination>
</template>

<script>
export default{
  data () {
    return {
      total: 50,
      current: 1
    }
  },
  methods: {
    handleClick (newIndex) {
    }
  }
}
</script>
