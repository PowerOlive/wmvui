<template>
<mobile-tear-sheet>
  <mu-list :value="value" @change="handleChange">
    <mu-list-item :value="1" title="李白">
      <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
    </mu-list-item>
    <mu-list-item  :value="2" title="程咬金" inset toggleNested>
      <mu-avatar src="/images/avatar2.jpg" slot="leftAvatar"/>
      <mu-list-item :value="3"  title="阿柯" slot="nested">
        <mu-avatar src="/images/uicon.jpg" slot="leftAvatar"/>
      </mu-list-item>
      <mu-list-item :value="4" title="黄忠" slot="nested" inset>
        <mu-avatar src="/images/avatar5.jpg" slot="leftAvatar"/>
      </mu-list-item>
      <mu-list-item :value="5"  title="太阳" slot="nested" inset>
        <mu-avatar src="/images/avatar6.jpg" slot="leftAvatar"/>
      </mu-list-item>
    </mu-list-item>
    <mu-list-item :value="6" title="王召君" inset>
      <mu-avatar src="/images/avatar3.jpg" slot="leftAvatar"/>
    </mu-list-item>
    <mu-list-item :value="7" title="亚瑟" inset>
      <mu-avatar src="/images/avatar4.jpg" slot="leftAvatar"/>
    </mu-list-item>
  </mu-list>
</mobile-tear-sheet>
</template>

<script>
import mobileTearSheet from '../../../components/mobileTearSheet'
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
    'mobile-tear-sheet': mobileTearSheet
  }
}
</script>
