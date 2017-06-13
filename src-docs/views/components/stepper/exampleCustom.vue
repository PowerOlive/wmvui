<template>
<div class="demo-step-container">
  <vui-stepper :activeStep="activeStep" :linear="false">
    <vui-step>
      <vui-step-label>
        选择活动地点
      </vui-step-label>
    </vui-step>
    <vui-step>
      <vui-step-label class="demo-step-label-warning">
        <vui-icon slot="icon" icon="like-fill" color="red"/>
        创建一个群组
      </vui-step-label>
    </vui-step>
    <vui-step>
      <vui-step-label>
        宣传活动
      </vui-step-label>
    </vui-step>
  </vui-stepper>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeStep: -1
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

.demo-step-label-warning {
  color: rgb(244, 67, 54);
}
</style>
