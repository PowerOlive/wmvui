<template>
<div>
  <vui-range v-model="value1" disabled class="demo-range"/>
  <vui-range v-model="value2" disabled class="demo-range"/>
  <vui-range v-model="value3" disabled class="demo-range"/>
</div>
</template>

<script>
export default {
  data () {
    return {
      value1: 0,
      value2: 50,
      value3: 100
    }
  }
}
</script>

<style lang="css">
.demo-range {
  margin-bottom: 16px;
}
</style>
