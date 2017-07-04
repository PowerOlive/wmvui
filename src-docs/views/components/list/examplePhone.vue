<template>
  <div>
    <vui-list>
    <vui-list-item>
      <template slot="title">(+86) 88977296</template>
        <template slot="describe">电话</template>
      <vui-icon icon="phone-fill" color="indigo" :size="26" slot="left"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
  </vui-list>
  <vui-divider />
  <vui-list>
    <vui-list-item>
      <template slot="title">mike.io@example.com</template>
      <template slot="describe">电子邮箱</template>
      <vui-icon icon="email-fill" color="indigo" :size="26" slot="left"/>
      <vui-icon icon="right" slot="right"/>
    </vui-list-item>
  </vui-list>
  </div>
</template>
<script>
export default {
  components: {
  }
}
</script>
