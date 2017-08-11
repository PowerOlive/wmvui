<template>
  <div>
    <p class="mb5">最小值 0 最大值 4</p>
    <vui-number :min="0" :max="4" />
    <p class="mt20 mb5">步长 0.5</p>
    <vui-number :min="0" :step="0.5" :width="100" />
    <p class="mt20 mb5">禁止输入</p>
    <vui-number :min="0" :value="value" :disabled="false" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: 2
    }
  }
}
</script>
