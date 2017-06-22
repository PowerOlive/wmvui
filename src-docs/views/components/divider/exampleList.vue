<template>
	<div>
		<vui-list class="demo-list">
		  <vui-list-item title="List Item 1"/>
		  <vui-divider dotted />
		  <vui-list-item title="List Item 2"/>
		  <vui-list-item title="List Item 3"/>
		</vui-list>
		<vui-menu class="demo-list">
		  <vui-menu-item title="退出" leftIcon="like-fill"/>
		  <vui-menu-item title="搜索" leftIcon="search"/>
		  <vui-divider left="40px" />
		  <vui-menu-item title="更多" leftIcon="more"/>
		</vui-menu>
	</div>
</template>

<style lang="css">
.demo-list {
  display: inline-block;
  margin-right: 20px;
}
</style>
