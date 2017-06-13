<template>
  <svg class="vui-svg-icon" :width="size + 'px'" :height="size + 'px'" aria-hidden="true">
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

<style lang="less">
.vui-svg-icon{
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
