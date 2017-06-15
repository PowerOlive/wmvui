<template>
<vui-drawer @hide="handleHide" @close="handleClose" :open="open" :docked="docked" :overlay="docked" class="app-drawer" :zDepth="1">
  <vui-appbar :zDepth="0" class="exmaples-nav-appbar">
    <a @click="handleMenuChange('#/index')" href="#/index" class="exmaples-appbar-title">WMVUI基于Muse-UI</a>
    <!-- <vui-badge content="rc" class="exmaples-version" secondary/> -->
  </vui-appbar>
  <vui-divider/>
  <div class="exmaple-drawer-content">
    <div class="vui-version-box">
      <span class="vui-version-text">Version: </span>
      <vui-dropDown-menu :value="version" @change="handleVersionChange" v-if="versions.length > 0">
        <vui-menu-item v-for="vtext in versions" :key="'version-' + vtext" :value="vtext" :title="vtext"/>
      </vui-dropDown-menu>
    </div>
    <!-- <div class="vui-lang-box">
      <span class="vui-lang-title">Lang: </span>
      <span class="vui-lang-select">
        <a href="javascript:;" class="vui-lang" :class="{'active': lang === 'zh'}" @click="changeLang('zh')">中文</a>
        <span>/</span>
        <a href="javascript:;" class="vui-lang" :class="{'active': lang === 'en'}" @click="changeLang('en')">En</a>
      </span>
    </div> -->
    <vui-list @change="handleMenuChange" :value="menuVal">
      <vui-list-item :title="$t('getStarted')" toggleNested>
        <vui-list-item value="#/install" slot="nested" :title="$t('installation')"/>
        <vui-list-item value="#/usage" slot="nested" :title="$t('usage')"/>
      </vui-list-item>
      <vui-list-item :title="$t('customization')" toggleNested>
        <vui-list-item slot="nested" value="#/theme" :title="$t('theme')"/>
        <vui-list-item slot="nested" value="#/colors" :title="$t('color')"/>
      </vui-list-item>

      <vui-list-item :title="$t('component')" toggleNested>
        <vui-list-item slot="nested" value="#/appbar" title="头部"/>
        <vui-list-item slot="nested" value="#/autoComplete" title="自动补全"/>
        <vui-list-item slot="nested" value="#/avatar" title="头像"/>
        <vui-list-item slot="nested" value="#/badge" title="徽章"/>
        <vui-list-item slot="nested" value="#/bottomNav" title="底导航"/>
        <vui-list-item slot="nested" value="#/bottomSheet" title="底部面板"/>
        <vui-list-item slot="nested" value="#/number" title="计数器"/>
        <vui-list-item slot="nested" value="#/button" title="按钮" />
        <vui-list-item slot="nested" value="#/card" title="卡片"/>
        <vui-list-item slot="nested" value="#/chip" title="标签"/>
        <vui-list-item slot="nested" value="#/datePicker" title="日期选择器"/>
        <vui-list-item slot="nested" value="#/dialog" title="弹窗"/>
        <vui-list-item slot="nested" value="#/divider" title="分割线"/>
        <vui-list-item slot="nested" value="#/drawer" title="侧边栏"/>
        <vui-list-item slot="nested" value="#/gridList" title="Grid List"/>
        <vui-list-item slot="nested" value="#/icon" title="Icon"/>
        <vui-list-item slot="nested" value="#/svgIcon" title="svg icon"/>
        <vui-list-item slot="nested" value="#/list" title="List"/>
        <vui-list-item slot="nested" title="Menus" toggleNested>
          <vui-list-item slot="nested" value="#/menu" title="Menu"/>
          <vui-list-item slot="nested" value="#/iconMenu" title="Icon Menu"/>
          <vui-list-item slot="nested" value="#/dropDownMenu" title="DropDown Menu"/>
        </vui-list-item>
        <vui-list-item slot="nested" value="#/paper" title="Paper"/>
        <vui-list-item slot="nested" value="#/popover" title="Popover"/>
        <vui-list-item slot="nested" title="Progress" toggleNested>
          <vui-list-item slot="nested" value="#/linearProgress" title="Linear Progress"/>
          <vui-list-item slot="nested" value="#/circularProgress" title="Circular Progress"/>
        </vui-list-item>
        <vui-list-item slot="nested" value="#/selectField" title="Select Field"/>
        <vui-list-item slot="nested" title="Selection Controls" toggleNested>
          <vui-list-item slot="nested" value="#/checkbox" title="Checkbox"/>
          <vui-list-item slot="nested" value="#/radio" title="Radio"/>
          <vui-list-item slot="nested" value="#/switch" title="Switch"/>
        </vui-list-item>
        <vui-list-item slot="nested" value="#/slider" title="Slider"/>
        <!-- <vui-list-item slot="nested" value="#/snackbarToast" title="SnackBar & Toast"/> -->
        <vui-list-item slot="nested" value="#/stepper" title="Stepper"/>
        <vui-list-item slot="nested" value="#/subHeader" title="Sub Header"/>
        <!-- <vui-list-item slot="nested" value="#/table" title="Table"/> -->
        <vui-list-item slot="nested" value="#/tabs" title="Tabs"/>
        <vui-list-item slot="nested" value="#/textField" title="Text Field"/>
        <vui-list-item slot="nested" value="#/timePicker" title="Time Picker"/>
        <vui-list-item slot="nested" value="#/tooltip" title="Tooltip"/>
        <vui-sub-header slot="nested" class="exmaples-nav-sub-header">Others</vui-sub-header>
        <vui-list-item slot="nested" value="#/contentBlock" title="Content Block"/>
        <vui-list-item slot="nested" value="#/flexbox" title="Flex Box"/>
        <vui-list-item slot="nested" value="#/grid" title="Grid"/>
        <vui-list-item slot="nested" value="#/infiniteScroll" title="Infinite Scroll"/>
        <!-- <vui-list-item slot="nested" value="#/pagination" title="Pagination"/> -->
        <vui-list-item slot="nested" value="#/picker" title="Picker"/>
        <vui-list-item slot="nested" value="#/popup" title="Popup & Toast"/>
        <vui-list-item slot="nested" value="#/refreshControl" title="Refresh Control"/>
      </vui-list-item>
      <!-- <vui-list-item :title="$t('more')" toggleNested>
        <vui-list-item slot="nested" :title="$t('changeLog')" value="#/changeLog"/>
        <vui-list-item slot="nested" :title="$t('contributing')" value="#/contributing"/>
      </vui-list-item> -->
    </vui-list>
    <!-- <vui-divider/>
    <vui-sub-header>{{$t('resource')}}</vui-sub-header>
    <vui-list>
      <vui-list-item href="https://github.com/531431988/wmvui" target="_blank" title="GitHub"/>
      <vui-list-item href="http://vuejs.org/" target="_blank" title="Vue"/>
      <vui-list-item href="https://material.google.com/" target="_blank" title="Material Design"/>
      <vui-list-item href="http://www.material-ui.com/" target="_blank" title="Material-UI"/>
    </vui-list> -->
  </div>
