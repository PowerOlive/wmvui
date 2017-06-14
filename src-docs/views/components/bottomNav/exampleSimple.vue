<template>
<vui-paper>
  <vui-bottom-nav :value="bottomNav" @change="handleChange">
    <vui-bottom-nav-item value="like" title="喜欢" icon="like"/>
    <vui-bottom-nav-item value="search" title="搜索" icon="search"/>
    <vui-bottom-nav-item value="more" title="更多" icon="more"/>
  </vui-bottom-nav>
</vui-paper>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'like'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>
