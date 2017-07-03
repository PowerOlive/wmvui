import Vue from 'vue'
import Router from 'vue-router'
import Index from './views'
import Install from './views/get-stared/install'
import Usage from './views/get-stared/usage'
import Colors from './views/customization/colors'
import Theme from './views/customization/theme'
import AppBar from './views/components/appbar'
import Avatar from './views/components/avatar'
import Badge from './views/components/badge'
import button from './views/components/button'
import Card from './views/components/card'
import tags from './views/components/tags'
import Dialog from './views/components/dialog'
import Divider from './views/components/divider'
import Drawer from './views/components/drawer'
import Preview from './views/components/preview'
import GridList from './views/components/gridList'
import Icon from './views/components/icon'
import svgIcon from './views/components/svgIcon'
import star from './views/components/star'
import progress from './views/components/progress'
import loading from './views/components/loading'
import List from './views/components/list'
import Menu from './views/components/menu'
import IconMenu from './views/components/iconMenu'
import Paper from './views/components/paper'
import SelectField from './views/components/selectField'
import number from './views/components/number'
import Checkbox from './views/components/checkbox'
import Radio from './views/components/radio'
import Switch from './views/components/switch'
import Range from './views/components/Range'
import Stepper from './views/components/stepper'
import SubHeader from './views/components/subHeader'
import Tabs from './views/components/tabs'
import TextField from './views/components/textField'
import ContentBlock from './views/components/contentBlock'
import Flexbox from './views/components/flexbox'
import InfiniteScroll from './views/components/infiniteScroll'
import Picker from './views/components/picker'
import Popup from './views/components/popup'
import RefreshControl from './views/components/refreshControl'
import DatePicker from './views/components/datePicker'
import TimePicker from './views/components/timePicker'
import Countdown from './views/components/countdown'
import Clocker from './views/components/clocker'
import MagicSum from './views/components/magicSum'
import Marquee from './views/components/marquee'
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/index', component: Index },
    { path: '/install', component: Install },
    { path: '/usage', component: Usage },
    { path: '/colors', component: Colors },
    { path: '/theme', component: Theme },
    { path: '/appbar', component: AppBar },
    { path: '/avatar', component: Avatar },
    { path: '/badge', component: Badge },
    { path: '/button', component: button },
    { path: '/card', component: Card },
    { path: '/tags', component: tags },
    { path: '/dialog', component: Dialog },
    { path: '/divider', component: Divider },
    { path: '/drawer', component: Drawer },
    { path: '/preview', component: Preview },
    { path: '/gridList', component: GridList },
    { path: '/icon', component: Icon },
    { path: '/svgIcon', component: svgIcon },
    { path: '/star', component: star },
    { path: '/progress', component: progress },
    { path: '/loading', component: loading },
    { path: '/list', component: List },
    { path: '/menu', component: Menu },
    { path: '/iconMenu', component: IconMenu },
    { path: '/paper', component: Paper },
    { path: '/selectField', component: SelectField },
    { path: '/number', component: number },
    { path: '/checkbox', component: Checkbox },
    { path: '/radio', component: Radio },
    { path: '/switch', component: Switch },
    { path: '/range', component: Range },
    { path: '/stepper', component: Stepper },
    { path: '/subHeader', component: SubHeader },
    { path: '/tabs', component: Tabs },
    { path: '/textField', component: TextField },
    { path: '/contentBlock', component: ContentBlock },
    { path: '/flexbox', component: Flexbox },
    // { path: '/grid', component: Grid },
    { path: '/infiniteScroll', component: InfiniteScroll },
    { path: '/picker', component: Picker },
    { path: '/popup', component: Popup },
    { path: '/refreshControl', component: RefreshControl },
    { path: '/datePicker', component: DatePicker },
    { path: '/timePicker', component: TimePicker },
    { path: '/countdown', component: Countdown },
    { path: '/clocker', component: Clocker },
    { path: '/magicSum', component: MagicSum },
    { path: '/marquee', component: Marquee },
    { path: '*', redirect: '/index' }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0) // scroll to top
  next()
})
export default router
