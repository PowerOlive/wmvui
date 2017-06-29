<template>
<div>
  <vui-range v-model="value1" :step="5" class="demo-range"/>
  <vui-range v-model="value2" :step="10" class="demo-range"/>
  <vui-range v-model="value3" :step="15" class="demo-range"/>
</div>
</template>

<script>
export default {
  data () {
    return {
      value1: 5,
      value2: 10,
      value3: 15
    }
  }
}
</script>

<style lang="css">
.demo-range {
  margin-bottom: 16px;
}
</style>
