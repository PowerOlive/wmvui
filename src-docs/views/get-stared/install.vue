<template>
<div class="content-wrapper">
  <markdown-element :text="$t('installDoc')"/>
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
