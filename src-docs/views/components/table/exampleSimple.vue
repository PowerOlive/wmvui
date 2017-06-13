<template>
<div>
  <vui-raised-button label="unselect" @click="unselect"/>
  <vui-table multiSelectable enableSelectAll ref="table">
    <vui-thead>
      <vui-tr>
        <vui-th>ID</vui-th>
        <vui-th>Name</vui-th>
        <vui-th>Status</vui-th>
      </vui-tr>
    </vui-thead>
    <vui-tbody>
      <vui-tr>
        <vui-td>1</vui-td>
        <vui-td>John Smith</vui-td>
        <vui-td>Employed</vui-td>
      </vui-tr>
      <vui-tr>
        <vui-td>2</vui-td>
        <vui-td>Randal White</vui-td>
        <vui-td>Unemployed</vui-td>
      </vui-tr>
      <vui-tr>
        <vui-td>3</vui-td>
        <vui-td>Stephanie Sanders</vui-td>
        <vui-td>Employed</vui-td>
      </vui-tr>
      <vui-tr>
        <vui-td>4</vui-td>
        <vui-td>Steve Brown</vui-td>
        <vui-td>Employed</vui-td>
      </vui-tr>
    </vui-tbody>
  </vui-table>
</div>
</template>
<script>
export default {
  methods: {
    unselect () {
      this.$refs.table.unSelectAll()
    }
  }
}
</script>
