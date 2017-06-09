<template>
  <mu-paper style="max-width: 376px; ">
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item value="movies" title="Movies" icon="like-fill"/>
      <mu-bottom-nav-item value="music" title="Music" icon="search"/>
      <mu-bottom-nav-item value="pictures" title="Pictures" icon="more"/>
    </mu-bottom-nav>
  </mu-paper>

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
