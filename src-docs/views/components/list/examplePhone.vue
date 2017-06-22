<template>
<mobile-tear-sheet>
  <vui-list>
    <vui-list-item title="(+86) 88977296" describeText="电话">
      <vui-icon icon="phone-fill" color="indigo" :size="26" slot="left"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
    <vui-divider :padding="['10px','0']"/>
    <vui-list-item title="(+86) 88977296" describeText="电话">
      <vui-icon icon="phone-fill" color="indigo" :size="26" slot="left"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
  </vui-list>
  <vui-divider />
  <vui-list>
    <vui-list-item title="mike.io@example.com" describeText="电子邮箱">
      <vui-icon icon="email-fill" color="indigo" :size="26" slot="left"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
  </vui-list>
</mobile-tear-sheet>
</template>
<script>
import mobileTearSheet from '../../../components/mobileTearSheet'
export default {
  components: {
    'mobile-tear-sheet': mobileTearSheet
  }
}
</script>
