<template>
  <vui-paper style="max-width: 376px; ">
    <vui-bottom-nav :value="bottomNav" shift @change="handleChange">
      <vui-bottom-nav-item value="movies" title="Movies" icon="like-fill"/>
      <vui-bottom-nav-item value="music" title="Music" icon="search"/>
      <vui-bottom-nav-item value="pictures" title="Pictures" icon="more"/>
    </vui-bottom-nav>
  </vui-paper>

</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'movies',
      bottomNavColor: 'movies'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>
