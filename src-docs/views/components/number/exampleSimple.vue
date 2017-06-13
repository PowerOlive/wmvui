<template>
  <div>
    <p class="mb5">最小值 0 最大值 4</p>
    <mu-number :min="0" :max="4"></mu-number>
    <p class="mt20 mb5">步长 0.5</p>
    <mu-number :min="0" :step="0.5" :width="50"></mu-number>
    <p class="mt20 mb5">禁止输入</p>
    <mu-number :min="0" :value="value" :fillable="false"></mu-number>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: 2
      // tableData: [
      //   {name: 'value',type: 'Number',info:'使用v-model绑定'},
      //   {name: 'min',type: 'Number',info:'最小值'},
      //   {name: 'max',type:'Number',info:'最大值'},
      //   {name: 'step',type:'Number',info:'步长'},
      //   {name: 'fillable',type:'Boolean',info:'是否可填写'},
      //   {name: 'width',type:'Number',info:'输入框宽度'},
      // ]
    }
  }
}
</script>
