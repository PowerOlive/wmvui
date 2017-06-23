<template>
<div class="demo-vsteper-container">
  <vui-stepper :activeStep="activeStep" orientation="vertical">
    <vui-step>
      <vui-step-label label="地点" />
      <vui-step-content>
        <p>在附近选择一个活动的地点, 最好靠近地铁站公交站，已方便交通，附近设施应尽量完善，最重要的是有Wifi
        </p>
        <vui-button label="下一步" class="demo-step-button" @click="handleNext" primary/>
      </vui-step-content>
    </vui-step>
    <vui-step>
      <vui-step-label label="群组" />
      <vui-step-content>
        <p>
          创建群组，50人左右，以18-25单身青年为主。。。。。
        </p>
        <vui-button label="下一步" class="demo-step-button" @click="handleNext" primary/>
        <vui-button label="上一步" class="demo-step-button" @click="handlePrev"/>
      </vui-step-content>
    </vui-step>
    <vui-step>
      <vui-step-label label="活动" />
      <vui-step-content>
        <p>
          多在群里发消息宣传宣传，有事没事多在群里唠唠嗑，确定的话就ok拉
        </p>
        <vui-button label="完成" class="demo-step-button" @click="handleNext" primary/>
        <vui-button label="上一步" class="demo-step-button" @click="handlePrev"/>
      </vui-step-content>
    </vui-step>
  </vui-stepper>
  <p v-if="finished">
    都完成啦!<a href="javascript:;" @click="reset">点这里</a>可以重置
  </p>
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
