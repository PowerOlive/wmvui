<template>
<div class="vui-card-media">
  <slot></slot>
  <div class="vui-card-media-title">
    <div class="vui-card-title">
      <slot name="title"></slot>
    </div>
    <div class="vui-card-sub-title">
      <slot name="subTitle"></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'vui-card-media',
  props: {
  }
}
</script>

<style lang="scss">
@import "../styles/import.scss";
.vui-card-media {
  position: relative;
  > img {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    display: block;
    vertical-align: top;
  }
}

.vui-card-media-title {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 16px;
  background-color: $lightBlack;
  .vui-card-title {
    color: $lightWhite;
  }
  .vui-card-sub-title {
    color: $lightWhite;
    font-size: 14px;
  }
}
</style>
