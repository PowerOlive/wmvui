<template>
<vui-paper>
  <vui-bottom-nav :value="bottomNav" @change="handleChange">
    <vui-bottom-nav-item value="recents" title="Recents" icon="like"/>
    <vui-bottom-nav-item value="favorites" title="Favorites" icon="search"/>
    <vui-bottom-nav-item value="nearby" title="Nearby" icon="more"/>
  </vui-bottom-nav>
</vui-paper>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'recents'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>
