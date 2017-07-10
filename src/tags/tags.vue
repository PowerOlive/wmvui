<template>
  <div 
  class="vui-tags">
    <slot></slot>
    <div
    class="vui-tags-wrap"
    :class="tagsClass">
<!--       <span class="vui-tags-text">
        <slot name="text">{{text}}</slot>
      </span> -->
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script>
import icon from '../icon'
export default {
  name: 'vui-tags',
  components: {
    icon
  },
  props: {
    right: Boolean,
    bottom: Boolean,
    left: Boolean
  },
  data () {
    return {
    }
  },
  computed: {
    tagsClass () {
      const {right, bottom, left} = this
      return {
        'vui-tags-right': right,
        'vui-tags-bottom': bottom,
        'vui-tags-left': left
      }
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-tags {
  position:relative;
  overflow: hidden;
  img{
    vertical-align: middle;
  }
/* &-wrap,
&-text{
  position: absolute;
  overflow: hidden;
} */
  &-wrap{
    position: absolute;
    left:0;
    top:0;
    overflow: hidden;
    .vui-icon{
      line-height:1;
      white-space: nowrap;
      &:after{
        content:attr(data-text);
        font-size: 12px;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate3d(-50%,-50%,0);
        color:#fff;
      }
    }
  }
  &-right{
    left:initial;
    right:0;
  }
  &-bottom{
    top:initial;
    right:0;
    left:initial;
    bottom:0;
  }
  &-left{
    top:initial;
    left:0;
    bottom:0;
  }
}

</style>
