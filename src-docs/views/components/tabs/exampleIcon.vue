<template>
<div>
  <vui-tabs :value="activeTab" @change="handleTabChange">
    <vui-tab value="tab1" icon="like-fill" :badge="{'content':'1','danger':true}"/>
    <vui-tab value="tab2" icon="like-fill"/>
    <vui-tab value="tab3" icon="like-fill"/>
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
