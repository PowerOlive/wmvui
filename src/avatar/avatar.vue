<template>
  <div class="vui-avatar" @click="handleClick" :style="avatarStyle">
    <div class="vui-avatar-inner">
      <icon v-if="icon" :icon="icon" :size="iconSize"></icon>
      <img :src="src" v-if="src" />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import icon from '../icon'
export default {
  name: 'vui-avatar',
  props: {
    theme: Object,
    icon: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    size: {
      type: Number
    },
    iconSize: {
      type: Number
    }
  },
  computed: {
    avatarStyle () {
      let size = {
        width: this.size ? this.size + 'px' : '',
        height: this.size ? this.size + 'px' : ''
      }
      return {...size, ...this.theme}
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  },
  created () {
    this._isAvatar = true
  },
  components: {
    icon
  }
}
</script>

<style lang="scss">
@import "../styles/import.scss";
.vui-avatar{
  display: inline-block;
  height: 40px;
  width: 40px;
  font-size: 20px;
  color: $alternateTextColor;
  background-color: darken($alternateTextColor, 26%);
  text-align: center;
  border-radius: 50%;
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    display: block;
  }
}
.vui-avatar-inner{
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>
