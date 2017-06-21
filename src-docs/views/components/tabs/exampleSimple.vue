<template>
<div>
  <vui-tabs :value="activeTab" :lineHeight="1" @change="handleTabChange">
    <vui-tab value="tab1" title="李白" :badge="{'content':'1','danger':true}"/>
    <vui-tab value="tab2" title="阿柯" :badge="{'content':'2','warn':true}"/>
    <vui-tab value="tab3" @active="handleActive" title="兰陵王" :badge="{'content':'3','success':true}"/>
  </vui-tabs>
  <vui-divider />
  <div v-if="activeTab === 'tab1'">
    <h2>Tab One</h2>
    <p>
      这是第一个 tab
    </p>
  </div>
  <div v-if="activeTab === 'tab2'">
    <h2>Tab Two</h2>
    <p>
      这是第二个 tab
    </p>
  </div>
  <div v-if="activeTab === 'tab3'">
    <h2>Tab Three</h2>
    <p>
      这是第三个 tab
    </p>
  </div>
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
    },
    handleActive () {
      window.alert('tab active')
    }
  }
}
</script>
