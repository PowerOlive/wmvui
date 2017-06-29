<template>
<div>
  <vui-tabs :value="activeTab" @change="handleTabChange" :theme="theme" active="#fff">
    <vui-tab value="tab1" icon="like-fill" :badge="{'content':'1','danger':true}"/>
    <vui-tab value="tab2" icon="like-fill" />
    <vui-tab value="tab3" icon="like-fill"/>
  </vui-tabs>
  <br>
  <vui-tabs :value="activeTab" @change="handleTabChange" active="#9c27b0">
    <vui-tab value="tab1" icon="like-fill" :badge="{'content':'1','danger':true}"/>
    <vui-tab value="tab2" icon="like-fill" />
    <vui-tab value="tab3" icon="like-fill"/>
  </vui-tabs>
  <vui-divider />
</div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'tab1',
      theme: {
        background: '#9c27b0',
        color: '#fff',
        active: '#ef5350'
      }
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  }
}
</script>
