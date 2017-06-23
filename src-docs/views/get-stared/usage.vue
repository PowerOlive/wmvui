<template>
<div class="content-wrapper">
  <markdown-element :text="$t('usageDoc')"/>
</div>
</template>

<script>
import zh from './zh'
export default {
  locales: {
    zh
  }
}
</script>
