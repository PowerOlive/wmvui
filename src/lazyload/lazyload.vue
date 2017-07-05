<template>
    <img :src="init" :data-src="src" class="vui-lazyload-img" />
</template>
<script>
import LazyLoadImg from 'lazy-load-img'
export default {
  name: 'vui-lazyload',
  components: {
  },
  props: {
    init: String,
    src: String,
    error: String,
    mode: {
      type: String,
      default: 'default'
    },
    time: {
      type: Number,
      default: 300
    },
    // done: {
    //   type: Boolean,
    //   default: true
    // },
    cut: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // layzload: null
    }
  },
  mounted () {
    const that = this
    that.$nextTick(() => {
      that.layzload = new LazyLoadImg({
        el: that.$parent.$el,
        // 默认模式，将显示原图，diy模式，将自定义剪切，默认剪切居中部分
        mode: that.mode,
        // 设置一个检测时间间隔
        time: that.time,
        // 页面内所有数据图片加载完成后，是否自己销毁程序，true默认销毁，false不销毁
        done: true,
        // true，自动将图片剪切成默认图片的宽高；false显示图片真实宽高
        qriginal: that.cut,
        // 只要其中一个位置符合条件，都会触发加载机制
        position: {
          // 元素距离顶部
          top: 20,
          // 元素距离右边
          right: 20,
          // 元素距离下面
          bottom: 20,
          // 元素距离左边
          left: 20
        },
        load: function (el) {
          // console.log(el)
          // 图片加载成功后执行的回调方法，传入一个参数
        },
        before: function (el) {
          // console.log(el)
        },
        success: function (el) {
          el.classList.add('vui-lazyload-success')
        },
        error: function (el) {
          el.src = that.error
        }
      })
      // 重新开启懒加载程序
      // that.layzload.start()
      // 销毁图片懒加载程序
      // that.layzload.destroy()
    })
  }
}
</script>

<style lang="scss">
.vui-lazyload-img{
  // width: 100%;
}
.vui-lazyload-success {
    animation: fadeIn .5s ease 0.2s 1 both;
}
@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
</style>
