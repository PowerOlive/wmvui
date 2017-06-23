<template>
<div class="demo-step-container">
  <vui-stepper :activeStep="activeStep">
    <vui-step>
      <vui-step-label label="已付款" />
    </vui-step>
    <vui-step>
      <vui-step-label label="已发货" />
    </vui-step>
    <vui-step>
      <vui-step-label label="完成" />
    </vui-step>
  </vui-stepper>
  <div class="demo-step-content">
    <p v-if="finished">
      都完成啦!<a href="javascript:;" @click="reset">点这里</a>可以重置
    </p>
    <template v-if="!finished">
      <p>
        {{content}}
      </p>
      <div>
        <vui-button class="demo-step-button" label="上一步" :disabled="activeStep === 0" @click="handlePrev"/>
        <vui-button class="demo-step-button" :label="activeStep === 2 ? '完成' : '下一步'" primary @click="handleNext"/>
      </div>
    </template>
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
    reset () {
      this.activeStep = 0
    }
  }
}
</script>

<style>
.demo-step-container {
  width: 100%;
  margin:auto;
}

.demo-step-content {
  margin:30px 0;
}

.demo-step-button {
  margin-top: 12px;
  margin-right: 12px;
}
</style>
