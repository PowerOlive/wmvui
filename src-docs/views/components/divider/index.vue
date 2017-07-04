<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleTitleCode" :title="$t('exampleTitle')">
    <ex-title />
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleTitle from './exampleTitle'
import exampleTitleCode from '!raw!./exampleTitle'
import apiData from './api'
import zh from './zh'

export default {
  data () {
    return {
      exampleTitleCode,
      apiData
    }
  },
  components: {
    'ex-title': exampleTitle
  },
  locales: {
    zh
  }
}
</script>
