<template>
  <div>
    <vui-list :value="value" @change="handleChange">
    <vui-list-item :value="1" title="李白">
      <vui-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
    </vui-list-item>
    <vui-list-item  :value="2" title="程咬金" inset toggleNested>
      <vui-avatar src="/images/avatar2.jpg" slot="leftAvatar"/>
      <vui-list-item :value="3"  title="阿柯" slot="nested">
        <vui-avatar src="/images/uicon.jpg" slot="leftAvatar"/>
      </vui-list-item>
      </vui-list-item>
    </vui-list-item>
    <vui-list-item :value="6" title="王召君" inset>
      <vui-avatar src="/images/avatar3.jpg" slot="leftAvatar"/>
    </vui-list-item>
  </vui-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 1
    }
  },
  methods: {
    handleChange (val) {
      this.value = val
    }
  },
  components: {
  }
}
</script>
