<template>
  <div>
    <div>
      自动计时：
      <vui-countdown 
        v-show="show1" 
        v-model="time1" 
        title="秒"
        @finish="finish1" 
      />
      {{finish}}      
    </div>
    <br>
    单击开始计时 
    <vui-switch v-model="start2" />
    <vui-countdown 
    title="S"
    :start="start2" 
    v-model="time2" 
    />
    <br>
    <br>
    <vui-button :label="label" info :disabled="disabled"  @click.native="btnClick">
      <vui-countdown 
        title="S"
        v-model="time3" 
        :start="start3"
        v-show="show3"  
        @finish="finish3" 
        />
    </vui-button>
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      show1: true,
      time1: 5,
      start2: false,
      time2: 3,
      finish: '',
      show3: false,
      time3: 5,
      start3: false,
      label: '发送验证码',
      disabled: false
    }
  },
  methods: {
    finish1 (index) {
      this.show1 = false
      this.finish = '完成计时'
    },
    btnClick () {
      this.start3 = true
      this.show3 = true
      this.label = ''
      this.disabled = true
    },
    finish3 () {
      this.start3 = false
      this.show3 = false
      this.label = '重新发送'
      this.disabled = false
      this.time3 = 5
    }
  }
}
</script>
