<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')" />
  <code-example :code="exampleSimpleCode" :title="$t('simpleExample')" :description="$t('simpleExampleDesc')">
    <ex-simple />
  </code-example>
  <code-example :code="exampleIconCode" :title="$t('iconExample')" :description="$t('iconExampleDesc')">
    <ex-icon />
  </code-example>
  <code-example :code="exampleNestedCode" :title="$t('nestedExample')" :description="$t('nestedExampleDesc')">
    <ex-nested />
  </code-example>
  <api-view :api="apiData.menu" title="Menu API" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.menuItem" title="MenuItem API" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleIcon from './exampleIcon'
import exampleIconCode from '!raw!./exampleIcon'
import exampleNested from './exampleNested'
import exampleNestedCode from '!raw!./exampleNested'
import apiData from './api'
import zh from './zh'

export default {
  data () {
    return {
      exampleSimpleCode,
      exampleIconCode,
      exampleNestedCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-icon': exampleIcon,
    'ex-nested': exampleNested
  },
  locales: {
    zh
  }
}
</script>
