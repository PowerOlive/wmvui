<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')" />
  <code-example :code="exampleSimpleCode" :title="$t('simpleExample')" description="">
    <ex-simple />
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import apiData from './api'
import zh from './zh'

export default {
  data () {
    return {
      exampleSimpleCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple
  },
  locales: {
    zh
  }
}
</script>

<style lang="css">
</style>
