<template>
<div>
  <vui-dropDown-menu :value="value" @change="handleChange">
    <vui-menu-item value="1" title="星期一"/>
    <vui-menu-item value="2" title="星期二"/>
    <vui-menu-item value="3" title="星期三"/>
    <vui-menu-item value="4" title="星期四"/>
    <vui-menu-item value="5" title="星期五"/>
    <vui-menu-item value="6" title="星期六"/>
    <vui-menu-item value="7" title="星期日"/>
  </vui-dropDown-menu>

  <vui-dropDown-menu :value="multiple" multiple @change="handleChangeMultiple">
    <vui-menu-item value="1" title="星期一"/>
    <vui-menu-item value="2" title="星期二"/>
    <vui-menu-item value="3" title="星期三"/>
    <vui-menu-item value="4" title="星期四"/>
    <vui-menu-item value="5" title="星期五"/>
    <vui-menu-item value="6" title="星期六"/>
    <vui-menu-item value="7" title="星期日"/>
  </vui-dropDown-menu>
</div>
</template>

<script>
export default {
  data () {
    return {
      value: '1',
      multiple: ['1']
    }
  },
  methods: {
    handleChange (value) {
      this.value = value
    },
    handleChangeMultiple (value) {
      this.multiple.push(value)
    }
  }
}
</script>
