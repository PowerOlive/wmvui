<template>
<div>
  <vui-tabs :value="activeTab" :lineHeight="1" @change="handleTabChange">
    <vui-tab value="李白" title="李白" :badge="{'content':'1','danger':true}"/>
    <vui-tab value="禁用" title="禁用" disabled :badge="{'content':'2','warn':true}"/>
    <vui-tab value="兰陵王" @active="handleActive" title="兰陵王" :badge="{'content':'3','success':true}"/>
  </vui-tabs>
  <vui-divider />
  <div v-if="activeTab === '李白'">
    <h2>Tab One</h2>
    <p>
      这是第一个 tab
    </p>
  </div>
  <div v-if="activeTab === '禁用'">
    <h2>Tab Two</h2>
    <p>
      这是第二个 tab
    </p>
  </div>
  <div v-if="activeTab === '兰陵王'">
    <h2>Tab Three</h2>
    <p>
      这是第三个 tab
    </p>
  </div>
  <vui-popup position="center" overlay svgIcon="happy" :toast="{type:'success'}" :open="open">选中{{activeTab}}</vui-popup>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: '李白',
      open: false
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    handleActive () {
      this.open = true
      setTimeout(() => {
        this.open = false
      }, 1000)
    }
  }
}
</script>
