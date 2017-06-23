<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleLineProgressCode" title="条形示例">
    <ex-line/>
  </code-example>
  <code-example :code="exampleCircleProgressCode" title="圆形示例">
    <ex-cricle/>
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleLineProgress from './exampleLineProgress'
import exampleLineProgressCode from '!raw!./exampleLineProgress'
import exampleCircleProgress from './exampleCircleProgress'
import exampleCircleProgressCode from '!raw!./exampleCircleProgress'
import apiData from './api'
import zh from './zh'

export default {
  data () {
    return {
      exampleLineProgressCode,
      exampleCircleProgressCode,
      apiData
    }
  },
  components: {
    'ex-line': exampleLineProgress,
    'ex-cricle': exampleCircleProgress
  },
  locales: {
    zh
  }
}
</script>
