<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')" />
  <code-example :code="exampleToastCode" :title="$t('exampleToast')">
    <exampleToast/>
  </code-example>
  <code-example :code="examplePopupCode" :title="$t('examplePopup')">
    <examplePopup/>
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>
<script>
import exampleToast from './exampleToast'
import exampleToastCode from '!raw!./exampleToast'
import examplePopup from './examplePopup'
import examplePopupCode from '!raw!./examplePopup'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleToastCode,
      examplePopupCode,
      apiData
    }
  },
  components: {
    exampleToast,
    examplePopup
  },
  locales: {
    zh,
    en
  }
}
</script>
