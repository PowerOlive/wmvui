<template>
<div>
  <vui-badge success circle :size="18" class="demo-icon-badge">
  	<template slot="text">10</template>
    <vui-icon icon="like-fill" :size="24" slot="sub" />
  </vui-badge>

  <vui-badge info circle :size="22" class="demo-icon-badge">
  	<template slot="text">12</template>
    <vui-button :circle="42" icon="like-fill" :iconSize="24" slot="sub" />
  </vui-badge>

    <vui-badge primary circle :size="20" class="demo-icon-badge">
	    <span slot="text">&copy;</span>
	    <p slot="sub" style="font-size: 14px; padding:10px">版权信息</p>
	  </vui-badge>
</div>
</template>

<style>

.demo-icon-badge {
  margin: 16px;
}
</style>
