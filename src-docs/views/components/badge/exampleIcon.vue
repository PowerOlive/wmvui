<template>
<div>
  <vui-badge circle :size="18" class="demo-icon-badge">
  	<template slot="text">10</template>
    <vui-icon icon="like-fill" :size="24" slot="sub" />
  </vui-badge>

  <vui-badge circle :size="22" class="demo-icon-badge">
  	<template slot="text">12</template>
    <vui-button :circle="42" icon="like-fill" :iconSize="24" slot="sub" />
  </vui-badge>

    <vui-badge circle :size="20" class="demo-icon-badge">
	    <span slot="text">&copy;</span>
	    <p slot="sub" style="font-size: 14px; padding:10px">版权信息</p>
	  </vui-badge>

    <vui-badge :size="8" :dot="true" class="demo-icon-badge" />
    <vui-badge :size="10" dot="red" class="demo-icon-badge" />
    <vui-badge :size="12" dot="green" class="demo-icon-badge" />

    <vui-badge text="标签" :label="true" class="demo-icon-badge" />
    <vui-badge text="标签" label="red"  class="demo-icon-badge" />
    <vui-badge text="标签" :label="label"  class="demo-icon-badge" />
</div>
</template>
<script>
export default {
  data () {
    return {
      label: {
        'border-color': '#ffa726',
        'color': '#ffa726',
        'padding': '3px 4px'
      }
    }
  }
}
</script>
<style>

.demo-icon-badge {
  margin: 16px;
}
</style>
