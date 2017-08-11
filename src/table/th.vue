<template>
  <th class="vui-th" @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <div class="vui-th-wrapper" ref="wrapper">
      <slot></slot>
      <tooltip v-if="tooltip" :trigger="tooltipTrigger" :verticalPosition="verticalPosition" :horizontalPosition="horizontalPosition" :show="tooltipShown" :label="tooltip" :touch="touch"></tooltip>
    </div>
  </th>
</template>

<script>
import tooltip from '../tooltip'
export default {
  name: 'vui-th',
  props: {
    tooltip: {
      type: String
    },
    tooltipPosition: {
      type: String,
      default: 'bottom-right'
    },
    touch: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tooltipShown: false,
      tooltipTrigger: null
    }
  },
  mounted () {
    this.tooltipTrigger = this.$refs.wrapper
  },
  computed: {
    verticalPosition () {
      const tooltipPosition = this.tooltipPosition.split('-')
      return tooltipPosition[0]
    },
    horizontalPosition () {
      const tooltipPosition = this.tooltipPosition.split('-')
      return tooltipPosition[1]
    }
  },
  methods: {
    showTooltip () {
      this.tooltipShown = true
    },
    hideTooltip () {
      this.tooltipShown = false
    }
  },
  components: {
    tooltip
  }
}
</script>

<style lang="scss">
@import "../styles/import.scss";
.vui-th {
  font-weight: normal;
  font-size: 12px;
  padding-left: 24px;
  padding-right: 24px;
  height: 56px;
  text-align: left;
  color: $primaryTextColor;
  position: relative;
}

.vui-th-wrapper{
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
