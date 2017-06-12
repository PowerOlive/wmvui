<template>
<mobile-tear-sheet>
  <mu-list>
    <mu-list-item title="列表">
      <mu-icon slot="left" icon="right" />
    </mu-list-item>
    <mu-list-item title="列表">
      <mu-icon slot="left" icon="right" />
    </mu-list-item>
    <mu-list-item title="列表">
      <mu-icon slot="left" icon="right" />
    </mu-list-item>
    <mu-list-item title="列表">
      <mu-icon slot="left" icon="right" />
    </mu-list-item>
  </mu-list>
  <mu-divider />
  <mu-list>
    <mu-list-item title="列表">
      <mu-icon slot="right" icon="right" />
    </mu-list-item>
    <mu-list-item title="列表">
      <mu-icon slot="right" icon="right" />
    </mu-list-item>
    <mu-list-item title="列表">
      <mu-icon slot="right" icon="right" />
    </mu-list-item>
    <mu-list-item title="列表">
      <mu-icon slot="right" icon="right" />
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
