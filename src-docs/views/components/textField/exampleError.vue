<template>
<div>
    <vui-text-field 
    hintText="最小长度不为小于5"
    v-model="name" 
    @input="$v.name.$touch()"
    :errorText="errorInfo($v)"
    /><br/>

    <vui-text-field 
    hintText="必填最小长度不为小于5"
    v-model="value" 
    @input="handleInput($v)"
    :errorText="errorText"
    /><br/>

    <vui-text-field 
    hintText="密码"
    v-model="psd" 
    @input="$v.psd.$touch()"
    :errorText="psdText($v)"
    /><br/>
    <vui-text-field 
    hintText="确认密码"
    v-model="confirmPsd" 
    @input="$v.confirmPsd.$touch()"
    :errorText="confirmPsdText($v)"
    /><br/>

    <vui-text-field
    label="标签文字" 
    errorText="出错！出错！"
    hintText="提示文字"
    /><br/>
    <vui-text-field label="浮动标签" errorText="出错！出错！" labelFloat/><br/>
    <vui-text-field hintText="多行输入" errorText="不能一个字都不输入哦" multiLine :rows="3"/><br/>
    <vui-text-field label="自定义错误颜色" errorText="又输错了，笨死了！" errorColor="orange" labelFloat/><br/>
</div>
</template>

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      name: '',
      value: '',
      errorText: '',
      psd: '',
      confirmPsd: ''
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    value: {
      required,
      minLength: minLength(5)
    },
    psd: {
      required,
      minLength: minLength(6)
    },
    confirmPsd: {
      sameAsPassword: sameAs('psd')
    }
  },
  created () {
    this.handleInput(this.$v)
  },
  methods: {
    errorInfo ($v) {
      if (!$v.name.required) {
        return '必填'
      } else if (!$v.name.minLength) {
        return `最小长度${$v.name.$params.minLength.min}`
      } else {
        return ''
      }
    },
    psdText ($v) {
      if (!$v.psd.required) {
        return '必填'
      } else if (!$v.psd.minLength) {
        return `最小长度${$v.psd.$params.minLength.min}`
      } else {
        return ''
      }
    },
    confirmPsdText ($v) {
      if (!$v.psd.required) {
        return '必填'
      } else if (!$v.confirmPsd.sameAsPassword) {
        return '两次密码不相同'
      } else {
        return ''
      }
    },
    handleInput ($v) {
      this.errorText = $v.$invalid ? '必填' : ''
      if (!$v.value.required) {
        this.errorText = '必填'
      } else if (!$v.value.minLength) {
        this.errorText = `最小长度${$v.value.$params.minLength.min}`
      } else {
        this.errorText = ''
      }
    }
  }
}
</script>