</vui-drawer>
</template>

<script>
import Vue from 'vue'
import zh from './zh'
import en from './en'
import packageJson from '../../package.json'
export default {
  props: {
    open: {
      type: Boolean,
      default: true
    },
    docked: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      menuVal: '#/',
      version: packageJson.version,
      versions: []
    }
  },
  computed: {
    lang () {
      return Vue.config.lang
    }
  },
  methods: {
    handleVersionChange (val) {
      if (val !== this.version) {
        var url = this.versions.indexOf(val) === 0 ? '/' : '/' + val
        window.open(url)
      }
    },
    handleClose () {
      this.$emit('close')
    },
    handleMenuChange (val) {
      this.menuVal = val
      if (this.docked) {
        window.location.hash = this.menuVal
      } else {
        this.changeHref = true
      }
      this.$emit('change', val)
    },
    handleHide () {
      if (!this.changeHref) return
      window.location.hash = this.menuVal
      this.changeHref = false
    },
    changeLang (lang) {
      Vue.config.lang = lang
      window.localStorage.setItem('lang', lang)
    }
  },
  mounted () {
    this.menuVal = window.location.hash
    window.addEventListener('hashchange', () => {
      this.menuVal = window.location.hash
    })
    var xhr = new window.XMLHttpRequest()
    xhr.open('GET', '/version.json', true)
    xhr.onload = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          this.versions = JSON.parse(xhr.responseText)
          console.log(this.versions, this.version)
        } else {
          console.error(xhr.statusText)
        }
      }
    }
    xhr.send()
  },
  locales: {
    zh,
    en
  }
}
</script>

<style lang="less">
@import "../../src/styles/import.less";
.app-drawer{
  display: flex;
  flex-direction: column;
}

.exmaples-nav-appbar.vui-appbar{
  flex-shrink: 0;
}
.exmaple-drawer-content{
  flex: 1;
  .scrollable();
  .no-scrollbar();
}
.exmaples-appbar-title{
  color: inherit;
  display: inline-block;
}

.exmaples-version {
  margin-left: 10px;
  vertical-align: text-top;
}

.exmaples-nav-sub-header {
  padding-left: 34px;
}

.vui-version-box{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  margin-top: 8px;
  padding-left: 16px;
  padding-right: 16px;
}
.vui-version-text {
  font-size: 16px;
  margin-top: 8px;
  width: 60px;
}

.vui-lang-box{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  margin-top: 8px;
  padding-left: 16px;
  padding-right: 40px;
  font-size: 16px;
}

.vui-lang {
  color: inherit;
  margin-left: 2px;
  margin-right: 2px;
  &:last-child {
    margin-right: 0;
  }
  &:hover,
  &.active {
    color: @accentColor;
  }
}
</style>
