<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleSimpleCode" :title="$t('simpleExample')" :description="$t('simpleExampleDesc')">
    <ex-simple/>
  </code-example>

  <code-example :code="exampleCutCode" :title="$t('exampleCut')" :description="$t('exampleCutDesc')">
    <ex-cut/>
  </code-example>

  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleCut from './exampleCut'
import exampleCutCode from '!raw!./exampleCut'
import apiData from './api'
import zh from './zh'

export default {
  data () {
    return {
      exampleSimpleCode,
      exampleCutCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-cut': exampleCut
  },
  locales: {
    zh
  }
}
</script>
