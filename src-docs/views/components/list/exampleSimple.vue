<template>
<mobile-tear-sheet>
  <vui-list>
    <vui-list-item title="列表">
      <vui-icon slot="left" icon="right" />
    </vui-list-item>
    <vui-list-item title="列表">
      <vui-icon slot="left" icon="right" />
    </vui-list-item>
    <vui-list-item title="列表">
      <vui-icon slot="left" icon="right" />
    </vui-list-item>
    <vui-list-item title="列表">
      <vui-icon slot="left" icon="right" />
    </vui-list-item>
  </vui-list>
  <vui-divider />
  <vui-list>
    <vui-list-item title="列表">
      <vui-icon slot="right" icon="right" />
    </vui-list-item>
    <vui-list-item title="列表">
      <vui-icon slot="right" icon="right" />
    </vui-list-item>
    <vui-list-item title="列表">
      <vui-icon slot="right" icon="right" />
    </vui-list-item>
    <vui-list-item title="列表">
      <vui-icon slot="right" icon="right" />
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
