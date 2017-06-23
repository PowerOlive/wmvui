<template>
  <div>
    格式化倒计时： <vui-clocker time="2018-05-23 12:00" format="%H 小时 %M 分" @finish="finish"/>
    <br>
    <br>
    格式化倒计时： <vui-clocker time="2018-06-23 12:00" format="%D天 %H 小时 %M 分" />
    <br>
    <br>
    自定义样式 ：
    <vui-clocker time="2017-08-01" slot="value">
      <span style="color:red">%D</span> 天
      <span style="color:red">%H</span> 小时
      <span style="color:red">%M</span> 分 <span style="color:red">%S</span> 秒
    </vui-clocker>
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    finish () {
      console.log(111)
    }
  }
}
</script>
