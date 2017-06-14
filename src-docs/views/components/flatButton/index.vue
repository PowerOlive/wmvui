<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleSimpleCode" :title="$t('exampleBtnDefault')" :description="$t('exampleBtnDefaultDesc')">
    <ex-default/>
  </code-example>
  <code-example :code="exampleBtnStateCode" :title="$t('exampleBtnState')" :description="$t('exampleBtnStateDesc')">
    <ex-state/>
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleBtnDefault from './exampleBtnDefault'
import exampleBtnDefaultCode from '!raw!./exampleBtnDefault'
import exampleBtnState from './exampleBtnState'
import exampleBtnStateCode from '!raw!./exampleBtnState'

// import exampleComplex from './exampleComplex'
// import exampleComplexCode from '!raw!./exampleComplex'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleBtnDefaultCode,
      exampleBtnStateCode,
      apiData
    }
  },
  components: {
    'ex-default': exampleBtnDefault,
    'ex-state': exampleBtnState
  },
  locales: {
    zh,
    en
  }
}
</script>

<style lang="css">
</style>
