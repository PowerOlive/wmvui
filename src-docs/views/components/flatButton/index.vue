<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>

  <code-example :code="exampleSimpleCode" :title="$t('exampleBtnDefault')" :description="$t('exampleBtnDefaultDesc')">
    <ex-default/>
  </code-example>

  <code-example :code="exampleBtnStateCode" :title="$t('exampleBtnState')" :description="$t('exampleBtnStateDesc')">
    <ex-state/>
  </code-example>

  <code-example :code="exampleBtnInvertCode" :title="$t('exampleBtnInvert')" :description="$t('exampleBtnInvertDesc')">
    <ex-invert/>
  </code-example>

  <code-example :code="exampleBtnIconCode" :title="$t('exampleBtnIcon')" :description="$t('exampleBtnIconDesc')">
    <ex-icon/>
  </code-example>

  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleBtnDefault from './exampleBtnDefault'
import exampleBtnDefaultCode from '!raw!./exampleBtnDefault'
import exampleBtnState from './exampleBtnState'
import exampleBtnStateCode from '!raw!./exampleBtnState'
import exampleBtnInvert from './exampleBtnInvert'
import exampleBtnInvertCode from '!raw!./exampleBtnInvert'
import exampleBtnIcon from './exampleBtnIcon'
import exampleBtnIconCode from '!raw!./exampleBtnIcon'

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
      exampleBtnInvertCode,
      exampleBtnIconCode,
      apiData
    }
  },
  components: {
    'ex-default': exampleBtnDefault,
    'ex-state': exampleBtnState,
    'ex-invert': exampleBtnInvert,
    'ex-icon': exampleBtnIcon
  },
  locales: {
    zh,
    en
  }
}
</script>

<style lang="css">
</style>
