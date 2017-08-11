<template>
  <svg class="vui-svg-icon" :width="size / 7.5 + 'vw'" :height="size / 7.5 + 'vw'" aria-hidden="true">
    <use :xlink:href="'#icon-'+ icon" width="100%"></use>
  </svg>
</template>
<script>
export default {
  name: 'vui-svg-icon',
  props: {
    icon: {
      type: String
    },
    size: {
      type: Number,
      default: 50
    }
  },
  computed: {
  },
  methods: {
  },
  render (h) {
  }
}
</script>

<style lang="scss">
.vui-svg-icon{
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
