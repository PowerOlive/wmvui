<template>
<div class="demo-step-container">
  <vui-stepper :activeStep="activeStep" :linear="false">
    <vui-step>
      <vui-step-button @click="changeStep(0)">
        选择活动地点
      </vui-step-button>
    </vui-step>
    <vui-step>
      <vui-step-button @click="changeStep(1)">
        创建一个群组
      </vui-step-button>
    </vui-step>
    <vui-step>
      <vui-step-button @click="changeStep(2)">
        宣传活动
      </vui-step-button>
    </vui-step>
  </vui-stepper>
  <div class="demo-step-content">
      <p>
        {{content}}
      </p>
      <div>
        <vui-button class="demo-step-button" label="上一步" :disabled="activeStep === 0" @click="handlePrev"/>
        <vui-button class="demo-step-button" label="下一步" :disabled="activeStep >= 2" primary @click="handleNext"/>
      </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeStep: 0
    }
  },
  computed: {
    content () {
      let message = ''
      switch (this.activeStep) {
        case 0:
          message = '选择一个活动的地点'
          break
        case 1:
          message = '创建群组，50人左右'
          break
        case 2:
          message = '多在群里发消息宣传宣传'
          break
        default:
          message = 'fuck! 又 TM 出错了！！！'
          break
      }
      return message
    },
    finished () {
      return this.activeStep > 2
    }
  },
  methods: {
    handleNext () {
      this.activeStep++
    },
    handlePrev () {
      this.activeStep--
    },
    changeStep (index) {
      this.activeStep = index
    }
  }
}
</script>

<style>
.demo-step-container {
  width: 100%;
  max-width: 700px;
  margin: auto;
}

.demo-step-content {
  margin: 0  16px;
}

.demo-step-button {
  margin-top: 12px;
  margin-right: 12px;
}
</style>
