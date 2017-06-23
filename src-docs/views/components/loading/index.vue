<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleCircleLoadingCode" title="圆形Loading">
    <ex-circle/>
  </code-example>
  <code-example :code="exampleLineLoadingCode" title="线形Loading">
    <ex-line/>
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleCircleLoading from './exampleCircleLoading'
import exampleCircleLoadingCode from '!raw!./exampleCircleLoading'
import exampleLineLoading from './exampleLineLoading'
import exampleLineLoadingCode from '!raw!./exampleLineLoading'
import apiData from './api'
import zh from './zh'

export default {
  data () {
    return {
      exampleCircleLoadingCode,
      exampleLineLoadingCode,
      apiData
    }
  },
  components: {
    'ex-circle': exampleCircleLoading,
    'ex-line': exampleLineLoading
  },
  locales: {
    zh
  }
}
</script>
