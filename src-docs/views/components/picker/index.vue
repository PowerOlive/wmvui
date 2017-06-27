<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleCode" :title="$t('simpleExample')" :description="$t('simpleExampleDesc')">
    <ex-simple />
  </code-example>

  <code-example :code="popupExampleCode" :title="$t('popupExample')" :description="$t('popupExampleDesc')">
    <ex-popup />
  </code-example>

  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import example from './example'
import exampleCode from '!raw!./example'
import popupExample from './popupExample'
import popupExampleCode from '!raw!./popupExample'
import apiData from './api'
import zh from './zh'

export default {
  data () {
    return {
      exampleCode,
      popupExampleCode,
      apiData
    }
  },
  components: {
    'ex-simple': example,
    'ex-popup': popupExample
  },
  locales: {
    zh
  }
}
</script>
