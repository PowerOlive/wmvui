<template>
<vui-list :value="value" @change="handleChange">
  <vui-list-item  :value="1" toggleNested :open="false">
    <template slot="title">可折叠菜单</template>
    <div slot="nested" class="pd10">
      Myron Liu -周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
    </div>
  </vui-list-item>
  <vui-list-item  :value="2" toggleNested :open="false">
    <template slot="title">可折叠菜单</template>
    <vui-avatar src="images/avatar3.jpg" slot="left"/>
    <div slot="nested" class="pd10">
      Myron Liu -周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
    </div>
  </vui-list-item>
</vui-list>
</template>

<script>
export default {
  data () {
    return {
      value: 1
    }
  },
  methods: {
    handleChange (val) {
      this.value = val
    }
  },
  components: {
  }
}
</script>
