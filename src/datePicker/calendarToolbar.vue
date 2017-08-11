<template>
<div class="vui-calendar-toolbar">
  <vui-button :disabled="!prevMonth" @click.stop="prev">
    <svg viewBox="0 0 24 24" class="vui-calendar-svg-icon">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    </svg>
  </vui-button>
  <div class="vui-calendar-toolbar-title-wrapper">
    <transition :name="'vui-calendar-slide-' + slideType"  v-for="displayDate, index in displayDates" :key="index">
      <div class="vui-calendar-toolbar-title" :key="displayDate.getTime()">
        {{dateTimeFormat.formatMonth(displayDate)}}
      </div>
    </transition>
  </div>
  <vui-button :disabled="!nextMonth" @click.stop="next">
    <svg viewBox="0 0 24 24" class="vui-calendar-svg-icon">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
    </svg>
  </vui-button>
</div>
</template>

<script>
import button from '../button'
export default {
  props: {
    dateTimeFormat: {
      type: Object
    },
    displayDates: {
      type: Array
    },
    nextMonth: {
      type: Boolean,
      default: true
    },
    prevMonth: {
      type: Boolean,
      default: true
    },
    slideType: {
      type: String
    }
  },
  methods: {
    prev () {
      this.$emit('monthChange', -1)
    },
    next () {
      this.$emit('monthChange', 1)
    }
  },
  components: {
    'vui-button': button
  }
}
</script>

<style lang="scss">
@import "../styles/import.scss";
.vui-calendar-toolbar {
  display: flex;
  justify-content: space-between;
  height:48px;
}

.vui-calendar-toolbar-title-wrapper {
  position: relative;
  overflow: hidden;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  width: 100%;
}

.vui-calendar-toolbar-title {
  line-height: 48px;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  line-height: 48px;
}

.vui-calendar-svg-icon {
  display: block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  user-select: none;
}
</style>
