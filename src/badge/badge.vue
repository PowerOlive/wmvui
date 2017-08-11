<template>
  <div class="vui-badge" :class="bdageClass">
    <span class="vui-badge-sub" v-if="showSub">
      <slot name="sub">
      </slot>
    </span>
    <span class="vui-badge-sup" :style="badgeStyle">
      <slot name="text">
        {{text}}
      </slot>
    </span>
  </div>
</template>

<script>
import {convertClass} from '../utils'
export default {
  name: 'vui-badge',
  props: {
    text: {
      type: String,
      default: ''
    },
    theme: [String, Object],
    // primary: Boolean,
    // success: Boolean,
    // info: Boolean,
    // warn: Boolean,
    // danger: Boolean,
    round: Boolean,
    circle: {
      type: Boolean,
      default: false
    },
    dot: {
      type: [Boolean, String],
      default: ''
    },
    label: {
      type: [Boolean, String, Object],
      default: ''
    },
    size: Number
  },
  computed: {
    showSub () {
      return this.$slots && this.$slots.sub && this.$slots.sub.length > 0
    },
    badgeStyle () {
      let size = {
        'width': this.size ? this.size / 7.5 + 'vw' : '',
        'height': this.size ? this.size / 7.5 + 'vw' : '',
        'line-height': this.size ? this.size / 7.5 + 'vw' : ''
      }
      let dot = {
        'background': this.dot
      }
      let label = (typeof this.label) === 'string' ? {'border-color': this.label, 'color': this.label} : this.label
      let style = {}
      if (this.dot) {
        style = {...size, ...dot}
      } else if (this.label) {
        style = {...size, ...label}
      } else {
        let theme = (typeof this.theme) === 'string' ? {'background': this.theme} : this.theme
        style = {...size, ...theme}
      }
      return style
    },
    bdageClass () {
      const {circle, round, badgeClass, dot, label} = this
      const isFloat = this.$slots && this.$slots.sub && this.$slots.sub.length > 0
      const classNames = []
      if (circle) classNames.push('vui-badge-circle')
      if (round) classNames.push('vui-badge-round')
      /* if (primary) classNames.push('vui-badge-primary')
      if (success) classNames.push('vui-badge-success')
      if (info) classNames.push('vui-badge-info')
      if (warn) classNames.push('vui-badge-warn')
      if (danger) classNames.push('vui-badge-danger') */
      if (isFloat) classNames.push('vui-badge-float')
      if (dot) classNames.push('vui-badge-dot')
      if (label) classNames.push('vui-badge-label')
      return classNames.concat(convertClass(badgeClass))
    }
  }
}
</script>

<style lang="scss">
@import "../styles/import.scss";
.vui-badge{
  position: relative;
  &,&-sup,&-sub{
    display: inline-block;
    vertical-align: middle;
  }
  &-sup{
    border-radius: vw(8);
    padding: vw(10) vw(16);
    line-height: 1;
    font-size: vw(22);
    background-color: $primaryColor;
    color: #fff;
    text-align: center;
  }
  &-float {
    .vui-badge-sup{
      position: absolute;
      top: vw(-10);
      right: vw(-10);
    }
  }
  &-round{
    .vui-badge-sup{
      border-radius:10000px;
    }
  }
  &-circle {
    .vui-badge-sup{
      border-radius: 50%;
      padding: 0;
      width: vw(36);
      height: vw(36);
      line-height:vw(36);
      overflow: hidden;
    }
  }
  &-dot{
    .vui-badge-sup{
      padding:0;
      border-radius: 10000px
    }
  }
  /* &-primary {
    .vui-badge-sup{
      background-color: $primaryColor;
    }
  }
  &-success {
    .vui-badge-sup{
      background-color: $successColor;
    }
  }
  &-info {
    .vui-badge-sup{
      background-color: $infoColor;
    }
  }
  &-warn {
    .vui-badge-sup{
      background-color: $warnColor;
    }
  }
  &-danger {
    .vui-badge-sup{
      background-color: $dangerColor;
    }
  } */
  &-label{
    .vui-badge-sup{
      padding: vw(2);
      line-height: 1;
      background-color: transparent;
      color: #999;
      border:1px solid darken($borderColor, 20%);
    }
  }
}



</style>
