<template>
<div class="content-wrapper">
  <markdown-element :text="$t('title')"/>
  <vui-paper :class="['theme-' + theme, 'demo-theme-paper']">
    <vui-tabs :value="theme" @change="changeTheme">
      <vui-tab title="default" value="default"/>
      <vui-tab title="darkly" value="darkly"/>
      <vui-tab title="teal" value="teal"/>
      <vui-tab title="pink" value="pink"/>
    </vui-tabs>
    <vui-content-block :padding="['20px']">
      <div class="demo-theme-group">
        <div class="demo-theme-item center">
          <vui-loading :width="2"  class="demo-loading"/>
          <vui-loading type="line"  class="demo-loading"/>
        </div>
        <vui-button label="默认" class="demo-vui-raised-button" />
        <vui-button label="重要" primary class="demo-vui-raised-button" />
        <vui-button label="成功" success class="demo-vui-raised-button" />
        <vui-button label="提示" info class="demo-vui-raised-button" />
        <vui-button label="警告" warn class="demo-vui-raised-button" />
        <vui-button label="危险" danger class="demo-vui-raised-button" />
      </div>
      <div class="demo-theme-group">
        <div class="demo-theme-item">
          <vui-checkbox label="checkbox"/><br/>
          <vui-checkbox label="disabled checkbox" disabled/>
        </div>
        <div class="demo-theme-item">
          <vui-radio name="radio_group" nativeValue="1" label="radio1"/><br/>
          <vui-radio label="disabled radio" nativeValue="3"  disabled/>
        </div>
        <div class="demo-theme-item">
          <vui-switch label="switch"/><br/>
          <vui-switch label="disabled switch" disabled/>
        </div>
      </div>
      <div class="demo-theme-group">
        <div class="demo-theme-item">
          <vui-text-field hintText="Text Field" style="width: 100%"/>
        </div>
        <div class="demo-theme-item">
          <vui-date-picker hintText="Landspace Dialog" style="width: 100%; overflow:hidden;"/>
        </div>
        <div class="demo-theme-item">
          <vui-select-field v-model="selectVal">
            <vui-menu-item value="1" title="阴阳师"/>
            <vui-menu-item value="2" title="影之刃"/>
            <vui-menu-item value="3" title="天下HD"/>
            <vui-menu-item value="4" title="穿越火线"/>
            <vui-menu-item value="5" title="英雄联盟"/>
            <vui-menu-item value="6" title="王者荣耀"/>
          </vui-select-field>
          <vui-badge content="1" circle primary />
        </div>
      </div>
      <vui-slider :value="30"/>
      <vui-progress type="line" mode="determinate" :value="40" />
      <br>
      <vui-flex>
        <vui-flex-item>
          <div class="demo-theme-item">
            <vui-button label="弹层" primary @click="openDialog"/>
          </div>
        </vui-flex-item>
        <vui-flex-item>
          <div class="demo-theme-item">
            <vui-button label="侧边栏" primary @click="toggleDrawer"/>
          </div>
        </vui-flex-item>
      </vui-flex>
    </vui-content-block>
    <vui-dialog :open="dialog" title="Dialog" @close="closeDialog">
      {{$t('dialogDesc')}}
      <vui-button slot="actions" @click="closeDialog" text primary :label="$t('cancel')"/>
      <vui-button slot="actions" text primary @click="closeDialog" :label="$t('ok')"/>
    </vui-dialog>
    <vui-drawer :open="drawer" :docked="false" @close="toggleDrawer()">
      <vui-menu @itemClick="toggleDrawer()">
        <vui-menu-item title="Menu Item 1"/>
        <vui-menu-item title="Menu Item 2"/>
        <vui-menu-item title="Menu Item 3"/>
      </vui-menu>
    </vui-drawer>
    <vui-snackbar v-if="snackbar" :message="$t('snackbarDesc')" :action="$t('close')" @actionClick="hideSnackbar" @close="hideSnackbar"/>
  </vui-paper>
  <markdown-element :text="$t('themeDoc')"/>
</div>
</template>

<script>
import _default from 'raw!less!../../assets/themes/theme-default.less'
import darkly from 'raw!less!../../assets/themes/theme-darkly.less'
import teal from 'raw!less!../../assets/themes/theme-teal.less'
import pink from 'raw!less!../../assets/themes/theme-pink.less'
import zh from './zh'
import en from './en'

const themes = {
  darkly,
  teal,
  pink,
  default: _default
}
let theme = 'default'
export default {
  data () {
    return {
      dialog: false,
      drawer: false,
      snackbar: false,
      dropDown: 3,
      theme: theme,
      selectVal: ''
    }
  },
  methods: {
    changeDropDown (val) {
      this.dropDown = val
    },
    showSnackbar () {
      this.snackbar = true
      if (this.snackTimer) clearTimeout(this.snackTimer)
      this.snackTimer = setTimeout(() => { this.snackbar = false }, 2000)
    },
    hideSnackbar () {
      this.snackbar = false
      if (this.snackTimer) clearTimeout(this.snackTimer)
    },
    toggleDrawer () {
      this.drawer = !this.drawer
    },
    openDialog () {
      this.dialog = true
    },
    closeDialog () {
      this.dialog = false
    },
    changeTheme (val) {
      this.theme = theme = val
      const styleEl = this.getThemeStyle()
      styleEl.innerHTML = themes[theme] || ''
    },
    getThemeStyle () {
      const themeId = 'wmvui-theme'
      let styleEl = document.getElementById(themeId)
      if (styleEl) return styleEl
      styleEl = document.createElement('style')
      styleEl.id = themeId
      document.body.appendChild(styleEl)
      return styleEl
    }
  },
  locales: {
    zh,
    en
  }
}
</script>

<style lang="less">
.demo-theme-paper {
  margin-top: 16px;
  margin-bottom: 16px;
}


.demo-theme-item {
  margin-bottom: 16px;
  min-height: 24px;
  text-align: left;
  &.center {
    text-align: center;
  }
}

.demo-theme-group-slider {
  padding: 24px 50px 48px;
}
.demo-theme-group{
  margin-top: 20px;
}
@media only screen and (min-width: 48rem){
  .demo-theme-group{
    display: inline-block;
    width: 33%;
  }

}

</style>
