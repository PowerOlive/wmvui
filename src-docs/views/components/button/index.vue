<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>

  <code-example :code="exampleBtnDefaultCode" :title="$t('exampleBtnDefault')" :description="$t('exampleBtnDefaultDesc')">
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

  <code-example :code="exampleBtnRoundCode" :title="$t('exampleBtnRound')" :description="$t('exampleBtnRoundDesc')">
    <ex-round/>
  </code-example>

  <code-example :code="exampleBtnCircleCode" :title="$t('exampleBtnCircle')" :description="$t('exampleBtnCircleDesc')">
    <ex-circle/>
  </code-example>

  <code-example :code="exampleBtnFillCode" :title="$t('exampleBtnFill')" :description="$t('exampleBtnFillDesc')">
    <ex-fill/>
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
import exampleBtnRound from './exampleBtnRound'
import exampleBtnRoundCode from '!raw!./exampleBtnRound'
import exampleBtnCircle from './exampleBtnCircle'
import exampleBtnCircleCode from '!raw!./exampleBtnCircle'
import exampleBtnFill from './exampleBtnFill'
import exampleBtnFillCode from '!raw!./exampleBtnFill'

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
      exampleBtnRoundCode,
      exampleBtnCircleCode,
      exampleBtnFillCode,
      apiData
    }
  },
  components: {
    'ex-default': exampleBtnDefault,
    'ex-state': exampleBtnState,
    'ex-invert': exampleBtnInvert,
    'ex-icon': exampleBtnIcon,
    'ex-round': exampleBtnRound,
    'ex-circle': exampleBtnCircle,
    'ex-fill': exampleBtnFill
  },
  locales: {
    zh,
    en
  }
}
</script>

<style lang="css">
</style>
