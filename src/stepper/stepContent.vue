<template>
  <div class="vui-step-content"  :class="{'last': last}">
    <div style="position: relative; overflow: hidden; height: 100%;">
      <expand-transition>
        <div class="vui-step-content-inner" ref="inner" v-if="active">
          <slot></slot>
        </div>
      </expand-transition>
    </div>
</div>
</template>

<script>
import expandTransition from '../internal/expandTransition'
export default {
  name: 'vui-step-content',
  props: {
    active: {
      type: Boolean
    },
    last: {
      type: Boolean
    }
  },
  components: {
    'expand-transition': expandTransition
  }
}
</script>

<style lang="scss">
@import "../styles/import.scss";
.vui-step-content{
  margin-left: 25px;
  padding:10px 0 10px 20px;
  overflow: hidden;
  .vui-stepper-vertical & {
    border-left: 1px solid $grey400;
  }
  &.last {
    border-left: none !important;
  }
}

.vui-step-content-inner {
  position: relative;
  width: 100%;
  top: 0px;
  left: 0px;
  overflow: hidden;
}

</style>
