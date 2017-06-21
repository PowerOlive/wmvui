<template>
<div>
  <vui-tabs :value="activeTab" @change="handleTabChange" color="red">
    <vui-tab value="tab1" icon="like-fill" title="李白" :badge="{'content':'1','danger':true}" />
    <vui-tab value="tab2" icon="like-fill" title="阿柯"/>
    <vui-tab value="tab3" icon="like-fill" title="兰陵王"/>
  </vui-tabs>
  <vui-divider />
</div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  }
}
</script>
