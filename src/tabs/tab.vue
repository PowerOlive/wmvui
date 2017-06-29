<template>
<abstract-button class="vui-tabs-item" :href="href" :to="to" :tag="tag" :activeClass="activeClass"
  :event="event" :exact="exact" :append="append" :replace="replace" :disabled="disabled"
  :center-ripple="false" :class="{'vui-tabs-active': active}" @click="tabClick" :style="activeStyle">
  <slot>
    <icon :icon="icon" :size="iconSize" />
  </slot>
  <vui-badge 
  v-if="badge" 
  circle :size="badge.size" 
  :content="badge.content" 
  :primary="badge.primary"
  :success="badge.success"
  :info="badge.info"
  :warn="badge.warn"
  :danger="badge.danger"
   />
  <div class="vui-tabs-text" :class="textClass" v-if="title">{{title}}</div>
</abstract-button>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import routerMixin from '../internal/routerMixin'
import icon from '../icon'
import badge from '../badge'
import {isNotNull, convertClass} from '../utils'
export default {
  name: 'vui-tab',
  mixins: [routerMixin],
  props: {
    badge: {
      type: [Object, Array]
    },
    icon: {
      type: String,
      default: ''
    },
    iconSize: {
      type: Number
    },
    // iconClass: {
    //   type: [String, Object, Array]
    // },
    title: {
      type: String,
      default: ''
    },
    titleClass: {
      type: [String, Object, Array]
    },
    href: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    value: {}
  },
  computed: {
    active () {
      return isNotNull(this.value) && this.$parent.value === this.value
    },
    activeStyle () {
      return {
        'color': this.active ? this.$parent.active : ''
      }
    },
    textClass () {
      const {icon, titleClass} = this
      let classNames = []
      if (icon) classNames.push('has-icon')
      return classNames.concat(convertClass(titleClass))
    }
  },
  methods: {
    tabClick (e) {
      if (this.$parent.handleTabClick) this.$parent.handleTabClick(this.value, this)
      this.$emit('click', e)
    }
  },
  watch: {
    active (val, oldVal) {
      if (val === oldVal) return
      if (val) this.$emit('active')
    }
  },
  components: {
    'abstract-button': abstractButton,
    icon,
    badge
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
</style>
