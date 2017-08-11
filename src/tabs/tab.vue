<template>
<abstract-button class="vui-tabs-item" :href="href" :to="to" :tag="tag" :activeClass="activeClass"
  :event="event" :exact="exact" :append="append" :replace="replace" :disabled="disabled"
  :center-ripple="false" :class="{'vui-tabs-active': active}" @click="tabClick" :style="activeStyle">
  <slot>
    <icon :icon="icon" :size="iconSize" />
  </slot>
  <div class="vui-tab-title" v-if="title">
    <slot name="title">{{title}}</slot>
  </div>
  <slot name="badge" />
</abstract-button>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import routerMixin from '../internal/routerMixin'
import icon from '../icon'
import {isNotNull} from '../utils'
export default {
  name: 'vui-tab-item',
  mixins: [routerMixin],
  props: {
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
    // titleClass: {
    //   type: [String, Object, Array]
    // },
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
    }
    // textClass () {
    //   const {icon, titleClass} = this
    //   let classNames = []
    //   if (icon) classNames.push('has-icon')
    //   return classNames.concat(convertClass(titleClass))
    // }
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
    icon
  }
}
</script>

<style lang="scss">
@import "../styles/import.scss";
.vui-tabs-item{
  .vui-badge{
    position: absolute;
    top: 8%;
  }
}
</style>
