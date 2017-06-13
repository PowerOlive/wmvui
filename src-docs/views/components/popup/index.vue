<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')" />
  <code-example :code="exampleCode" :title="$t('exampleToast')">
    <exampleToast/>
  </code-example>
  <code-example :code="exampleCode" :title="$t('examplePopup')">
    <examplePopup/>
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>
<script>
import exampleToast from './exampleToast'
import examplePopup from './examplePopup'
import exampleCode from '!raw!./exampleToast'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleCode,
      apiData
    }
  },
  components: {
    examplePopup,
    exampleToast
  },
  locales: {
    zh,
    en
  }
}
</script>
