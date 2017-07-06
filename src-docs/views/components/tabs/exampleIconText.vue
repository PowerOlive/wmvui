<template>
<div>
  <vui-tabs :value="activeTab" @change="handleTabChange" color="red">
    <vui-tab-item value="tab1" title="首页" icon="menu" :iconSize="20" />
    <vui-tab-item value="tab2" title="购物车" icon="shop-cart" :iconSize="20">
      <vui-badge danger circle :size="18" text="1" slot="badge"/>
    </vui-tab-item>
    <vui-tab-item value="tab3" title="喜欢的" icon="like-fill" :iconSize="20" />
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
