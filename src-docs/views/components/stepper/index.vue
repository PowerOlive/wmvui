<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleSimpleCode" :title="$t('simpleExample')" :description="$t('simpleExampleDesc')">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleVerticalCode" :title="$t('verticalExample')" :description="$t('verticalExampleDesc')">
    <ex-vertical/>
  </code-example>
  <api-view :api="apiData.stepper" title="Stepper API" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.step" title="Step API" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.stepLabel" title="StepLabel API" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.stepContent" title="StepContent API" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleVertical from './exampleVertical'
import exampleVerticalCode from '!raw!./exampleVertical'
import apiData from './api'
import zh from './zh'

export default {
  data () {
    return {
      exampleSimpleCode,
      exampleVerticalCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-vertical': exampleVertical
  },
  locales: {
    zh
  }
}
</script>
