<template>
  <div id="app">
    <vui-appbar v-if="!isHomePage" :zDepth="0" :title="title === 'index' ? '' : $t(title)" class="example-appbar" :class="{'nav-hide': !open}">
      <vui-button :circle="42" color="#fff" :iconSize="18" @click="toggleNav" icon="menu" slot="left"/>
      <vui-button circle color="#fff" :iconSize="16" href="https://github.com/531431988/wmvui" slot="right" icon="like-fill"/>
    </vui-appbar>
    <vui-drawer :open="open" :docked="docked" @close="toggleNav" class="app-drawer" :zDepth="1">
      <vui-appbar :zDepth="0" class="exmaples-nav-appbar">
        <a href="#/index" class="exmaples-appbar-title">WMVUI基于Muse-UI</a>
      </vui-appbar>
      <vui-divider/>
      <div class="exmaple-drawer-content">
        <vui-list :value="menuVal" @itemClick="handleItemClick">
            <vui-list-item value="/install" title="安装"/>
            <vui-list-item value="/usage" title="使用"/>
            <vui-list-item value="/theme" title="主题"/>
            <vui-list-item value="/colors" title="颜色"/>
            <vui-list-item value="/appbar" title="头部"/>
            <vui-list-item value="/avatar" title="头像"/>
            <vui-list-item value="/badge" title="徽章"/>
            <vui-list-item value="/bottomNav" title="底导航"/>
            <vui-list-item value="/bottomSheet" title="底部面板"/>
            <vui-list-item value="/number" title="计数器"/>
            <vui-list-item value="/button" title="按钮" />
            <vui-list-item value="/card" title="卡片"/>
            <vui-list-item value="/chip" title="标签"/>
            <vui-list-item value="/datePicker" title="日期选择器"/>
            <vui-list-item value="/dialog" title="弹窗"/>
            <vui-list-item value="/divider" title="分割线"/>
            <vui-list-item value="/drawer" title="侧边栏"/>
            <vui-list-item value="/gridList" title="网格列表"/>
            <vui-list-item value="/icon" title="图标"/>
            <vui-list-item value="/svgIcon" title="多色图标"/>
            <vui-list-item value="/list" title="列表"/>
            <vui-list-item value="/menu" title="菜单"/>
            <vui-list-item value="/iconMenu" title="图标菜单"/>
            <vui-list-item value="/dropDownMenu" title="下拉菜单"/>
            <vui-list-item value="/paper" title="阴影框"/>
            <vui-list-item value="/popover" title="弹出下拉"/>
            <vui-list-item value="/linearProgress" title="条形进度条"/>
            <vui-list-item value="/circularProgress" title="圆形进度条"/>
            <vui-list-item value="/selectField" title="下拉选择"/>
            <vui-list-item value="/checkbox" title="复选框"/>
            <vui-list-item value="/radio" title="单选框"/>
            <vui-list-item value="/switch" title="开关控件"/>
            <vui-list-item value="/slider" title="滑块控件"/>
            <!-- <vui-list-item value="/snackbarToast" title="SnackBar & Toast"/> -->
            <vui-list-item value="/stepper" title="步骤导航"/>
            <vui-list-item value="/subHeader" title="副标题"/>
            <!-- <vui-list-item value="/table" title="Table"/> -->
            <vui-list-item value="/tabs" title="标签页"/>
            <vui-list-item value="/textField" title="输入框"/>
            <vui-list-item value="/timePicker" title="时间选择"/>
            <!-- <vui-list-item value="/tooltip" title="Tooltip"/> -->
            <vui-list-item value="/contentBlock" title="简单内容块"/>
            <vui-list-item value="/flexbox" title="Flex Box"/>
            <!-- <vui-list-item value="/grid" title="网格"/> -->
            <vui-list-item value="/infiniteScroll" title="无限滚动"/>
            <!-- <vui-list-item value="/pagination" title="Pagination"/> -->
            <vui-list-item value="/picker" title="Picker 选择器"/>
            <vui-list-item value="/popup" title="提示层"/>
            <vui-list-item value="/refreshControl" title="下拉刷新"/>
        </vui-list>
      </div>
    </vui-drawer>
    <div class="example-content" :class="{'nav-hide': !open, 'home-page': isHomePage}">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const desktop = isDesktop()
    return {
      menuVal: '/install',
      open: desktop,
      docked: desktop,
      desktop: desktop,
      title: ''
    }
  },
  computed: {
    isHomePage () {
      return this.$route.fullPath === '/index'
    }
  },
  mounted () {
    this.routes = this.$router.options.routes
    this.setTitle()
    this.changeNav()
    this.handleResize = () => {
      this.changeNav()
    }
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('hashchange', () => {
      this.setTitle()
    })
  },
  methods: {
    toggleNav (menuVal) {
      this.open = !this.open
    },
    changeNav () {
      const desktop = isDesktop()
      this.docked = desktop
      if (desktop === this.desktop) return
      if (!desktop && this.desktop && this.open) {
        this.open = false
      }
      if (desktop && !this.desktop && !this.open) {
        this.open = true
      }
      this.desktop = desktop
    },
    handleItemClick (event) {
      console.log(event.value)
      this.$router.push(event.value)
      if (!this.desktop) this.open = false
    },
    setTitle () {
      let path = window.location.hash
      if (path && path.length > 1) path = path.substring(1)
      for (let i = 0; i < this.routes.length; i++) {
        var route = this.routes[i]
        if (route.path === path) {
          this.title = path.substring(1) || ''
          return
        }
      }
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  }
}

function isDesktop () {
  return window.innerWidth > 993
}
</script>

<style lang="less">
@import "../src/styles/import.less";
.example-appbar{
  position: fixed;
  left: 256px;
  right: 0;
  top: 0;
  width: auto;
  transition: all .45s @easeOutFunction;
  &.nav-hide {
    left: 0;
  }
}

.example-content{
  padding-top: 56px;
  padding-left: 256px;
  transition: all .45s @easeOutFunction;
  &.nav-hide {
    padding-left: 0;
  }
}

.content-wrapper{
  padding: 48px 72px;
}

@media (min-width: 480px) {
  .example-content{
    padding-top: 64px;
  }
}

@media (max-width: 993px) {
  .example-appbar {
    left: 0;
  }
  .example-content{
    padding-left: 0;
  }
  .content-wrapper {
    padding: 24px 36px;
  }
}
.home-page{
  padding: 0;
  .example-content {
    transition-duration: 0s;
  }
}
</style>
