<template>
<mobile-tear-sheet>
  <mu-list>
    <mu-list-item title="(+86) 88977296" describeText="电话">
      <mu-icon icon="phone-fill" color="indigo" :size="26" slot="left"/>
      <mu-icon icon="right" slot="right"/>
    </mu-list-item>
    <mu-divider style="margin:10px 0"/>
    <mu-list-item title="(+86) 88977296" describeText="电话">
      <mu-icon icon="phone-fill" color="indigo" :size="26" slot="left"/>
      <mu-icon icon="right" slot="right"/>
    </mu-list-item>
  </mu-list>
  <mu-divider inset/>
  <mu-list>
    <mu-list-item title="mike.io@example.com" describeText="电子邮箱">
      <mu-icon icon="email-fill" color="indigo" :size="26" slot="left"/>
      <mu-icon icon="right" slot="right"/>
    </mu-list-item>
  </mu-list>
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
