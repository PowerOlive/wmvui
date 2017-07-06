<template>
  <div 
  class="vui-tags" 
  :style="style">
    
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
    icon: String,
    iconSize: Number,
    theme: Object
  },
  data () {
    return {
    }
  },
  computed: {
    style () {
      return this.theme
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.vui-tags {
  
}

</style>
