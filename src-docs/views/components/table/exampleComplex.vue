<template>
<div>
  <vui-table :fixedFooter="fixedFooter" :fixedHeader="fixedHeader" :height="height"
    :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable"
    :selectable="selectable" :showCheckbox="showCheckbox">
    <vui-thead slot="header">
      <vui-tr>
        <vui-th tooltip="ID">ID</vui-th>
        <vui-th tooltip="名称">Name</vui-th>
        <vui-th tooltip="状态">Status</vui-th>
      </vui-tr>
    </vui-thead>
    <vui-tbody>
      <vui-tr v-for="item,index in tableData"  :key="index" :selected="item.selected">
        <vui-td>{{index + 1}}</vui-td>
        <vui-td>{{item.name}}</vui-td>
        <vui-td>{{item.status}}</vui-td>
      </vui-tr>
    </vui-tbody>
    <vui-tfoot slot="footer">
      <vui-tr>
        <vui-td>ID</vui-td>
        <vui-td>Name</vui-td>
        <vui-td>Status</vui-td>
      </vui-tr>
    </vui-tfoot>
  </vui-table>
  <div class="demo-table-settings">
    <h3>设置</h3>
    <vui-text-field v-model.lazy="height" label="table的高度"/><br/>
    <vui-switch labelLeft label="固定表头" v-model="fixedHeader"/><br/>
    <vui-switch labelLeft label="固定表尾" v-model="fixedFooter"/><br/>
    <vui-switch labelLeft label="可以被选择" v-model="selectable"/><br/>
    <vui-switch labelLeft label="可以多选" v-model="multiSelectable"/><br/>
    <vui-switch labelLeft label="可以选择全部" v-model="enableSelectAll"/><br/>
    <vui-switch labelLeft label="显示复选框" v-model="showCheckbox"/><br/>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          name: 'John Smith',
          status: 'Employed',
          selected: true
        },
        {
          name: 'Randal White',
          status: 'Unemployed'
        },
        {
          name: 'Stephanie Sanders',
          status: 'Employed',
          selected: true
        },
        {
          name: 'Steve Brown',
          status: 'Employed'
        },
        {
          name: 'Joyce Whitten',
          status: 'Employed'
        },
        {
          name: 'Samuel Roberts',
          status: 'Employed'
        },
        {
          name: 'Adam Moore',
          status: 'Employed'
        }
      ],
      fixedHeader: true,
      fixedFooter: true,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: false,
      showCheckbox: true,
      height: '300px'
    }
  }
}
</script>

<style lang="css">
.demo-table-settings{
  width: 200px;
  overflow: hidden;
  margin: 20px auto 0px;
}
</style>
