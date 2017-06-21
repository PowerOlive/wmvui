<template>
  <div id="app" class="vui-wrapper" :class="{'nav-hide': !open, 'home-page': isHomePage}">
    <vui-drawer :open="open" :docked="docked" @close="toggleNav" class="flex-item demo-meun">
      <div class="vui-flex vui-flex-ver">
        <vui-appbar :zDepth="0" class="exmaples-nav-appbar">
          <span class="exmaples-appbar-title">WMVUI基于Muse-UI</span>
        </vui-appbar>
        <div class="vui-flex-item exmaple-drawer-content">
          <vui-list :value="menuVal" @itemClick="handleItemClick">
            <template v-for="item in list">
                <vui-list-item :value="item.value" :title="item.title">
                  <vui-icon slot="left" :icon="item.icon" :size="18" />
                </vui-list-item>
            </template>
              <!-- <vui-list-item value="/usage" title="使用"/>
              <vui-list-item value="/theme" title="主题"/>
              <vui-list-item value="/colors" title="颜色"/>
              <vui-list-item value="/appbar" title="头部"/>
              <vui-list-item value="/avatar" title="头像"/>
              <vui-list-item value="/badge" title="徽章"/>
              <vui-list-item value="/icon" title="图标"/>
              <vui-list-item value="/svgIcon" title="多色图标"/>
              <vui-list-item value="/bottomNav" title="底导航"/>
              <vui-list-item value="/bottomSheet" title="底部面板"/>
              <vui-list-item value="/number" title="计数器"/>
              <vui-list-item value="/button" title="按钮" />
              <vui-list-item value="/card" title="卡片"/>
              <vui-list-item value="/chip" title="标签"/>
              <vui-list-item value="/subHeader" title="副标题"/>
              <vui-list-item value="/divider" title="分割线"/>
              <vui-list-item value="/contentBlock" title="简单内容块"/>
              <vui-list-item value="/paper" title="阴影框"/>
              <vui-list-item value="/drawer" title="侧边栏"/>
              <vui-list-item value="/dialog" title="弹窗"/>
              <vui-list-item value="/popup" title="无敌的弹层"/>
              <vui-list-item value="/grid" title="网格"/>
              <vui-list-item value="/gridList" title="网格列表"/>
              <vui-list-item value="/list" title="列表"/>
              <vui-list-item value="/menu" title="菜单"/>
              <vui-list-item value="/flexbox" title="Flex Box"/>
              <vui-list-item value="/iconMenu" title="图标菜单"/>
              <vui-list-item value="/popover" title="弹出下拉"/>
              <vui-list-item value="/dropDownMenu" title="下拉菜单"/>
              <vui-list-item value="/tabs" title="标签页"/>
              <vui-list-item value="/progress" title="进度条"/>
              <vui-list-item value="/loading" title="加载动画"/>
              <vui-list-item value="/textField" title="输入框"/>
              <vui-list-item value="/selectField" title="下拉选择"/>
              <vui-list-item value="/radio" title="单选框"/>
              <vui-list-item value="/checkbox" title="复选框"/>
              <vui-list-item value="/switch" title="开关控件"/>
              <vui-list-item value="/slider" title="滑块控件"/>
              <vui-list-item value="/snackbarToast" title="SnackBar & Toast"/>
              <vui-list-item value="/stepper" title="步骤导航"/>
              <vui-list-item value="/table" title="Table"/>
              <vui-list-item value="/tooltip" title="Tooltip"/>
              <vui-list-item value="/pagination" title="Pagination"/>
              <vui-list-item value="/datePicker" title="日期选择器"/>
              <vui-list-item value="/timePicker" title="时间选择"/>
              <vui-list-item value="/picker" title="Picker 选择器"/>
              <vui-list-item value="/infiniteScroll" title="无限滚动"/>
              <vui-list-item value="/refreshControl" title="下拉刷新"/> -->
          </vui-list>
        </div>
      </div>
    </vui-drawer>
    <div class="vui-flex vui-flex-ver example-content">
      <vui-appbar v-if="!isHomePage" :zDepth="0" :title="title === 'index' ? '' : $t(title)" class="example-appbar" :class="{'nav-hide': !open}">
      <vui-button :circle="42" color="#fff" :iconSize="18" @click="toggleNav" icon="menu" slot="left"/>
      <vui-button circle color="#fff" :iconSize="16" href="https://github.com/531431988/wmvui" slot="right" icon="like-fill"/>
    </vui-appbar>
      <router-view class="vui-container vui-flex-item"></router-view>
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
      title: '',
      list: [{
        title: '安装',
        value: '/install',
        icon: 'install'
      }, {
        title: '使用',
        value: '/usage',
        icon: 'book'
      }, {
        title: '主题',
        value: '/theme',
        icon: 'theme'
      }, {
        title: '颜色',
        value: '/colors',
        icon: 'color'
      }, {
        title: '头部',
        value: '/appbar',
        icon: 'header'
      }, {
        title: '头像',
        value: '/avatar',
        icon: 'user'
      }, {
        title: '徽章',
        value: '/badge',
        icon: 'dot'
      }, {
        title: '图标',
        value: '/icon',
        icon: 'icon'
      }, {
        title: '多色图标',
        value: '/svgicon',
        icon: 'face'
      }, {
      //   title: '底导航',
      //   value: '/bottomNav',
      //   icon: 'dot'
      // }, {
        title: '计数器',
        value: '/number',
        icon: 'calc'
      }, {
        title: '按钮',
        value: '/button',
        icon: 'button'
      }, {
        title: '卡片',
        value: '/card',
        icon: 'card'
      }, {
        title: '标签',
        value: '/chip',
        icon: 'tag'
      }, {
        title: '副标题',
        value: '/subHeader',
        icon: 'title'
      }, {
        title: '分割线',
        value: '/divider',
        icon: 'divider'
      }, {
        title: '简单内容块',
        value: '/contentBlock',
        icon: 'content'
      }, {
        title: '阴影框',
        value: '/paper',
        icon: 'paper'
      }, {
        title: '侧边栏',
        value: '/drawer',
        icon: 'sidebar'
      }, {
        title: '弹窗',
        value: '/dialog',
        icon: 'dialog'
      }, {
        title: '无敌的弹层',
        value: '/popup',
        icon: 'layer'
      }, {
        title: '网格列表',
        value: '/gridList',
        icon: 'grid'
      }, {
        title: '列表',
        value: '/list',
        icon: 'list'
      }, {
        title: '菜单',
        value: '/menu',
        icon: 'menu'
      }, {
        title: '图标菜单',
        value: '/iconMenu',
        icon: 'icon-menu'
      }, {
        title: 'Flex Box',
        value: '/flexbox',
        icon: 'dialog'
      }, {
        title: '选项卡',
        value: '/tabs',
        icon: 'tab'
      }, {
        title: '进度条',
        value: '/progress',
        icon: 'progress'
      }, {
        title: '加载动画',
        value: '/loading',
        icon: 'loading'
      }, {
        title: '输入框',
        value: '/textField',
        icon: 'input'
      }, {
        title: '下拉选择',
        value: '/selectField',
        icon: 'vertical-more'
      }, {
        title: '单选框',
        value: '/radio',
        icon: 'radio'
      }, {
        title: '复选框',
        value: '/checkbox',
        icon: 'checkbox'
      }, {
        title: '开关控件',
        value: '/switch',
        icon: 'switch'
      }, {
        title: '滑块控件',
        value: '/slider',
        icon: 'slider'
      }, {
        title: '步骤导航',
        value: '/stepper',
        icon: 'stepper'
      }, {
        title: '日期选择',
        value: '/datePicker',
        icon: 'date'
      }, {
        title: '时间选择',
        value: '/timePicker',
        icon: 'clock'
      }, {
        title: '选择器',
        value: '/picker',
        icon: 'picker'
      }, {
        title: '无限滚动',
        value: '/infiniteScroll',
        icon: 'double-arrow-top'
      }, {
        title: '下拉刷新',
        value: '/refreshControl',
        icon: 'double-arrow-bottom'
      }]
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
      this.menuVal = event.value
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
}
.exmaple-drawer-content{
  overflow: auto;
}
.example-content{
  padding-top: 56px;
  padding-left: 256px;
  transition: all .45s @easeOutFunction;
}
.nav-hide {
  .example-appbar{
    left:0;
  }
  .example-content{
    padding-left: 0;
  }
}

.content-wrapper{
  padding: 48px 72px;
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
  .demo-meun{
    display: none;
  }
  .example-content {
    transition-duration: 0s;
  }
}
</style>
