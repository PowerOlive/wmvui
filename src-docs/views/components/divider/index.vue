<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleFormCode" :title="$t('exampleForm')">
    <ex-form />
  </code-example>
  <code-example :code="exampleListCode" :title="$t('exampleList')">
    <ex-list />
  </code-example>
  <code-example :code="exampleTitleCode" :title="$t('exampleTitle')">
    <ex-title />
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleForm from './exampleForm'
import exampleFormCode from '!raw!./exampleForm'
import exampleList from './exampleList'
import exampleListCode from '!raw!./exampleList'
import exampleTitle from './exampleTitle'
import exampleTitleCode from '!raw!./exampleTitle'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleFormCode,
      exampleListCode,
      exampleTitleCode,
      apiData
    }
  },
  components: {
    'ex-form': exampleForm,
    'ex-list': exampleList,
    'ex-title': exampleTitle
  },
  locales: {
    zh,
    en
  }
}
</script>
