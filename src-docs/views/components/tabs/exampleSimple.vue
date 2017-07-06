<template>
<div>
  <vui-tabs :value="activeTab" :lineHeight="1" @change="handleTabChange">
    <vui-tab-item value="李白" title="李白">
      <vui-badge info circle :size="18" text="1" slot="badge"/>
    </vui-tab-item>
    <vui-tab-item value="禁用" title="禁用" disabled />
    <vui-tab-item value="兰陵王" title="兰陵王" @active="handleActive" />
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
