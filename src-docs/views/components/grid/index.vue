<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleCode" :title="$t('simpleExample')" :description="$t('simpleExampleDesc')">
    <example/>
  </code-example>
  <api-view :api="apiData.row" title="Row API" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.col" title="Col API" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import example from './example'
import exampleCode from '!raw!./example'
import apiData from './api'
import zh from './zh'

export default {
  data () {
    return {
      exampleCode,
      apiData
    }
  },
  components: {
    example
  },
  locales: {
    zh
  }
}
</script>
