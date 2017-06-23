<template>
<div>
  <h2 class="api-view-title">{{title}}</h2>
  <vui-tabs class="api-view-tabs" v-if="showTabs" @change="handleChange" :value="value">
    <vui-tab value="props" v-if="api.props" title="Props"/>
    <vui-tab value="slots" v-if="api.slots" title="Slots"/>
    <vui-tab value="events" v-if="api.events" title="Events"/>
  </vui-tabs>
  <vui-table v-show="value === 'props'" class="api-view-table" :fixedFooter="false" :fixedHeader="false" :showCheckbox="false" :selectable="false">
    <vui-thead>
      <vui-tr>
        <vui-th class="api-th" width="20%">{{$t('name')}}</vui-th>
        <vui-th class="api-th" width="15%">{{$t('type')}}</vui-th>
        <vui-th class="api-th" width="25%">{{$t('default')}}</vui-th>
        <vui-th class="api-th" width="40%">{{$t('description')}}</vui-th>
      </vui-tr>
    </vui-thead>
    <vui-tbody>
      <vui-tr v-for="item, index in api.props" :key="item.name + index">
        <vui-td class="api-td">{{item.name}}</vui-td>
        <vui-td class="api-td api-type-td">{{item.type}}</vui-td>
        <vui-td class="api-td api-default-td">
          <markdown-element :text="item.default"/>
        </vui-td>
        <vui-td class="api-desc-td api-td">
          <markdown-element :text="translate(item.desc)"/>
        </vui-td>
      </vui-tr>
    </vui-tbody>
  </vui-table>
  <vui-table v-show="value === 'slots'" class="api-view-table" :fixedFooter="false" :fixedHeader="false" :showCheckbox="false" :selectable="false">
    <vui-thead>
      <vui-tr>
        <vui-th class="api-th" width="15%">{{$t('name')}}</vui-th>
        <vui-th class="api-th" width="55%">{{$t('description')}}</vui-th>
      </vui-tr>
    </vui-thead>
    <vui-tbody>
      <vui-tr v-for="item, index in api.slots" :key="'slot_' + index">
        <vui-td class="api-td">{{item.name}}</vui-td>
        <vui-td class="api-desc-td api-td">
          <markdown-element :text="translate(item.desc)"/>
        </vui-td>
      </vui-tr>
    </vui-tbody>
  </vui-table>
  <vui-table v-show="value === 'events'" class="api-view-table" :fixedFooter="false" :fixedHeader="false" :showCheckbox="false" :selectable="false">
    <vui-thead>
      <vui-tr>
        <vui-th class="api-th" width="15%">{{$t('name')}}</vui-th>
        <vui-th class="api-th" width="55%">{{$t('description')}}</vui-th>
      </vui-tr>
    </vui-thead>
    <vui-tbody>
      <vui-tr v-for="item, index in api.events" :key="'event_' + index">
        <vui-td class="api-td">{{item.name}}</vui-td>
        <vui-td class="api-desc-td api-td">
          <markdown-element :text="translate(item.desc)"/>
        </vui-td>
      </vui-tr>
    </vui-tbody>
  </vui-table>
</div>
</template>

<script>
import zh from './zh'
export default {
  props: {
    title: {
      type: String,
      default: 'API'
    },
    api: {
      type: Object,
      required: true
    },
    i18n: {
      type: Function
    }
  },
  computed: {
    showTabs () {
      return (this.api.props && this.api.slots) || (this.api.props && this.api.events) || (this.api.events && this.api.slots)
    }
  },
  data () {
    return {
      value: this.api ? this.api.props ? 'props' : this.api.slots ? 'slots' : 'events' : 'props'
    }
  },
  methods: {
    handleChange (value) {
      this.value = value
    },
    translate (desc) {
      return this.i18n ? this.i18n(desc) : desc
    }
  },
  locales: {
    zh
  }
}
</script>

<style lang="less">
@import "../../../src/styles/import.less";
.api-view-tabs{
  background-color: transparent;
  color: @textColor;
  margin-bottom: 16px;
  .vui-tab-link-highlight {
    background-color: @primaryColor;
  }
  .vui-tab-link{
    color: @primaryTextColor;
  }

  .vui-tab-active{
    color: @primaryColor;
  }
}

.api-view-title{
  font-size: 20px;
  line-height: 1.4;
  font-weight: 400;
  margin-top: 1em;
  margin-bottom: 0;
  color: @textColor;
}
.api-th {
  font-size: 16px;
}
.api-td {
  font-size: 15px;
}

.api-type-td{
  color: @accentColor;
}
.api-default-td,
.api-desc-td {
  white-space: normal;
  text-overflow: inherit;
  padding-top: 12px;
  padding-bottom: 12px;
}

.api-view-table {
  .vui-table {
    min-width: 700px;
    // table-layout: auto;
  }
}
</style>
