<template>
<div>
  <vui-tabs :value="activeTab" @change="handleTabChange" :theme="theme" active="#fff">
    <vui-tab-item value="tab1" icon="menu" :iconSize="20"/>
    <vui-tab-item value="tab2" icon="shop-cart" :iconSize="20" />
    <vui-tab-item value="tab3" icon="like-fill" :iconSize="20" />

  </vui-tabs>
  <br>
  <vui-tabs :value="activeTab" @change="handleTabChange" active="#9c27b0">
    <vui-tab-item value="tab1" icon="menu" :iconSize="20">
      <vui-badge circle :size="18" text="1" theme="red" slot="badge"/>
    </vui-tab-item>
    <vui-tab-item value="tab2" icon="shop-cart" :iconSize="20" />
    <vui-tab-item value="tab3" icon="like-fill" :iconSize="20"/>
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
