<template>
  <div class="vui-marquee" :style="{height: height + 'px'}">
    <ul class="vui-marquee-box" ref="box" :style="{transform: `translate3d(0,${currenTranslateY}px,0)`, transition: `transform ${noAnimate ? 0 : duration}ms`}">
    <template v-for="(item, index) in list">
        <template v-if="item.color">
          <li :style="{'color':item.color}">
            {{item.title}}
          </li>
        </template>
        <template v-else-if="item.url">
          <li :style="{'color':item.color ? item.color : '' }"><router-link :to="item.url">{{item.title}}</router-link></li>
        </template>
        <template v-else>
          <li :style="marqueeStyle">
            {{item}}
          </li>
        </template>
    </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vui-marquee',
  props: {
    list: Array,
    time: {
      type: Number,
      default: 2000
    },
    duration: {
      type: Number,
      default: 300
    },
    down: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    }
  },
  beforeDestroy () {
    this.destroy()
  },
  data () {
    return {
      currenTranslateY: 0,
      height: '',
      length: 0,
      currentIndex: 0,
      noAnimate: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.destroy()
      this.init()
      this.start()
    })
  },
  computed: {
    marqueeStyle () {
      return {
        'color': this.color
      }
    }
  },
  methods: {
    destroy () {
      this.timer && clearInterval(this.timer)
    },
    init () {
      this.destroy()

      if (this.cloneNode) {
        this.$refs.box.removeChild(this.cloneNode)
      }

      this.cloneNode = null
      let firstItem = this.$refs.box.firstElementChild
      if (!firstItem) {
        return false
      }
      this.length = this.$refs.box.children.length
      this.height = firstItem.offsetHeight

      if (this.down) {
        this.cloneNode = this.$refs.box.lastElementChild.cloneNode(true)
        this.$refs.box.insertBefore(this.cloneNode, firstItem)
      } else {
        this.cloneNode = firstItem.cloneNode(true)
        this.$refs.box.appendChild(this.cloneNode)
      }
      return true
    },
    start () {
      if (this.down) this.go(false)
      this.timer = setInterval(() => {
        if (this.down) {
          this.currentIndex -= 1
          this.currenTranslateY = -(this.currentIndex + 1) * this.height
        } else {
          this.currentIndex += 1
          this.currenTranslateY = -this.currentIndex * this.height
        }
        if (this.currentIndex === this.length) {
          setTimeout(() => {
            this.go(true)
          }, this.duration)
        } else if (this.currentIndex === -1) {
          setTimeout(() => {
            this.go(false)
          }, this.duration)
        } else {
          this.noAnimate = false
        }
      }, this.time + this.duration)
    },
    go (toFirst) {
      this.noAnimate = true
      if (toFirst) {
        this.currentIndex = 0
        this.currenTranslateY = 0
      } else {
        this.currentIndex = this.length - 1
        this.currenTranslateY = -(this.currentIndex + 1) * this.height
      }
    }
  }
}
</script>
<style lang="less">
.vui-marquee {
  width: 100%;
  overflow: hidden;
}
.vui-marquee-box {
  padding: 0;
  margin: 0;
  width: 100%;
  height: auto;
  
  li {
    margin: 0;
    width: 100%;
  }
}
</style>
